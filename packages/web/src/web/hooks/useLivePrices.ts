import { useState, useEffect, useRef } from "react";

export interface TickerPrice {
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
}

export type QuotesStatus = "loading" | "live" | "stale" | "error";

// Real market data via Yahoo Finance (proxied same-origin through
// /api/quotes/* -> query1.finance.yahoo.com, see vercel.json).
// No API key needed, no fabricated prices: if a fetch fails we keep the
// last real values instead of inventing numbers.
interface SymbolDef {
  label: string;
  yahoo: string;
}

const SYMBOLS: SymbolDef[] = [
  { label: "EUR/USD", yahoo: "EURUSD=X" },
  { label: "GBP/USD", yahoo: "GBPUSD=X" },
  { label: "XAU/USD", yahoo: "GC=F" }, // gold front-month future
  { label: "BTC/USD", yahoo: "BTC-USD" },
  { label: "NAS100", yahoo: "^NDX" },
  { label: "USD/JPY", yahoo: "JPY=X" },
  { label: "SPX500", yahoo: "^GSPC" },
  { label: "ETH/USD", yahoo: "ETH-USD" },
  { label: "OIL/USD", yahoo: "CL=F" }, // WTI front-month future
  { label: "AUD/USD", yahoo: "AUDUSD=X" },
];

const POLL_MS = 60_000; // refresh every minute

function formatPrice(price: number, label: string): string {
  if (label.includes("BTC") || label.includes("NAS") || label.includes("SPX")) {
    return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (label.includes("JPY")) return price.toFixed(3);
  if (label.includes("XAU") || label.includes("OIL")) return price.toFixed(2);
  return price.toFixed(5);
}

interface YahooMeta {
  regularMarketPrice?: number;
  chartPreviousClose?: number;
}

async function fetchQuote(def: SymbolDef): Promise<TickerPrice | null> {
  try {
    const res = await fetch(`/api/quotes/${encodeURIComponent(def.yahoo)}`);
    if (!res.ok) return null;
    const data = await res.json();
    const meta = data?.chart?.result?.[0]?.meta as YahooMeta | undefined;
    const price = meta?.regularMarketPrice;
    const prev = meta?.chartPreviousClose;
    if (typeof price !== "number" || typeof prev !== "number" || prev === 0) return null;
    const pct = ((price - prev) / prev) * 100;
    return {
      symbol: def.label,
      price: formatPrice(price, def.label),
      change: `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`,
      positive: pct >= 0,
    };
  } catch {
    return null;
  }
}

export function useLivePrices() {
  const [prices, setPrices] = useState<TickerPrice[] | null>(null);
  const [status, setStatus] = useState<QuotesStatus>("loading");
  const hasDataRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const results = await Promise.all(SYMBOLS.map(fetchQuote));
      if (cancelled) return;
      const fresh = results.filter((r): r is TickerPrice => r !== null);
      if (fresh.length > 0) {
        hasDataRef.current = true;
        const bySymbol = new Map(fresh.map((q) => [q.symbol, q]));
        // Merge: keep last real value for symbols that failed this round
        setPrices((prev) => {
          if (!prev) return fresh;
          return prev.map((p) => bySymbol.get(p.symbol) ?? p);
        });
        setStatus("live");
      } else if (hasDataRef.current) {
        setStatus("stale");
      } else {
        setStatus("error");
      }
    }

    load();
    const id = setInterval(load, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return { prices, status };
}
