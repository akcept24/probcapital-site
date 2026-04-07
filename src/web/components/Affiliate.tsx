import { useLang } from "../i18n/LangContext";

const labels = {
  en: {
    badge: "Earn More",
    h2_1: "Refer Traders.",
    h2_2: "Earn Commission.",
    sub: "Join our affiliate program and earn up to 15% commission on every challenge sold through your link. No cap. Lifetime tracking.",
    stat1: "15%", label1: "Commission per sale",
    stat2: "30d", label2: "Cookie duration",
    stat3: "24h", label3: "Payout processing",
    stat4: "∞", label4: "No earnings cap",
    point1: "Unique referral link + dashboard",
    point2: "Real-time tracking & analytics",
    point3: "Monthly payouts via crypto or bank",
    point4: "Dedicated affiliate manager",
    cta: "Join Affiliate Program →",
    cta2: "Learn More",
  },
  ru: {
    badge: "Зарабатывай больше",
    h2_1: "Приводи трейдеров.",
    h2_2: "Получай комиссию.",
    sub: "Присоединяйтесь к нашей партнёрской программе и получайте до 15% комиссии с каждого проданного по вашей ссылке челленджа. Без лимита. Пожизненное отслеживание.",
    stat1: "15%", label1: "Комиссия с продажи",
    stat2: "30д", label2: "Срок куки",
    stat3: "24ч", label3: "Выплата",
    stat4: "∞", label4: "Без ограничений",
    point1: "Уникальная ссылка + дашборд",
    point2: "Отслеживание в реальном времени",
    point3: "Ежемесячные выплаты крипто или банк",
    point4: "Персональный менеджер",
    cta: "Стать партнёром →",
    cta2: "Узнать больше",
  },
};

export default function Affiliate() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* BG accent */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at top right, rgba(0,212,170,0.07) 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none"
            style={{ background: "radial-gradient(ellipse at bottom left, rgba(0,212,170,0.04) 0%, transparent 65%)" }} />

          <div className="relative z-10 flex flex-col lg:flex-row gap-14 items-start">
            {/* Left */}
            <div className="flex-1">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-[12px] font-semibold uppercase tracking-widest"
                style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}
              >
                {l.badge}
              </div>
              <h2 className="font-black mb-4" style={{ fontSize: "clamp(30px, 4vw, 48px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                {l.h2_1}<br /><span className="gold-text">{l.h2_2}</span>
              </h2>
              <p className="text-[#8A8FA8] text-[16px] leading-relaxed mb-8 max-w-[460px]">{l.sub}</p>

              <ul className="space-y-3 mb-8">
                {[l.point1, l.point2, l.point3, l.point4].map(p => (
                  <li key={p} className="flex items-center gap-3 text-[15px] text-[#F0F2FF]">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.25)" }}>
                      <span className="text-[#00D4AA] text-[11px] font-bold">✓</span>
                    </div>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
                  className="gold-gradient text-[#0F1117] text-[15px] font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-center"
                  style={{ boxShadow: "0 8px 24px rgba(0,212,170,0.25)" }}>
                  {l.cta}
                </a>
                <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
                  className="text-[#F0F2FF] text-[15px] font-semibold px-7 py-3.5 rounded-xl text-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.3)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  {l.cta2}
                </a>
              </div>
            </div>

            {/* Right — stats grid */}
            <div className="flex-1 grid grid-cols-2 gap-4 w-full">
              {[
                { v: l.stat1, label: l.label1 },
                { v: l.stat2, label: l.label2 },
                { v: l.stat3, label: l.label3 },
                { v: l.stat4, label: l.label4 },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 flex flex-col justify-between min-h-[130px] transition-all duration-200"
                  style={{ background: "#0F1117", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,212,170,0.2)"; el.style.boxShadow = "0 0 20px rgba(0,212,170,0.06)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.06)"; el.style.boxShadow = "none"; }}
                >
                  <div className="font-black gold-text leading-none" style={{ fontSize: "clamp(28px, 4vw, 40px)", letterSpacing: "-0.03em", wordBreak: "break-all" }}>
                    {s.v}
                  </div>
                  <div className="text-[12px] text-[#8A8FA8] uppercase tracking-wider font-medium mt-3">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
