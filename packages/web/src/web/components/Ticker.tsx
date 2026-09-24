import { useLivePrices } from "../hooks/useLivePrices";

// Live market quotes ticker. Prices come from Yahoo Finance through the
// same-origin /api/quotes/* proxy (see vercel.json) — no API key, no
// invented numbers. While loading we show a shimmer; on failure we keep
// the last real values or show an honest "unavailable" note.
export default function Ticker() {
  const { prices, status } = useLivePrices();

  if (status === "loading" || !prices) {
    return (
      <div
        className="overflow-hidden py-3.5 relative"
        style={{
          background: "rgba(0,212,170,0.04)",
          borderTop: "1px solid rgba(0,212,170,0.12)",
          borderBottom: "1px solid rgba(0,212,170,0.12)",
        }}
      >
        <div className="flex items-center justify-center gap-2 py-1">
          <span className="w-2 h-2 rounded-full bg-[#00D4AA] animate-pulse" />
          <span className="text-[13px] text-[#8A8FA8]">
            {status === "error" ? "Live quotes temporarily unavailable" : "Loading live quotes…"}
          </span>
        </div>
      </div>
    );
  }

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
      {status === "stale" && (
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#8A8FA8]"
          title="Showing last received quotes — refresh pending"
        >
          delayed
        </span>
      )}
    </div>
  );
}
