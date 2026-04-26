import { useLang } from "../i18n/LangContext";

/* SVG icons */
const IconVPS = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="7" rx="2" stroke="#00D4AA" strokeWidth="1.5"/>
    <rect x="2" y="14" width="20" height="7" rx="2" stroke="#00D4AA" strokeWidth="1.5"/>
    <circle cx="6" cy="6.5" r="1" fill="#00D4AA"/><circle cx="9" cy="6.5" r="1" fill="#00D4AA"/>
    <circle cx="6" cy="17.5" r="1" fill="#00D4AA"/><circle cx="9" cy="17.5" r="1" fill="#00D4AA"/>
  </svg>
);
const IconLatency = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconRisk = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l2 2 4-4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconDash = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00D4AA" strokeWidth="1.5"/>
    <path d="M8 21h8M12 17v4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 10l3-3 2 2 3-3 2 1" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconAI = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="#00D4AA" strokeWidth="1.5"/>
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#00D4AA" strokeWidth="1.5"/>
    <path d="M12 3c0 0-4 3.5-4 9s4 9 4 9M12 3c0 0 4 3.5 4 9s-4 9-4 9M3 12h18" stroke="#00D4AA" strokeWidth="1.5"/>
  </svg>
);

const icons = [<IconVPS />, <IconLatency />, <IconRisk />, <IconDash />, <IconAI />, <IconGlobe />];

export default function Features() {
  const { tr, lang } = useLang();
  const ru = lang === "ru";

  const features = ru ? [
    {
      title: "Выделенная VPS-инфраструктура",
      desc: "Серверы в ключевых финансовых центрах обеспечивают работу нашей симулированной среды с минимальной задержкой и максимальной стабильностью для точного анализа производительности.",
      tag: "< 1ms",
    },
    {
      title: "Исполнение с низкой задержкой",
      desc: "Проприетарный движок маршрутизации передаёт рыночные данные в режиме реального времени напрямую в симулированную среду оценки — без задержек и без искажений.",
      tag: "Real-Time Feed",
    },
    {
      title: "Инфраструктура управления рисками",
      desc: "Автоматизированные системы мониторинга в режиме реального времени отслеживают соблюдение параметров просадки и правил оценки с точностью до миллисекунды.",
      tag: "Proprietary",
    },
    {
      title: "Расширенные аналитические дашборды",
      desc: "Интерактивная панель анализа производительности отображает кривую эквити, отслеживание просадки, целевые показатели и историю оценок — в режиме реального времени.",
      tag: "Advanced Analytics",
    },
    {
      title: "ИИ-аналитика производительности",
      desc: "Проприетарные ML-модели анализируют торговые паттерны, обнаруживают аномалии и проверяют соответствие правилам — полностью автоматизированный процесс без субъективности.",
      tag: "ML-Powered",
    },
    {
      title: "Глобальная доступность платформы",
      desc: "Платформа Skill Assessment Software доступна в 140+ странах через MT4, MT5 и адаптивный веб-интерфейс — созданная для профессионалов по всему миру.",
      tag: "140+ Countries",
    },
  ] : [
    {
      title: "Dedicated VPS Infrastructure",
      desc: "Servers co-located in Tier-1 financial data centers power our simulation environment with minimal latency and maximum uptime for precise Performance Analysis.",
      tag: "< 1ms",
    },
    {
      title: "Low-Latency Execution Engine",
      desc: "Our proprietary routing engine pipes real-time market data directly into the evaluation simulation environment — no delays, no distortion, no compromise.",
      tag: "Real-Time Feed",
    },
    {
      title: "Risk Management Infrastructure",
      desc: "Automated real-time monitoring systems track drawdown parameters and evaluation rule compliance with millisecond-level precision across all active sessions.",
      tag: "Proprietary",
    },
    {
      title: "Advanced Performance Dashboards",
      desc: "Interactive Performance Analysis dashboard delivers real-time equity curves, drawdown tracking, target progress, and full evaluation history in a single institutional-grade interface.",
      tag: "Advanced Analytics",
    },
    {
      title: "AI Performance Analytics",
      desc: "Proprietary ML models analyze trading behavior patterns, detect anomalies, and verify rule compliance — fully automated, objective, and bias-free assessment.",
      tag: "ML-Powered",
    },
    {
      title: "Global Platform Accessibility",
      desc: "Our Skill Assessment Software is accessible across 140+ countries via MT4, MT5, and a responsive web interface — engineered for professionals operating at global scale.",
      tag: "140+ Countries",
    },
  ];

  return (
    <section id="features" style={{ padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,212,170,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)",
        width: "700px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,212,170,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            padding: "5px 18px", borderRadius: "100px",
            background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.2)",
            color: "#00D4AA", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px",
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#00D4AA", boxShadow: "0 0 6px #00D4AA" }} />
            {ru ? "Инфраструктура" : "Infrastructure & Opportunities"}
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900,
            letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "16px", color: "#F0F4FF",
          }}>
            {ru ? <>Институциональная инфраструктура.<br /><span style={{ color: "#00D4AA" }}>Ваши навыки.</span></>
              : <>Institutional-Grade Infrastructure.<br /><span style={{ color: "#00D4AA" }}>Your Skill.</span></>}
          </h2>
          <p style={{ color: "#9098B8", maxWidth: "520px", margin: "0 auto", fontSize: "16px", lineHeight: 1.8 }}>
            {ru
              ? "Мы обеспечиваем высокотехнологичную среду оценки. Трейдеры приносят дисциплину. Наше программное обеспечение предоставляет объективный анализ."
              : "We provide the high-technology evaluation environment. Traders bring the discipline. Our software delivers the objective Performance Analysis."}
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
          {features.map((f, i) => (
            <div key={i}
              style={{
                padding: "28px 30px",
                background: i === 0 || i === 2
                  ? "linear-gradient(135deg, rgba(0,212,170,0.05) 0%, rgba(255,255,255,0.02) 100%)"
                  : "rgba(255,255,255,0.025)",
                border: i === 0 || i === 2
                  ? "1px solid rgba(0,212,170,0.18)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(0,212,170,0.3)";
                el.style.boxShadow = "0 0 32px rgba(0,212,170,0.07)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = i === 0 || i === 2 ? "rgba(0,212,170,0.18)" : "rgba(255,255,255,0.07)";
                el.style.boxShadow = "none";
                el.style.transform = "none";
              }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "18px" }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.15)",
                }}>
                  {icons[i]}
                </div>
                <span style={{
                  fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "100px",
                  background: "rgba(0,212,170,0.08)", color: "#00D4AA",
                  border: "1px solid rgba(0,212,170,0.18)", letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}>{f.tag}</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#F0F4FF", marginBottom: "10px" }}>{f.title}</h3>
              <p style={{ fontSize: "13px", color: "#8A92AA", lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div style={{
          marginTop: "40px", padding: "22px 32px", borderRadius: "16px",
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
          display: "flex", flexWrap: "wrap", alignItems: "center", gap: "32px", justifyContent: "center",
        }}>
          {(ru ? [
            { v: "< 1ms", l: "Задержка VPS" },
            { v: "AES-256", l: "Шифрование данных" },
            { v: "99.9%", l: "Аптайм платформы" },
            { v: "140+", l: "Обслуживаемых стран" },
            { v: "SOC 2", l: "Соответствие стандарту" },
          ] : [
            { v: "< 1ms", l: "VPS Latency" },
            { v: "AES-256", l: "Data Encryption" },
            { v: "99.9%", l: "Platform Uptime SLA" },
            { v: "140+", l: "Countries Served" },
            { v: "SOC 2", l: "Aligned Standard" },
          ]).map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "18px", fontWeight: 800, color: "#00D4AA", letterSpacing: "-0.02em" }}>{s.v}</div>
              <div style={{ fontSize: "11px", color: "#5A6278", marginTop: "2px", letterSpacing: "0.04em" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
