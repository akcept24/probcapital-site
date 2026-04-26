import { useLang } from "../i18n/LangContext";

const authors = [
  { name: "Alex T.", handle: "🇬🇧 United Kingdom", avatar: "AT", payout: "$4,200" },
  { name: "Marcus R.", handle: "🇩🇪 Germany", avatar: "MR", payout: "$2,800" },
  { name: "Dmitri V.", handle: "🇷🇺 Russia", avatar: "DV", payout: "$11,500" },
  { name: "James K.", handle: "🇺🇸 United States", avatar: "JK", payout: "$3,600" },
  { name: "Sofia M.", handle: "🇪🇸 Spain", avatar: "SM", payout: "$1,900" },
  { name: "Yusuf A.", handle: "🇹🇷 Turkey", avatar: "YA", payout: "$5,100" },
];

export default function Testimonials() {
  const { tr } = useLang();

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {tr.test_badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {tr.test_h2_1}{" "}<span className="gold-text">{tr.test_h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[480px] mx-auto text-[16px]">{tr.test_sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {authors.map((a, i) => (
            <div key={i} className="p-6 rounded-2xl transition-all duration-300"
              style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
              <div className="flex gap-0.5 mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <span key={j} className="text-[#00D4AA] text-[14px]">★</span>
                ))}
              </div>
              <p className="text-[14px] text-[#8A8FA8] leading-relaxed mb-5">
                "{(tr.test_quotes as readonly string[])[i]}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold gold-gradient text-[#0F1117]">
                    {a.avatar}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-[#F0F2FF]">{a.name}</div>
                    <div className="text-[12px] text-[#555A72]">{a.handle}</div>
                  </div>
                </div>
                <div className="text-[13px] font-bold px-2.5 py-1 rounded-lg"
                  style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.15)" }}>
                  {a.payout}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-10 py-5 px-8 rounded-2xl flex flex-wrap items-center justify-center gap-6 text-center"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="text-[13px] text-[#8A8FA8]"><strong className="text-[#F0F2FF]">2,800+</strong> {tr.test_reviews}</div>
          <div className="w-px h-8 bg-white/5 hidden sm:block" />
          <div className="text-[13px] text-[#8A8FA8]"><strong className="text-[#F0F2FF]">$2.4M+</strong> {tr.test_total}</div>
          <div className="w-px h-8 bg-white/5 hidden sm:block" />
          <div className="text-[13px] text-[#8A8FA8]"><strong className="text-[#F0F2FF]">12,400+</strong> {tr.test_traders}</div>
        </div>
      </div>
    </section>
  );
}
