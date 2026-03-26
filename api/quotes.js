/**
 * Aggregates market quotes for the marketing ticker (Vercel serverless, no browser CORS).
 * Primary: Yahoo chart API. Fallback: Frankfurter (FX) + CoinGecko (BTC, ETH).
 */

const UA = "Mozilla/5.0 (compatible; ProbCapitalSite/1.0; +https://probcapital.com)";

/** @typedef {{ symbol: string; price: string; change: string }} TickerItem */

/**
 * @param {number} n
 * @param {{ maxDecimals: number; minDecimals?: number; useGrouping?: boolean }} opts
 */
function fmt(n, opts) {
  const { maxDecimals, minDecimals = 0, useGrouping = false } = opts;
  if (n == null || Number.isNaN(n)) return "—";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals,
    useGrouping,
  }).format(n);
}

/**
 * @param {string} symbol Yahoo chart symbol
 * @returns {Promise<{ price: number; changePct: number } | null>}
 */
async function yahooChart(symbol) {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(
      symbol,
    )}?range=5d&interval=1d`;
    const r = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "application/json" },
      signal: AbortSignal.timeout(12_000),
    });
    if (!r.ok) return null;
    const j = await r.json();
    const res = j.chart?.result?.[0];
    if (!res) return null;
    const meta = res.meta;
    const price = meta.regularMarketPrice ?? meta.previousClose;
    const prev = meta.chartPreviousClose ?? meta.previousClose;
    if (price == null || prev == null || prev === 0) return null;
    const changePct = ((price - prev) / prev) * 100;
    return { price, changePct };
  } catch {
    return null;
  }
}

function prevBusinessDayIso() {
  const x = new Date();
  x.setUTCDate(x.getUTCDate() - 1);
  for (let i = 0; i < 5; i++) {
    const d = x.getUTCDay();
    if (d !== 0 && d !== 6) break;
    x.setUTCDate(x.getUTCDate() - 1);
  }
  return x.toISOString().slice(0, 10);
}

/** @returns {Promise<Record<string, { price: number; changePct: number } | null>>} */
async function frankfurterFallback() {
  const yd = prevBusinessDayIso();
  let latest;
  let past;
  try {
    const [l, p] = await Promise.all([
      fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,JPY,AUD", {
        signal: AbortSignal.timeout(10_000),
      }).then((r) => r.json()),
      fetch(`https://api.frankfurter.app/${yd}?from=USD&to=EUR,GBP,JPY,AUD`, {
        signal: AbortSignal.timeout(10_000),
      }).then((r) => r.json()),
    ]);
    latest = l?.rates;
    past = p?.rates;
  } catch {
    return {};
  }
  if (!latest || !past) return {};

  const out = {};
  const pct = (now, was) => (was && was !== 0 ? ((now - was) / was) * 100 : 0);

  if (latest.EUR && past.EUR) {
    const now = 1 / latest.EUR;
    const was = 1 / past.EUR;
    out["EUR/USD"] = { price: now, changePct: pct(now, was) };
  }
  if (latest.GBP && past.GBP) {
    const now = 1 / latest.GBP;
    const was = 1 / past.GBP;
    out["GBP/USD"] = { price: now, changePct: pct(now, was) };
  }
  if (latest.AUD && past.AUD) {
    const now = 1 / latest.AUD;
    const was = 1 / past.AUD;
    out["AUD/USD"] = { price: now, changePct: pct(now, was) };
  }
  if (latest.JPY && past.JPY) {
    out["USD/JPY"] = { price: latest.JPY, changePct: pct(latest.JPY, past.JPY) };
  }
  return out;
}

/** @returns {Promise<Record<string, { price: number; changePct: number } | null>>} */
async function coinGeckoFallback() {
  try {
    const url =
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true";
    const r = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    if (!r.ok) return {};
    const j = await r.json();
    const out = {};
    if (j.bitcoin?.usd != null) {
      out["BTC/USD"] = {
        price: j.bitcoin.usd,
        changePct: j.bitcoin.usd_24h_change ?? 0,
      };
    }
    if (j.ethereum?.usd != null) {
      out["ETH/USD"] = {
        price: j.ethereum.usd,
        changePct: j.ethereum.usd_24h_change ?? 0,
      };
    }
    return out;
  } catch {
    return {};
  }
}

function toTickerItem(symbol, price, changePct) {
  const sign = changePct >= 0 ? "+" : "";
  const change = `${sign}${changePct.toFixed(2)}%`;
  let priceStr = "—";
  if (price != null && !Number.isNaN(price)) {
    if (symbol === "BTC/USD") priceStr = fmt(price, { maxDecimals: 0, useGrouping: true });
    else if (symbol === "ETH/USD" || symbol === "XAU/USD" || symbol === "OIL/USD")
      priceStr = fmt(price, { maxDecimals: 2, minDecimals: 2, useGrouping: true });
    else if (symbol === "NAS100" || symbol === "SPX500")
      priceStr = fmt(price, { maxDecimals: 1, minDecimals: 1, useGrouping: true });
    else if (symbol === "USD/JPY") priceStr = fmt(price, { maxDecimals: 3, minDecimals: 3 });
    else priceStr = fmt(price, { maxDecimals: 5, minDecimals: 5 });
  }
  return { symbol, price: priceStr, change };
}

/** @type {Array<{ symbol: string; yahoo: string }>} */
const ROWS = [
  { symbol: "EUR/USD", yahoo: "EURUSD=X" },
  { symbol: "GBP/USD", yahoo: "GBPUSD=X" },
  { symbol: "XAU/USD", yahoo: "XAUUSD=X" },
  { symbol: "BTC/USD", yahoo: "BTC-USD" },
  { symbol: "NAS100", yahoo: "^NDX" },
  { symbol: "USD/JPY", yahoo: "USDJPY=X" },
  { symbol: "SPX500", yahoo: "^GSPC" },
  { symbol: "ETH/USD", yahoo: "ETH-USD" },
  { symbol: "OIL/USD", yahoo: "CL=F" },
  { symbol: "AUD/USD", yahoo: "AUDUSD=X" },
];

const STATIC = [
  { symbol: "EUR/USD", price: "—", change: "—" },
  { symbol: "GBP/USD", price: "—", change: "—" },
  { symbol: "XAU/USD", price: "—", change: "—" },
  { symbol: "BTC/USD", price: "—", change: "—" },
  { symbol: "NAS100", price: "—", change: "—" },
  { symbol: "USD/JPY", price: "—", change: "—" },
  { symbol: "SPX500", price: "—", change: "—" },
  { symbol: "ETH/USD", price: "—", change: "—" },
  { symbol: "OIL/USD", price: "—", change: "—" },
  { symbol: "AUD/USD", price: "—", change: "—" },
];

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "public, s-maxage=45, stale-while-revalidate=120");

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const yahooResults = await Promise.all(ROWS.map((row) => yahooChart(row.yahoo)));

  const fallbackFx = await frankfurterFallback();
  const fallbackCrypto = await coinGeckoFallback();

  /** @type {TickerItem[]} */
  const items = ROWS.map((row, i) => {
    const y = yahooResults[i];
    if (y) return toTickerItem(row.symbol, y.price, y.changePct);
    const fb = fallbackFx[row.symbol] ?? fallbackCrypto[row.symbol];
    if (fb) return toTickerItem(row.symbol, fb.price, fb.changePct);
    return { symbol: row.symbol, price: "—", change: "—" };
  });

  const allDash = items.every((x) => x.price === "—");
  if (allDash) {
    return res.status(200).json({ items: STATIC, source: "static" });
  }

  return res.status(200).json({ items, source: "live" });
}
