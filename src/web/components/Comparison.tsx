import { useLang } from "../i18n/LangContext";

const labels = {
  en: {
    badge: "Why Probcapital",
    h2_1: "How We Compare to",
    h2_2: "Other Firms",
    sub: "Not all prop firms are created equal. See exactly what sets Probcapital apart.",
    us: "Probcapital",
    them: "Other Firms",
    rows: [
      { feature: "Instant funding after passing", us: true, them: false },
      { feature: "Fee refunded on first payout", us: true, them: false },
      { feature: "90% profit split", us: true, them: false },
      { feature: "No minimum trading days (Aggressive)", us: true, them: false },
      { feature: "MT4 & MT5 supported", us: true, them: true },
      { feature: "News trading allowed", us: true, them: false },
      { feature: "EA / algorithmic trading", us: true, them: false },
      { feature: "24/7 live support", us: true, them: false },
      { feature: "Scaling up to $2,000,000", us: true, them: false },
      { feature: "Crypto payouts", us: true, them: false },
      { feature: "1 free re-take on fail", us: true, them: false },
      { feature: "Hidden rules or traps", us: false, them: true },
      { feature: "Scaling restrictions", us: false, them: true },
    ],
    note: "Based on publicly available information from major prop trading firms as of 2024.",
    cta: "Start Challenge →",
  },
  ru: {
    badge: "Почему Probcapital",
    h2_1: "Как мы сравниваемся с",
    h2_2: "другими фирмами",
    sub: "Не все проп-фирмы одинаковы. Посмотрите, чем Probcapital выделяется на фоне остальных.",
    us: "Probcapital",
    them: "Другие фирмы",
    rows: [
      { feature: "Мгновенное финансирование после прохождения", us: true, them: false },
      { feature: "Возврат оплаты при первой выплате", us: true, them: false },
      { feature: "90% сплит прибыли", us: true, them: false },
      { feature: "Без минимума дней (Агрессивный)", us: true, them: false },
      { feature: "MT4 и MT5", us: true, them: true },
      { feature: "Торговля на новостях", us: true, them: false },
      { feature: "EA / алгоритмическая торговля", us: true, them: false },
      { feature: "Поддержка 24/7", us: true, them: false },
      { feature: "Масштабирование до $2 000 000", us: true, them: false },
      { feature: "Выплаты в крипто", us: true, them: false },
      { feature: "1 бесплатный рестарт при провале", us: true, them: false },
      { feature: "Скрытые правила", us: false, them: true },
      { feature: "Ограничения масштабирования", us: false, them: true },
    ],
    note: "На основе публично доступной информации от крупных проп-трейдинговых фирм, 2024 год.",
    cta: "Начать челлендж →",
  },
};

export default function Comparison() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section className="py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}
          >
            {l.badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {l.h2_1} <span className="gold-text">{l.h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[480px] mx-auto text-[16px] leading-relaxed">{l.sub}</p>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Header row */}
          <div className="grid grid-cols-[1fr_120px_120px] bg-[#1A1D27]"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="px-6 py-4 text-[12px] text-[#555A72] uppercase tracking-widest font-semibold" />
            <div className="px-4 py-4 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-bold text-[#0F1117] gold-gradient">
                {l.us}
              </div>
            </div>
            <div className="px-4 py-4 text-center">
              <div className="text-[13px] font-semibold text-[#555A72]">{l.them}</div>
            </div>
          </div>

          {/* Data rows */}
          {l.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_120px_120px] transition-colors duration-150"
              style={{
                borderBottom: i < l.rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                background: i % 2 === 0 ? "#0F1117" : "#111520",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,212,170,0.03)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = i % 2 === 0 ? "#0F1117" : "#111520"; }}
            >
              <div className="px-6 py-3.5 text-[14px] text-[#8A8FA8] flex items-center gap-2">
                {row.feature}
              </div>
              <div className="px-4 py-3.5 flex items-center justify-center">
                {row.us ? (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.25)" }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 6.5L5.5 10L11 3" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,68,68,0.08)", border: "1px solid rgba(255,68,68,0.2)" }}>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 2L9 9M9 2L2 9" stroke="#FF4444" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </div>
              <div className="px-4 py-3.5 flex items-center justify-center">
                {row.them ? (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.15)" }}>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 6.5L5.5 10L11 3" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
                    </svg>
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,68,68,0.08)", border: "1px solid rgba(255,68,68,0.2)" }}>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 2L9 9M9 2L2 9" stroke="#FF4444" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-[12px] text-[#555A72] max-w-[400px]">{l.note}</p>
          <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
            className="gold-gradient text-[#0F1117] text-[14px] font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ boxShadow: "0 4px 20px rgba(0,212,170,0.25)" }}>
            {l.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
