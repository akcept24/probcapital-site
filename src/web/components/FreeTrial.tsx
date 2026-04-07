import { useLang } from "../i18n/LangContext";

const labels = {
  en: {
    badge: "Risk Free",
    h2_1: "Try Before You",
    h2_2: "Buy",
    sub: "Not sure yet? Start with a Free Trial account. No payment required. Test our platform, explore the rules, and get comfortable before committing.",
    point1: "Full platform access",
    point2: "Same rules as the real challenge",
    point3: "No credit card required",
    point4: "As many free trials as you need",
    cta: "Start Free Trial →",
    cta2: "See Challenge Plans",
    note: "Free Trial accounts are identical to paid challenges — same instruments, same dashboard, same experience.",
  },
  ru: {
    badge: "Без риска",
    h2_1: "Попробуйте",
    h2_2: "бесплатно",
    sub: "Не уверены? Начните с бесплатного пробного аккаунта. Без оплаты. Протестируйте платформу, изучите правила и убедитесь, прежде чем начинать.",
    point1: "Полный доступ к платформе",
    point2: "Те же правила, что и в реальном челлендже",
    point3: "Без банковской карты",
    point4: "Неограниченное количество попыток",
    cta: "Начать бесплатно →",
    cta2: "Смотреть тарифы",
    note: "Бесплатные аккаунты идентичны платным — те же инструменты, тот же дашборд, тот же опыт.",
  },
};

export default function FreeTrial() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="rounded-3xl overflow-hidden relative"
          style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 600px 400px at 70% 50%, rgba(0,212,170,0.07) 0%, transparent 70%)" }} />
          {/* Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-20"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 p-10 md:p-14 items-center">
            {/* Left */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[12px] font-semibold uppercase tracking-widest"
                style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
                {l.badge}
              </div>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                {l.h2_1}<br /><span className="gold-text">{l.h2_2}</span>
              </h2>
              <p className="text-[#8A8FA8] text-[16px] leading-relaxed mb-8 max-w-[460px]">{l.sub}</p>

              <ul className="space-y-3 mb-8">
                {[l.point1, l.point2, l.point3, l.point4].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[15px] text-[#F0F2FF]">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.25)" }}>
                      <span className="text-[#00D4AA] text-[11px] font-bold">✓</span>
                    </div>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer" className="gold-gradient text-[#0F1117] text-[15px] font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-center"
                  style={{ boxShadow: "0 8px 24px rgba(0,212,170,0.25)" }}>
                  {l.cta}
                </a>
                <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer" className="text-[#F0F2FF] text-[15px] font-semibold px-7 py-3.5 rounded-xl text-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.3)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  {l.cta2}
                </a>
              </div>
            </div>

            {/* Right — visual */}
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div className="w-full max-w-[340px] rounded-2xl p-6"
                style={{ background: "#0F1117", border: "1px solid rgba(0,212,170,0.2)", boxShadow: "0 0 40px rgba(0,212,170,0.08)" }}>
                {/* Mock account card */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-[11px] text-[#555A72] uppercase tracking-widest mb-1">Free Trial Account</div>
                    <div className="text-[26px] font-black text-[#F0F2FF]">$10,000</div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full text-[11px] font-bold"
                    style={{ background: "rgba(0,212,170,0.12)", color: "#00D4AA", border: "1px solid rgba(0,212,170,0.2)" }}>
                    FREE
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  {[
                    { label: "Profit Target", value: "10%", color: "#00D4AA" },
                    { label: "Max Drawdown", value: "10%", color: "#F0F2FF" },
                    { label: "Profit Split", value: "80%", color: "#00D4AA" },
                    { label: "Time Limit", value: "14 Days", color: "#F0F2FF" },
                  ].map(r => (
                    <div key={r.label} className="flex justify-between items-center py-2.5 px-3 rounded-lg"
                      style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                      <span className="text-[13px] text-[#8A8FA8]">{r.label}</span>
                      <span className="text-[13px] font-bold" style={{ color: r.color }}>{r.value}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full py-3 rounded-xl text-center text-[14px] font-bold text-[#0F1117] gold-gradient"
                  style={{ boxShadow: "0 4px 16px rgba(0,212,170,0.2)" }}>
                  $0.00 — Start Free
                </div>

                <p className="text-[11px] text-[#555A72] text-center mt-3 leading-relaxed">{l.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
