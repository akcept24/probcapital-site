import { useLang } from "../i18n/LangContext";

const icons = [
  // Clipboard / Evaluation
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12h6M9 16h4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // Checkmark shield / Verification
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 3l8 3.5v5c0 4.5-3.2 8.7-8 10-4.8-1.3-8-5.5-8-10v-5L12 3z" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Chart / Capital Scaling
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="16 7 22 7 22 13" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  // Crown / Elite
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M2 20h20M4 20l2-8 6 4 6-4 2 8" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="8" r="2" stroke="#00D4AA" strokeWidth="1.5"/>
    <path d="M4 12l3-5M20 12l-3-5" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
];

export default function HowItWorks() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const badge = ru ? "Программа масштабирования" : "Scaling Program";
  const h2_1 = ru ? "Ваш путь к" : "Your Path to";
  const h2_2 = ru ? "управлению капиталом" : "Institutional Capital";
  const sub = ru
    ? "Четыре этапа от первичной оценки до управления капиталом на институциональном уровне."
    : "Four structured stages from initial evaluation to managing institutional-level capital.";

  const steps = ru
    ? [
        {
          num: "01",
          tag: "Этап 1",
          title: "Оценка навыков",
          desc: "Торгуйте в симулированной среде, отражающей реальные рыночные условия. Докажите свою стратегию при соблюдении дисциплины риска: дневной просадка −5%, максимальная −10%, цель прибыли +10%.",
          highlight: "Без ограничений по времени",
        },
        {
          num: "02",
          tag: "Этап 2",
          title: "Верификация результатов",
          desc: "Подтвердите последовательность на второй фазе с целью +5%. Наш аналитический модуль проверяет соответствие риск-параметров перед допуском к финансированию.",
          highlight: "Анализ в реальном времени",
        },
        {
          num: "03",
          tag: "Этап 3",
          title: "Масштабирование капитала",
          desc: "Прошли верификацию — получайте расширенный счёт и автоматическое увеличение капитала на 25% за каждые 10% прибыльного цикла. Рост без лимитов до следующего уровня.",
          highlight: "+25% за каждый 10%-ный цикл",
        },
        {
          num: "04",
          tag: "Элита",
          title: "Элитный уровень",
          desc: "Лучшие трейдеры достигают управления капиталом до $2 000 000. Приоритетная инфраструктура, пониженные спреды и выделенный риск-менеджер для топ-тирных участников.",
          highlight: "До $2 000 000",
        },
      ]
    : [
        {
          num: "01",
          tag: "Phase 1",
          title: "Skill Evaluation",
          desc: "Trade in a simulated environment that mirrors live market conditions. Prove your strategy under real risk discipline: −5% daily drawdown, −10% max drawdown, +10% profit target.",
          highlight: "No time limit",
        },
        {
          num: "02",
          tag: "Phase 2",
          title: "Performance Verification",
          desc: "Confirm consistency in the second phase with a +5% profit target. Our analytics module verifies risk parameter compliance before granting funded access.",
          highlight: "Real-time analytics review",
        },
        {
          num: "03",
          tag: "Phase 3",
          title: "Capital Scaling",
          desc: "Pass verification — receive your funded account and automatic 25% capital increases for every 10% profitable cycle. Compounding growth with no ceiling until the next tier.",
          highlight: "+25% per 10% profit cycle",
        },
        {
          num: "04",
          tag: "Elite",
          title: "Elite Tier",
          desc: "Top performers reach up to $2,000,000 in allocated capital. Priority infrastructure, tightened spreads, and a dedicated risk manager for tier-1 participants.",
          highlight: "Up to $2,000,000",
        },
      ];

  return (
    <section id="how-it-works" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 999, marginBottom: 20,
            background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)",
            color: "#00D4AA", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
          }}>
            {badge}
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 50px)", fontWeight: 900,
            letterSpacing: "-0.025em", marginBottom: 16,
            color: "#F0F4FF", overflowWrap: "break-word",
          }}>
            {h2_1}{" "}
            <span style={{ background: "linear-gradient(135deg, #00D4AA, #00B8E6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {h2_2}
            </span>
          </h2>
          <p style={{ color: "#9098B8", maxWidth: 520, margin: "0 auto", fontSize: 15, lineHeight: 1.7 }}>
            {sub}
          </p>
        </div>

        {/* Steps grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          position: "relative",
        }}>
          {/* Connector line — desktop only, hidden via media query trick using inline hack */}
          <div style={{
            position: "absolute", top: 56, left: "10%", right: "10%", height: 1,
            background: "linear-gradient(to right, transparent, rgba(0,212,170,0.25) 20%, rgba(0,212,170,0.25) 80%, transparent)",
            pointerEvents: "none",
          }} className="hiw-connector" />

          {steps.map((step, i) => (
            <StepCard key={i} step={step} icon={icons[i]} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a
            href="https://app.probcapital.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 32px", borderRadius: 999,
              background: "linear-gradient(135deg, #00D4AA, #00B8E6)",
              color: "#04080F", fontSize: 14, fontWeight: 700,
              textDecoration: "none", boxShadow: "0 4px 24px rgba(0,212,170,0.3)",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
          >
            {ru ? "Начать оценку →" : "Start Evaluation →"}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .hiw-connector { display: none !important; } }
      `}</style>
    </section>
  );
}

function StepCard({ step, icon }: { step: any; icon: React.ReactNode }) {
  return (
    <div
      style={{
        position: "relative", padding: "28px 24px", borderRadius: 20,
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "border-color 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.35)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,212,170,0.07)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Step tag + number */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div style={{
          padding: "3px 10px", borderRadius: 999,
          background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)",
          fontSize: 11, fontWeight: 700, color: "#00D4AA", letterSpacing: "0.06em",
        }}>
          {step.tag}
        </div>
        <span style={{ fontSize: 36, fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1, letterSpacing: "-0.04em" }}>
          {step.num}
        </span>
      </div>

      {/* Icon */}
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.18)",
        marginBottom: 18,
      }}>
        {icon}
      </div>

      {/* Title */}
      <h3 style={{ fontSize: 17, fontWeight: 700, color: "#F0F4FF", marginBottom: 10, lineHeight: 1.3 }}>
        {step.title}
      </h3>

      {/* Description */}
      <p style={{ fontSize: 13.5, color: "#9098B8", lineHeight: 1.7, marginBottom: 18 }}>
        {step.desc}
      </p>

      {/* Highlight pill */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "4px 12px", borderRadius: 999,
        background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.15)",
        fontSize: 12, fontWeight: 600, color: "#00D4AA",
      }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00D4AA", display: "inline-block" }} />
        {step.highlight}
      </div>
    </div>
  );
}
