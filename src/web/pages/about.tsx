import type { ReactNode, CSSProperties } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

/* ─────────────────────────────────────────
   PRIMITIVES
───────────────────────────────────────── */
const Glass = ({ children, style = {} }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.09)",
    borderRadius: "20px",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    padding: "36px",
    ...style,
  }}>{children}</div>
);

const GlassAccent = ({ children, style = {} }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{
    background: "linear-gradient(135deg, rgba(0,212,170,0.06) 0%, rgba(0,150,255,0.04) 100%)",
    border: "1px solid rgba(0,212,170,0.18)",
    borderRadius: "20px",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    padding: "36px",
    ...style,
  }}>{children}</div>
);

const Badge = ({ text }: { text: string }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: "7px",
    padding: "6px 18px", borderRadius: "100px",
    background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.2)",
    color: "#00D4AA", fontSize: "11px", fontWeight: 700,
    textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: "24px",
  }}>
    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#00D4AA", boxShadow: "0 0 6px #00D4AA", flexShrink: 0 }} />
    {text}
  </span>
);

const Tag = ({ text }: { text: string }) => (
  <span style={{
    fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "100px",
    background: "rgba(0,212,170,0.08)", color: "#00D4AA",
    border: "1px solid rgba(0,212,170,0.18)", letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
  }}>{text}</span>
);

const SectionTitle = ({ children, center }: { children: ReactNode; center?: boolean }) => (
  <h2 style={{
    fontSize: "clamp(26px,3.8vw,46px)", fontWeight: 900,
    letterSpacing: "-0.025em", lineHeight: 1.1,
    marginBottom: "18px", color: "#F0F4FF",
    textAlign: center ? "center" : "left",
    overflowWrap: "break-word",
  }}>{children}</h2>
);

const Sub = ({ children, center, style = {} }: { children: ReactNode; center?: boolean; style?: CSSProperties }) => (
  <p style={{
    color: "#B2B8D0", fontSize: "clamp(14px,1.15vw,17px)", lineHeight: 1.85,
    maxWidth: "620px", textAlign: center ? "center" : "left",
    margin: center ? "0 auto" : undefined,
    ...style,
  }}>{children}</p>
);

const Divider = () => (
  <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,212,170,0.2), transparent)", margin: "0" }} />
);

const GridLines = () => (
  <div style={{
    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
    backgroundImage: "linear-gradient(rgba(0,212,170,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.025) 1px, transparent 1px)",
    backgroundSize: "64px 64px",
  }} />
);

const Glow = ({ top, left, right, bottom, size = 500, opacity = 0.07 }: {
  top?: string; left?: string; right?: string; bottom?: string; size?: number; opacity?: number;
}) => (
  <div style={{
    position: "absolute", top, left, right, bottom,
    width: `${size}px`, height: `${size * 0.65}px`,
    background: `radial-gradient(ellipse, rgba(0,212,170,${opacity}) 0%, transparent 70%)`,
    pointerEvents: "none", transform: left === "50%" ? "translateX(-50%)" : undefined,
  }} />
);

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function AboutPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  /* ── DATA ── */
  const stats = [
    { v: "Delaware, USA", l: ru ? "Юрисдикция" : "Jurisdiction" },
    { v: "#10541343", l: ru ? "Номер регистрации" : "File Number" },
    { v: "140+", l: ru ? "Стран" : "Countries Served" },
    { v: "99.9%", l: ru ? "Аптайм" : "Uptime SLA" },
  ];

  const philosophy = [
    {
      n: "01",
      title: ru ? "Дисциплина прежде всего" : "Discipline Over Intuition",
      desc: ru
        ? "Стабильная торговля определяется не интуицией, а строгой дисциплиной. Наша система оценки навыков выявляет специалистов, которые последовательно применяют принципы управления рисками."
        : "Consistent performance is defined by systematic discipline, not instinct. Our Skill Assessment Software identifies professionals who reliably apply risk management principles under real market conditions.",
    },
    {
      n: "02",
      title: ru ? "Данные, а не мнения" : "Data Over Opinion",
      desc: ru
        ? "Каждое решение в рамках процесса оценки основано на объективных метриках производительности: коэффициент прибыли, максимальная просадка, последовательность результатов. Никакой субъективности."
        : "Every outcome of the Evaluation Process is driven by objective performance metrics — profit factor, maximum drawdown, consistency ratio. No subjective judgment. No human bias.",
    },
    {
      n: "03",
      title: ru ? "Технологии открывают доступ" : "Technology Democratizes Access",
      desc: ru
        ? "Исключительный торговый талант не должен ограничиваться размером капитала. Наша инфраструктура анализа производительности делает возможности доступными для любого дисциплинированного специалиста в мире."
        : "Elite trading talent should not be gated by capital size. Our Performance Analysis infrastructure scales access to opportunities for any disciplined professional, anywhere in the world.",
    },
  ];

  const techStack = [
    {
      icon: "⚡",
      title: ru ? "Исполнение с низкой задержкой" : "Low-Latency Execution Engine",
      desc: ru
        ? "Выделенные VPS-серверы в ключевых финансовых центрах обеспечивают обработку рыночных данных и исполнение с задержкой менее 1 мс."
        : "Dedicated VPS infrastructure co-located in Tier-1 financial data centers delivers sub-millisecond market data processing and order routing for evaluation environments.",
      tag: "< 1ms",
    },
    {
      icon: "🗄️",
      title: ru ? "Уровень целостности данных" : "Data Integrity Layer",
      desc: ru
        ? "Серверная часть на базе Supabase с шифрованием AES-256 и репликацией в реальном времени гарантирует полную проверяемость всех данных процесса оценки."
        : "Supabase-powered backend with AES-256 encryption at rest and real-time replication guarantees full auditability and tamper-proof records of all Evaluation Process data.",
      tag: "AES-256",
    },
    {
      icon: "🤖",
      title: ru ? "Проприетарная аналитика рисков" : "Proprietary Risk Analytics",
      desc: ru
        ? "Наши собственные инструменты управления рисками в реальном времени анализируют торговые паттерны, мгновенно выявляя нарушения правил и поведенческие аномалии."
        : "Our proprietary risk-management tools analyze behavioral patterns in real time, flagging rule violations and anomalies instantly — powering the core of our Performance Analysis engine.",
      tag: "Proprietary",
    },
    {
      icon: "📊",
      title: ru ? "Панель анализа производительности" : "Performance Analysis Dashboard",
      desc: ru
        ? "Интерактивная аналитическая панель отображает кривую эквити, отслеживание просадки, целевые показатели и полную историю оценок в реальном времени."
        : "Interactive dashboard delivers real-time equity curves, drawdown tracking, target progress indicators, and complete Evaluation Process history — all in a single institutional-grade interface.",
      tag: "Real-Time",
    },
    {
      icon: "🔐",
      title: ru ? "Безопасность корпоративного уровня" : "Enterprise-Grade Security",
      desc: ru
        ? "Инфраструктура, соответствующая SOC 2, с принудительной двухфакторной аутентификацией, мониторингом вторжений и полными журналами аудита для каждой сессии."
        : "SOC 2-aligned infrastructure with mandatory 2FA enforcement, continuous intrusion monitoring, and immutable audit trails for every user session and evaluation event.",
      tag: "SOC 2",
    },
    {
      icon: "🌐",
      title: ru ? "Глобальная платформа SaaS" : "Global SaaS Platform",
      desc: ru
        ? "Платформа обслуживает специалистов из 140+ стран с поддержкой MT4/MT5 и полнофункциональным веб-интерфейсом, оптимизированным для любых устройств."
        : "Platform serves professionals across 140+ countries with MT4/MT5 bridge support and a fully responsive web interface — enterprise SaaS architecture built for global scale.",
      tag: "140+ Countries",
    },
  ];

  const compliancePoints = ru ? [
    { strong: "Юридическая форма:", text: "ProbCapital LLC — компания с ограниченной ответственностью, зарегистрированная в штате Делавэр, США. Регистрационный номер: 10541343." },
    { strong: "Юридический адрес:", text: "8 The Green, Suite B, Dover, DE 19901, United States." },
    { strong: "Вид деятельности:", text: "Мы разрабатываем и предоставляем программное обеспечение для оценки навыков и анализа производительности. Мы не являемся брокером, дилером, инвестиционным советником или финансовым посредником." },
    { strong: "Без клиентских депозитов:", text: "Мы не принимаем, не храним и не управляем клиентскими средствами или активами любого рода." },
    { strong: "Симулированная среда:", text: "Все торговые операции в рамках процесса оценки выполняются исключительно в программной среде моделирования. Реальные средства клиентов не задействованы." },
    { strong: "Отсутствие регулирования ценных бумаг:", text: "Наш продукт является технологической SaaS-платформой. Мы не подпадаем под регулирование ценных бумаг, CFTC или аналогичное финансовое регулирование." },
    { strong: "Вознаграждение:", text: "Выплаты за прохождение оценки производятся ProbCapital LLC из собственных операционных средств исключительно на основе показателей производительности в программной среде." },
  ] : [
    { strong: "Legal Entity:", text: "ProbCapital LLC is a Limited Liability Company registered in the State of Delaware, United States. File Number: 10541343." },
    { strong: "Registered Address:", text: "8 The Green, Suite B, Dover, DE 19901, United States." },
    { strong: "Business Activity:", text: "We develop and provide Skill Assessment Software and Performance Analysis tools. We are not a broker, dealer, investment advisor, or financial intermediary of any kind." },
    { strong: "No Client Deposits:", text: "We do not accept, hold, or manage client funds or assets of any kind. Our platform is a SaaS product accessed via subscription." },
    { strong: "Simulated Environment:", text: "All trading activity within the Evaluation Process takes place exclusively within a software simulation environment. No real client capital is deployed." },
    { strong: "No Securities Regulation:", text: "Our product is a technology SaaS platform. We are not subject to SEC, CFTC, FCA, or equivalent securities or financial services regulation." },
    { strong: "Compensation:", text: "Performance-based payouts are made by ProbCapital LLC from its own operating funds, based solely on Evaluation Process metrics within the software environment." },
  ];

  /* ── RENDER ── */
  return (
    <div style={{ background: "#04080F", minHeight: "100vh", color: "#F0F4FF", overflowX: "hidden", fontFamily: "inherit" }}>
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section style={{ position: "relative", minHeight: "95vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <GridLines />
        <Glow top="10%" left="50%" size={900} opacity={0.06} />
        <Glow top="60%" right="-5%" size={400} opacity={0.05} />

        {/* Thin horizontal accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent 0%, rgba(0,212,170,0.3) 50%, transparent 100%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1140px", margin: "0 auto", padding: "160px 28px 110px", width: "100%" }}>

          <Badge text={ru ? "О компании" : "About ProbCapital"} />

          <h1 style={{
            fontSize: "clamp(30px, 6.5vw, 86px)", fontWeight: 900,
            lineHeight: 1.03, letterSpacing: "-0.03em",
            marginBottom: "30px", maxWidth: "860px",
            overflowWrap: "break-word", wordBreak: "break-word",
          }}>
            {ru ? (
              <>Демократизация<br />
                <span style={{
                  background: "linear-gradient(90deg, #00D4AA 0%, #00A8FF 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>институциональной<br />ликвидности.</span>
              </>
            ) : (
              <>Democratizing<br />
                <span style={{
                  background: "linear-gradient(90deg, #00D4AA 0%, #00A8FF 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>Institutional-Grade<br />Liquidity.</span>
              </>
            )}
          </h1>

          <p style={{
            fontSize: "clamp(15px,1.3vw,19px)", color: "#A8B0C8",
            lineHeight: 1.85, maxWidth: "600px", marginBottom: "52px",
          }}>
            {ru
              ? "ProbCapital — это технологическая SaaS-компания, зарегистрированная в штате Делавэр. Мы создали инфраструктуру оценки навыков и анализа производительности, которая выявляет профессиональных трейдеров по всему миру."
              : "ProbCapital is a Delaware-registered technology company. We built the Skill Assessment Software and Performance Analysis infrastructure that identifies and verifies elite trading professionals at global scale."}
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {stats.map(s => (
              <div key={s.l} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "10px 22px", borderRadius: "100px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
                <span style={{ color: "#00D4AA", fontWeight: 800, fontSize: "14px", letterSpacing: "-0.01em" }}>{s.v}</span>
                <span style={{ color: "#6E7590", fontSize: "12px" }}>{s.l}</span>
              </div>
            ))}
          </div>

          {/* Company registration badge */}
          <div style={{
            marginTop: "40px", display: "inline-flex", alignItems: "center", gap: "12px",
            padding: "12px 22px", borderRadius: "14px",
            background: "rgba(0,212,170,0.04)", border: "1px solid rgba(0,212,170,0.12)",
          }}>
            <span style={{ fontSize: "18px" }}>🏛️</span>
            <div>
              <div style={{ fontSize: "11px", color: "#00D4AA", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {ru ? "Зарегистрировано в США" : "Incorporated in the USA"}
              </div>
              <div style={{ fontSize: "13px", color: "#8A92AA", marginTop: "2px" }}>
                ProbCapital LLC · Delaware · {ru ? "Рег. №" : "File #"}10541343
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PHILOSOPHY ══════════ */}
      <section style={{ position: "relative", padding: "96px 28px", background: "rgba(0,0,0,0.25)" }}>
        <Divider />
        <div style={{ maxWidth: "1140px", margin: "0 auto", paddingTop: "96px" }}>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", alignItems: "start" }}>
            {/* Left: heading */}
            <div>
              <Badge text={ru ? "Философия" : "Our Philosophy"} />
              <SectionTitle>
                {ru ? (
                  <>Мы верим в<br /><span style={{ color: "#00D4AA" }}>измеримую дисциплину.</span></>
                ) : (
                  <>We believe in<br /><span style={{ color: "#00D4AA" }}>measurable discipline.</span></>
                )}
              </SectionTitle>
              <Sub>
                {ru
                  ? "Настоящий торговый талант поддаётся количественной оценке. Мы построили инфраструктуру, которая это доказывает — объективно, прозрачно, масштабируемо."
                  : "Genuine trading talent is quantifiable. We built the infrastructure to prove it — objectively, transparently, and at scale."}
              </Sub>

              {/* Accent block */}
              <GlassAccent style={{ marginTop: "32px", padding: "24px 28px" }}>
                <div style={{ fontSize: "13px", color: "#00D4AA", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "8px" }}>
                  {ru ? "Наша миссия" : "Our Mission"}
                </div>
                <p style={{ color: "#C0C8E0", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
                  {ru
                    ? "Создать мировой стандарт объективной оценки торговых навыков с помощью технологий корпоративного уровня."
                    : "To establish the global standard for objective trading skill assessment through enterprise-grade technology and transparent Performance Analysis."}
                </p>
              </GlassAccent>
            </div>

            {/* Right: philosophy cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {philosophy.map(p => (
                <Glass key={p.n} style={{ padding: "28px 32px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  <div style={{
                    fontSize: "11px", fontWeight: 800, color: "#00D4AA",
                    letterSpacing: "0.06em", minWidth: "24px", paddingTop: "3px",
                  }}>{p.n}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px", color: "#F0F4FF" }}>{p.title}</div>
                    <div style={{ color: "#A8B0C8", fontSize: "13px", lineHeight: 1.8 }}>{p.desc}</div>
                  </div>
                </Glass>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TECH STACK ══════════ */}
      <section style={{ position: "relative", padding: "96px 28px", overflow: "hidden" }}>
        <GridLines />
        <Glow bottom="0" right="5%" size={600} opacity={0.055} />
        <Glow top="20%" left="-5%" size={400} opacity={0.04} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1140px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Badge text={ru ? "Технологии" : "Infrastructure & Tech Stack"} />
            <SectionTitle center>
              {ru ? (
                <>Инфраструктура<br /><span style={{ color: "#00D4AA" }}>корпоративного уровня.</span></>
              ) : (
                <>Enterprise-grade<br /><span style={{ color: "#00D4AA" }}>infrastructure.</span></>
              )}
            </SectionTitle>
            <Sub center>
              {ru
                ? "Каждый уровень нашего стека спроектирован для надёжности, скорости и точности — стандарты институциональных систем обработки данных."
                : "Every layer of our stack is engineered for reliability, speed, and precision — the same standards applied in institutional-grade data processing systems."}
            </Sub>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "16px" }}>
            {techStack.map((t, i) => (
              <Glass key={t.title} style={{
                display: "flex", flexDirection: "column", gap: "16px", padding: "28px 30px",
                background: i === 0 || i === 2
                  ? "linear-gradient(135deg, rgba(0,212,170,0.05) 0%, rgba(255,255,255,0.02) 100%)"
                  : undefined,
                borderColor: i === 0 || i === 2 ? "rgba(0,212,170,0.15)" : undefined,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "26px", filter: "saturate(0.8)" }}>{t.icon}</span>
                  <Tag text={t.tag} />
                </div>
                <div style={{ fontWeight: 700, fontSize: "15px", color: "#F0F4FF", lineHeight: 1.3 }}>{t.title}</div>
                <div style={{ color: "#9AA2BC", fontSize: "13px", lineHeight: 1.8, flex: 1 }}>{t.desc}</div>
              </Glass>
            ))}
          </div>

          {/* Tech bar */}
          <div style={{
            marginTop: "40px", padding: "24px 32px", borderRadius: "16px",
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
            display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px",
          }}>
            <span style={{ fontSize: "11px", color: "#5A6070", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {ru ? "Стек технологий" : "Tech Stack"}
            </span>
            {["React", "TypeScript", "Supabase", "PostgreSQL", "VPS / Bare Metal", "AES-256", "MT4 / MT5 Bridge", "WebSockets"].map(tech => (
              <span key={tech} style={{
                fontSize: "12px", color: "#8090A8", fontWeight: 600, padding: "4px 12px",
                borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
              }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COMPLIANCE ══════════ */}
      <section style={{ position: "relative", padding: "96px 28px", background: "rgba(0,0,0,0.35)", overflow: "hidden" }}>
        <Divider />
        <div style={{ maxWidth: "960px", margin: "0 auto", paddingTop: "96px" }}>

          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "56px" }}>
            <Badge text={ru ? "Правовой статус и соответствие" : "Compliance & Legal Status"} />
            <SectionTitle center>
              {ru ? (
                <>Технологическая платформа.<br /><span style={{ color: "#00D4AA" }}>Не финансовый посредник.</span></>
              ) : (
                <>Software platform.<br /><span style={{ color: "#00D4AA" }}>Not a financial intermediary.</span></>
              )}
            </SectionTitle>
            <Sub center>
              {ru
                ? "Полная прозрачность правовой модели — основа доверия к нашей платформе. Вот именно то, чем мы являемся — и чем не являемся."
                : "Full transparency around our legal model is the foundation of platform trust. Here is precisely what we are — and what we are not."}
            </Sub>
          </div>

          {/* Entity card */}
          <GlassAccent style={{ marginBottom: "20px", padding: "28px 36px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "20px" }}>
              {[
                { l: ru ? "Юридическое лицо" : "Legal Entity", v: "ProbCapital LLC" },
                { l: ru ? "Штат" : "State", v: "Delaware, USA" },
                { l: ru ? "Регистрационный номер" : "File Number", v: "#10541343" },
                { l: ru ? "Юридический адрес" : "Registered Address", v: "8 The Green, Suite B, Dover, DE 19901" },
              ].map(item => (
                <div key={item.l}>
                  <div style={{ fontSize: "10px", color: "#00D4AA", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "5px" }}>{item.l}</div>
                  <div style={{ fontSize: "14px", color: "#D0D8F0", fontWeight: 600 }}>{item.v}</div>
                </div>
              ))}
            </div>
          </GlassAccent>

          {/* Compliance list */}
          <Glass style={{ borderColor: "rgba(0,212,170,0.1)", padding: "0" }}>
            {compliancePoints.map((pt, i) => (
              <div key={i}>
                <div style={{
                  display: "flex", alignItems: "flex-start", gap: "16px",
                  padding: "22px 32px",
                }}>
                  <span style={{
                    width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                    background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginTop: "1px",
                  }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#00D4AA" }} />
                  </span>
                  <span style={{ color: "#C0C8E0", fontSize: "14px", lineHeight: 1.8 }}>
                    <strong style={{ color: "#E0E6F8", fontWeight: 700 }}>{pt.strong}</strong>{" "}{pt.text}
                  </span>
                </div>
                {i < compliancePoints.length - 1 && (
                  <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", margin: "0 32px" }} />
                )}
              </div>
            ))}
          </Glass>

          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "6px", flexWrap: "wrap", fontSize: "13px", color: "#5A6278" }}>
            <span>{ru ? "Подробнее:" : "Full legal details:"}</span>
            {[
              { href: "/terms", label: ru ? "Условия использования" : "Terms of Service" },
              { href: "/privacy", label: ru ? "Конфиденциальность" : "Privacy Policy" },
              { href: "/risk", label: ru ? "Раскрытие рисков" : "Risk Disclosure" },
              { href: "/refund", label: ru ? "Политика возврата" : "Refund Policy" },
            ].map((l, i, arr) => (
              <span key={l.href}>
                <a href={l.href} style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 500 }}>{l.label}</a>
                {i < arr.length - 1 && <span style={{ marginLeft: "6px", color: "#333A50" }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ position: "relative", padding: "96px 28px", overflow: "hidden" }}>
        <Glow top="50%" left="50%" size={700} opacity={0.07} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 0%, rgba(0,212,170,0.02) 100%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <Badge text={ru ? "Начать оценку" : "Get Started"} />
          <h2 style={{
            fontSize: "clamp(28px,5vw,58px)", fontWeight: 900, letterSpacing: "-0.025em",
            lineHeight: 1.05, marginBottom: "22px", overflowWrap: "break-word",
          }}>
            {ru ? (
              <>Готовы пройти<br /><span style={{ color: "#00D4AA" }}>процесс оценки?</span></>
            ) : (
              <>Ready to begin<br /><span style={{ color: "#00D4AA" }}>the Evaluation Process?</span></>
            )}
          </h2>
          <p style={{ color: "#A0A8C0", fontSize: "clamp(14px,1.2vw,17px)", marginBottom: "44px", lineHeight: 1.8, maxWidth: "540px", margin: "0 auto 44px" }}>
            {ru
              ? "Присоединяйтесь к тысячам профессионалов, прошедших нашу программу оценки навыков и получивших доступ к возможностям на основе результатов."
              : "Join thousands of professionals who have completed our Skill Assessment program and gained access to performance-based opportunities."}
          </p>

          <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "18px 52px", borderRadius: "12px",
            background: "linear-gradient(135deg, #00D4AA 0%, #00B894 100%)",
            color: "#03060E", fontWeight: 800, fontSize: "16px", textDecoration: "none",
            boxShadow: "0 0 48px rgba(0,212,170,0.3), 0 8px 32px rgba(0,212,170,0.15)",
            letterSpacing: "0.01em", transition: "transform 0.2s",
          }}>
            {ru ? "Начать программу оценки →" : "Start Evaluation Program →"}
          </a>

          <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "28px", flexWrap: "wrap" }}>
            {(ru
              ? ["Программная среда симуляции", "Прозрачные правила оценки", "Без скрытых комиссий"]
              : ["Software Simulation Environment", "Transparent Evaluation Rules", "No Hidden Fees"]
            ).map(t => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "7px", color: "#606880", fontSize: "13px" }}>
                <span style={{ color: "#00D4AA", fontWeight: 700 }}>✓</span>{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
