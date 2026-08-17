import { useState, useEffect, useRef } from "react";

export interface TickerPrice {
  symbol: string;
  price: string;
  change: string;
  positive: boolean;
}

const SYMBOLS = [
  { symbol: "EUR/USD", td: "EUR/USD" },
  { symbol: "GBP/USD", td: "GBP/USD" },
  { symbol: "XAU/USD", td: "XAU/USD" },
  { symbol: "BTC/USD", td: "BTC/USD" },
  { symbol: "NAS100", td: "IXIC" },
  { symbol: "USD/JPY", td: "USD/JPY" },
  { symbol: "SPX500", td: "SPX" },
  { symbol: "ETH/USD", td: "ETH/USD" },
  { symbol: "OIL/USD", td: "WTI" },
  { symbol: "AUD/USD", td: "AUD/USD" },
];

const FALLBACK: TickerPrice[] = [
  { symbol: "EUR/USD", price: "1.08542", change: "+0.12%", positive: true },
  { symbol: "GBP/USD", price: "1.26341", change: "+0.08%", positive: true },
  { symbol: "XAU/USD", price: "2,318.40", change: "+0.34%", positive: true },
  { symbol: "BTC/USD", price: "67,842.00", change: "+2.14%", positive: true },
  { symbol: "NAS100", price: "18,024.5", change: "-0.22%", positive: false },
  { symbol: "USD/JPY", price: "151.842", change: "+0.06%", positive: true },
  { symbol: "SPX500", price: "5,248.30", change: "+0.15%", positive: true },
  { symbol: "ETH/USD", price: "3,184.60", change: "+1.42%", positive: true },
  { symbol: "OIL/USD", price: "81.24", change: "-0.31%", positive: false },
  { symbol: "AUD/USD", price: "0.64821", change: "+0.09%", positive: true },
];

function formatPrice(price: number, symbol: string): string {
  if (symbol.includes("BTC") || symbol.includes("NAS") || symbol.includes("SPX")) {
    return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  if (symbol.includes("JPY")) return price.toFixed(3);
  if (symbol.includes("XAU") || symbol.includes("OIL")) return price.toFixed(2);
  return price.toFixed(5);
}

export function useLivePrices(apiKey?: string) {
  const [prices, setPrices] = useState<TickerPrice[]>(FALLBACK);
  const prevRef = useRef<Record<string, number>>({});
  const initialFetchDone = useRef(false);

  useEffect(() => {
    // If API key exists, fetch real prices once for initial state
    if (apiKey && !initialFetchDone.current) {
      initialFetchDone.current = true;
      
      const symbols = SYMBOLS.map(s => s.td).join(",");
      fetch(`https://api.twelvedata.com/quote?symbol=${symbols}&apikey=${apiKey}`)
        .then(r => r.json())
        .then(data => {
          const updated: TickerPrice[] = SYMBOLS.map(({ symbol, td }) => {
            const q = data[td];
            if (!q || q.status === "error") return FALLBACK.find(f => f.symbol === symbol)!;
            const price = parseFloat(q.close);
            const open = parseFloat(q.open);
            const pct = ((price - open) / open) * 100;
            prevRef.current[symbol] = price;
            return {
              symbol,
              price: formatPrice(price, symbol),
              change: `${pct >= 0 ? "+" : ""}${pct.toFixed(2)}%`,
              positive: pct >= 0,
            };
          });
          setPrices(updated);
        })
        .catch(() => {
          // If API fails, fall back to FALLBACK prices
          console.log("[Ticker] Using fallback prices");
        });
    }

    // Simulate live updates (works with or without API key)
    // Small changes from current prices to look realistic
    const interval = setInterval(() => {
      setPrices(prev => prev.map(p => {
        // Very small random price change (-0.05% to +0.05%)
        const changePercent = (Math.random() - 0.5) * 0.1;
        const currentPrice = parseFloat(p.price.replace(/,/g, ""));
        const newPrice = currentPrice * (1 + changePercent / 100);
        
        // Random change display (-0.3% to +0.3%)
        const displayChange = (Math.random() - 0.5) * 0.6;
        const positive = displayChange >= 0;
        
        return {
          ...p,
          price: formatPrice(newPrice, p.symbol),
          change: `${positive ? "+" : ""}${displayChange.toFixed(2)}%`,
          positive,
        };
      }));
    }, 4000); // Update every 4 seconds

    return () => clearInterval(interval);
  }, [apiKey]);

  return prices;
}
