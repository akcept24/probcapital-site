export type TickerItem = { symbol: string; price: string; change: string };

const ROWS = [
  "EUR/USD",
  "GBP/USD",
  "XAU/USD",
  "BTC/USD",
  "NAS100",
  "USD/JPY",
  "SPX500",
  "ETH/USD",
  "OIL/USD",
  "AUD/USD",
] as const;

function fmt(n: number, opts: { maxDecimals: number; minDecimals?: number; useGrouping?: boolean }) {
  const { maxDecimals, minDecimals = 0, useGrouping = false } = opts;
  if (n == null || Number.isNaN(n)) return "—";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: maxDecimals,
    useGrouping,
  }).format(n);
}

function toItem(symbol: string, price: number | null, changePct: number): TickerItem {
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

/** Browser fallback when `/api/quotes` is unavailable (local `vite` without `vercel dev`). */
async function clientFallback(): Promise<TickerItem[]> {
  const yd = prevBusinessDayIso();
  const dash = (s: string): TickerItem => ({ symbol: s, price: "—", change: "—" });
  const map = new Map<string, { price: number; changePct: number }>();

  try {
    const [latest, past, cg] = await Promise.all([
      fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,JPY,AUD").then((r) => r.json()),
      fetch(`https://api.frankfurter.app/${yd}?from=USD&to=EUR,GBP,JPY,AUD`).then((r) => r.json()),
      fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true",
      ).then((r) => r.json()),
    ]);
    const l = latest?.rates;
    const p = past?.rates;
    const pct = (now: number, was: number) => (was && was !== 0 ? ((now - was) / was) * 100 : 0);
    if (l && p) {
      if (l.EUR && p.EUR) {
        const now = 1 / l.EUR;
        const was = 1 / p.EUR;
        map.set("EUR/USD", { price: now, changePct: pct(now, was) });
      }
      if (l.GBP && p.GBP) {
        const now = 1 / l.GBP;
        const was = 1 / p.GBP;
        map.set("GBP/USD", { price: now, changePct: pct(now, was) });
      }
      if (l.AUD && p.AUD) {
        const now = 1 / l.AUD;
        const was = 1 / p.AUD;
        map.set("AUD/USD", { price: now, changePct: pct(now, was) });
      }
      if (l.JPY && p.JPY) map.set("USD/JPY", { price: l.JPY, changePct: pct(l.JPY, p.JPY) });
    }
    if (cg?.bitcoin?.usd != null) {
      map.set("BTC/USD", {
        price: cg.bitcoin.usd,
        changePct: cg.bitcoin.usd_24h_change ?? 0,
      });
    }
    if (cg?.ethereum?.usd != null) {
      map.set("ETH/USD", {
        price: cg.ethereum.usd,
        changePct: cg.ethereum.usd_24h_change ?? 0,
      });
    }
  } catch {
    /* ignore */
  }

  return ROWS.map((s) => {
    const v = map.get(s);
    return v ? toItem(s, v.price, v.changePct) : dash(s);
  });
}

export async function fetchTickerQuotes(): Promise<TickerItem[]> {
  const base =
    typeof import.meta.env.VITE_QUOTES_API_BASE === "string" && import.meta.env.VITE_QUOTES_API_BASE.trim()
      ? import.meta.env.VITE_QUOTES_API_BASE.trim().replace(/\/$/, "")
      : "";

  const url = `${base}/api/quotes`;

  try {
    const r = await fetch(url, { headers: { Accept: "application/json" } });
    if (r.ok) {
      const j = (await r.json()) as { items?: TickerItem[] };
      if (Array.isArray(j.items) && j.items.length > 0) return j.items;
    }
  } catch {
    /* use fallback */
  }

  return clientFallback();
}
