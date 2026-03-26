const items = [
  { symbol: "EUR/USD", price: "1.08542", change: "+0.12%" },
  { symbol: "GBP/USD", price: "1.26341", change: "+0.08%" },
  { symbol: "XAU/USD", price: "2,318.40", change: "+0.34%" },
  { symbol: "BTC/USD", price: "67,842.00", change: "+2.14%" },
  { symbol: "NAS100", price: "18,024.5", change: "-0.22%" },
  { symbol: "USD/JPY", price: "151.842", change: "+0.06%" },
  { symbol: "SPX500", price: "5,248.30", change: "+0.15%" },
  { symbol: "ETH/USD", price: "3,184.60", change: "+1.42%" },
  { symbol: "OIL/USD", price: "81.24", change: "-0.31%" },
  { symbol: "AUD/USD", price: "0.64821", change: "+0.09%" },
];

export default function Ticker() {
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
          <div key={i} className="flex items-center gap-2 shrink-0">
            <span className="text-[13px] font-semibold text-[#F0F2FF] tracking-wide">
              {item.symbol}
            </span>
            <span className="text-[13px] text-[#8A8FA8]">{item.price}</span>
            <span
              className="text-[12px] font-medium"
              style={{ color: item.change.startsWith("+") ? "#22C55E" : "#EF4444" }}
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
