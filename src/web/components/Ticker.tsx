import { useEffect, useState } from "react";
import { fetchTickerQuotes, type TickerItem } from "../lib/ticker-quotes";

const FALLBACK: TickerItem[] = [
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

const REFRESH_MS = 60_000;

export default function Ticker() {
  const [items, setItems] = useState<TickerItem[]>(FALLBACK);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const next = await fetchTickerQuotes();
      if (!cancelled && next.length) setItems(next);
    }

    load();
    const id = window.setInterval(load, REFRESH_MS);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-3.5 relative"
      style={{
        background: "rgba(0,212,170,0.04)",
        borderTop: "1px solid rgba(0,212,170,0.12)",
        borderBottom: "1px solid rgba(0,212,170,0.12)",
      }}
    >
      <div className="ticker-inner gap-10">
        {doubled.map((item, i) => (
          <div key={`${item.symbol}-${i}`} className="flex items-center gap-2 shrink-0">
            <span className="text-[13px] font-semibold text-[#F0F2FF] tracking-wide">{item.symbol}</span>
            <span className="text-[13px] text-[#8A8FA8]">{item.price}</span>
            <span
              className="text-[12px] font-medium"
              style={{
                color:
                  item.change === "—"
                    ? "#8A8FA8"
                    : item.change.startsWith("+")
                      ? "#22C55E"
                      : "#EF4444",
              }}
            >
              {item.change}
            </span>
            <span className="text-[#1E1E24] mx-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
