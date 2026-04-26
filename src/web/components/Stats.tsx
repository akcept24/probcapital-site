import { useLang } from "../i18n/LangContext";

export default function Stats() {
  const { tr } = useLang();

  const stats = [
    { value: "$2.4M+", label: tr.stats_payouts },
    { value: "12,400+", label: tr.stats_traders },
    { value: "90%", label: tr.stats_split },
    { value: "$400K", label: tr.stats_funding },
    { value: "24h", label: tr.stats_payout_time },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="rounded-2xl p-6 md:p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
          style={{
            background: "#1A1D27",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow: "0 0 60px rgba(0,212,170,0.04)",
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center px-2 py-2">
              <div
                className="font-black gold-text mb-1 leading-tight"
                style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}
              >
                {s.value}
              </div>
              <div className="text-[11px] text-[#8A8FA8] uppercase tracking-wider font-medium leading-tight">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
