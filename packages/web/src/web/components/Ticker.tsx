import { useLivePrices } from "../hooks/useLivePrices";

// API key from env (Vite exposes VITE_ prefixed vars)
const API_KEY = (import.meta as any).env?.VITE_TWELVE_DATA_API_KEY;

export default function Ticker() {
  const prices = useLivePrices(API_KEY);
  const doubled = [...prices, ...prices];

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
          <div key={i} className="flex items-center gap-2 shrink-0">
            <span className="text-[13px] font-semibold text-[#F0F2FF] tracking-wide">
              {item.symbol}
            </span>
            <span className="text-[13px] text-[#8A8FA8]">{item.price}</span>
            <span
              className="text-[12px] font-medium"
              style={{ color: item.positive ? "#22C55E" : "#EF4444" }}
            >
              {item.change}
            </span>
            <span className="text-[#1E2030] mx-4">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
