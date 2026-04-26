import type { ReactNode, CSSProperties } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

/* ── Reusable primitives ── */
const Glass = ({ children, style = {} }: { children: ReactNode; style?: CSSProperties }) => (
  <div style={{
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    padding: "36px",
    ...style,
  }}>{children}</div>
);

const Badge = ({ text }: { text: string }) => (
  <span style={{
    display: "inline-block", padding: "5px 16px", borderRadius: "100px",
    background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.22)",
    color: "#00D4AA", fontSize: "11px", fontWeight: 700,
    textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "22px",
  }}>{text}</span>
);

const Dot = () => (
  <span style={{
    display: "inline-block", width: "6px", height: "6px", borderRadius: "50%",
    background: "#00D4AA", marginRight: "12px", flexShrink: 0,
    boxShadow: "0 0 8px rgba(0,212,170,0.8)",
  }} />
);

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 style={{
    fontSize: "clamp(28px,4vw,46px)", fontWeight: 900,
    letterSpacing: "-0.025em", lineHeight: 1.1,
    marginBottom: "20px", color: "#F0F2FF",
  }}>{children}</h2>
);

const Sub = ({ children }: { children: ReactNode }) => (
  <p style={{ color: "#7A7F99", fontSize: "clamp(15px,1.2vw,17px)", lineHeight: 1.8, maxWidth: "620px" }}>{children}</p>
);

/* ── Grid lines decoration ── */
const GridLines = () => (
  <div style={{
    position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
    backgroundImage: "linear-gradient(rgba(0,212,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.03) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  }} />
);

export default function AboutPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const techStack = [
    {
      icon: "⚡",
      title: ru ? "Низкая задержка исполнения" : "Low-Latency Execution",
      desc: ru ? "Выделенные VPS-серверы в ключевых финансовых центрах обеспечивают исполнение ордеров с задержкой менее 1 мс." : "Dedicated VPS infrastructure across major financial hubs ensures sub-millisecond order execution and feed processing.",
      tag: "< 1ms",
    },
    {
      icon: "🗄️",
      title: ru ? "Целостность данных" : "Data Integrity Layer",
      desc: ru ? "Платформа Supabase с шифрованием AES-256 и репликацией в реальном времени гарантирует целостность всех торговых данных." : "Supabase-powered backend with AES-256 encryption and real-time replication guarantees full auditability of all evaluation data.",
      tag: "AES-256",
    },
    {
      icon: "🤖",
      title: ru ? "ИИ-анализ рисков" : "AI Risk Analytics",
      desc: ru ? "Проприетарные модели машинного обучения в реальном времени анализируют паттерны торговли, выявляя аномалии и нарушения правил." : "Proprietary ML models analyze trading patterns in real time, flagging rule violations and behavioral anomalies instantly.",
      tag: "ML-Powered",
    },
    {
      icon: "📊",
      title: ru ? "Панель аналитики" : "Performance Dashboard",
      desc: ru ? "Интерактивная панель отображает кривую эквити, просадку, целевые показатели и историю оценок в реальном времени." : "Interactive analytics dashboard delivers real-time equity curves, drawdown tracking, target progress, and full evaluation history.",
      tag: "Real-Time",
    },
    {
      icon: "🔐",
      title: ru ? "Безопасность" : "Enterprise Security",
      desc: ru ? "SOC2-совместимая инфраструктура с двухфакторной аутентификацией, мониторингом угроз и полным журналом аудита." : "SOC2-aligned infrastructure with 2FA enforcement, intrusion monitoring, and complete audit trails for every session.",
      tag: "SOC2",
    },
    {
      icon: "🌐",
      title: ru ? "Глобальная доступность" : "Global Accessibility",
      desc: ru ? "Платформа обслуживает трейдеров из 140+ стран с поддержкой MT4/MT5 и доступом через веб-интерфейс." : "Platform serves traders across 140+ countries with MT4/MT5 bridge support and a responsive web interface.",
      tag: "140+ Countries",
    },
  ];

  const philosophy = ru ? [
    { n: "01", title: "Дисциплина прежде всего", desc: "Мы убеждены: стабильная торговля определяется не интуицией, а строгой дисциплиной. Наша программа оценки выявляет трейдеров, которые последовательно соблюдают правила управления рисками." },
    { n: "02", title: "Данные, а не мнения", desc: "Каждое решение о прохождении оценки основано исключительно на объективных метриках — коэффициент прибыли, максимальная просадка, последовательность результатов. Никакой субъективности." },
    { n: "03", title: "Масштабируемый доступ", desc: "Талант не должен ограничиваться размером капитала. Наша инфраструктура позволяет масштабировать доступ к торговым возможностям для любого дисциплинированного трейдера в мире." },
  ] : [
    { n: "01", title: "Discipline Over Intuition", desc: "We believe consistent trading performance is defined by systematic discipline, not instinct. Our evaluation framework identifies traders who reliably apply risk management principles under pressure." },
    { n: "02", title: "Data Over Opinion", desc: "Every evaluation outcome is driven by objective performance metrics — profit factor, maximum drawdown, consistency ratio. No subjective judgment, no bias." },
    { n: "03", title: "Scalable Access", desc: "Talent should not be gated by capital size. Our infrastructure enables scalable access to trading opportunities for any disciplined trader, anywhere in the world." },
  ];

  const compliance = ru ? [
    "ProbCapital — это компания-разработчик программного обеспечения, зарегистрированная в штате Вайоминг, США.",
    "Мы предоставляем платформу для оценки торговых навыков и анализа результатов — не брокерские или инвестиционные услуги.",
    "Мы не принимаем клиентские депозиты и не управляем активами пользователей.",
    "Все торговые операции в рамках программы оценки выполняются в симулированной среде.",
    "Мы не являемся финансовым посредником и не подпадаем под регулирование ценных бумаг.",
    "Компенсация за прохождение оценки выплачивается ProbCapital из собственных средств на основе показателей производительности.",
    "Использование платформы не гарантирует какого-либо финансового результата.",
  ] : [
    "ProbCapital is a software technology company incorporated in Wyoming, USA.",
    "We provide a performance analysis and trader evaluation platform — not brokerage, investment, or financial advisory services.",
    "We do not accept client deposits or manage user assets of any kind.",
    "All trading activity within the evaluation program takes place in a simulated software environment.",
    "We are not a financial intermediary and are not subject to securities regulation.",
    "Performance-based compensation is paid by ProbCapital from its own operating funds based solely on evaluation metrics.",
    "Use of the platform does not guarantee any financial outcome.",
  ];

  const stats = [
    { v: "Wyoming, USA", l: ru ? "Юрисдикция" : "Jurisdiction" },
    { v: "140+", l: ru ? "Стран" : "Countries" },
    { v: "< 1ms", l: ru ? "Задержка" : "Latency" },
    { v: "99.9%", l: ru ? "Аптайм" : "Uptime SLA" },
  ];

  return (
    <div style={{ background: "#050914", minHeight: "100vh", color: "#F0F2FF", overflowX: "hidden" }}>
      <Navbar />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <GridLines />

        {/* Radial glow */}
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,212,170,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto", padding: "140px 32px 100px" }}>
          <Badge text={ru ? "О компании" : "About ProbCapital"} />

          <h1 style={{
            fontSize: "clamp(40px, 7vw, 82px)", fontWeight: 900,
            lineHeight: 1.03, letterSpacing: "-0.03em",
            marginBottom: "28px", maxWidth: "820px",
          }}>
            {ru ? (
              <>Демократизация<br /><span style={{ color: "#00D4AA" }}>институционального</span><br />доступа к рынкам.</>
            ) : (
              <>Democratizing<br /><span style={{ color: "#00D4AA" }}>Institutional-Grade</span><br />Market Access.</>
            )}
          </h1>

          <p style={{ fontSize: "clamp(16px,1.4vw,19px)", color: "#7A7F99", lineHeight: 1.8, maxWidth: "580px", marginBottom: "48px" }}>
            {ru
              ? "ProbCapital — технологическая платформа оценки торговых навыков, созданная для выявления исключительно дисциплинированных трейдеров по всему миру."
              : "ProbCapital is a technology infrastructure and skill evaluation platform engineered to identify and verify elite trading discipline at global scale."}
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
            {stats.map(s => (
              <div key={s.l} style={{
                display: "flex", alignItems: "center", gap: "10px",
                padding: "10px 20px", borderRadius: "100px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}>
                <span style={{ color: "#00D4AA", fontWeight: 800, fontSize: "15px" }}>{s.v}</span>
                <span style={{ color: "#555A72", fontSize: "13px" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PHILOSOPHY
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "80px 32px", background: "rgba(0,0,0,0.3)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <Badge text={ru ? "Философия" : "Our Philosophy"} />
            <SectionTitle>
              {ru ? <>Мы верим в<br /><span style={{ color: "#00D4AA" }}>измеримую дисциплину.</span></> : <>We believe in<br /><span style={{ color: "#00D4AA" }}>measurable discipline.</span></>}
            </SectionTitle>
            <Sub>
              {ru
                ? "Наш подход строится на убеждении, что настоящий торговый талант поддаётся количественной оценке. Мы создали инфраструктуру, которая это доказывает."
                : "Our approach is built on the conviction that genuine trading talent is quantifiable. We built the infrastructure to prove it."}
            </Sub>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {philosophy.map(p => (
              <Glass key={p.n} style={{ position: "relative", overflow: "hidden" }}>
                <div style={{
                  fontSize: "72px", fontWeight: 900, lineHeight: 1,
                  color: "rgba(0,212,170,0.06)", marginBottom: "20px",
                  letterSpacing: "-0.04em",
                }}>{p.n}</div>
                <div style={{ fontWeight: 700, fontSize: "18px", marginBottom: "12px", color: "#F0F2FF" }}>{p.title}</div>
                <div style={{ color: "#7A7F99", fontSize: "14px", lineHeight: 1.8 }}>{p.desc}</div>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TECH STACK
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "80px 32px", overflow: "hidden" }}>
        <GridLines />
        {/* Glow */}
        <div style={{
          position: "absolute", bottom: 0, right: "10%",
          width: "500px", height: "400px",
          background: "radial-gradient(ellipse, rgba(0,212,170,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <Badge text={ru ? "Технологии" : "Infrastructure & Tech Stack"} />
            <SectionTitle>
              {ru ? <>Инфраструктура<br /><span style={{ color: "#00D4AA" }}>корпоративного уровня.</span></> : <>Enterprise-grade<br /><span style={{ color: "#00D4AA" }}>infrastructure.</span></>}
            </SectionTitle>
            <Sub>
              {ru
                ? "Каждый компонент нашего стека спроектирован для надёжности, скорости и точности — стандарты институциональных торговых систем."
                : "Every layer of our stack is engineered for reliability, speed, and precision — the same standards applied in institutional trading systems."}
            </Sub>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
            {techStack.map(t => (
              <Glass key={t.title} style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "28px" }}>{t.icon}</span>
                  <span style={{
                    fontSize: "11px", fontWeight: 700, padding: "4px 10px", borderRadius: "100px",
                    background: "rgba(0,212,170,0.1)", color: "#00D4AA",
                    border: "1px solid rgba(0,212,170,0.2)", letterSpacing: "0.05em",
                  }}>{t.tag}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: "16px", color: "#F0F2FF" }}>{t.title}</div>
                <div style={{ color: "#7A7F99", fontSize: "13px", lineHeight: 1.75 }}>{t.desc}</div>
              </Glass>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPLIANCE
      ══════════════════════════════════════ */}
      <section style={{ padding: "80px 32px", background: "rgba(0,0,0,0.4)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <Badge text={ru ? "Правовой статус" : "Compliance & Legal"} />
            <SectionTitle>
              {ru ? <>Программное обеспечение.<br /><span style={{ color: "#00D4AA" }}>Не финансовый посредник.</span></> : <>Software platform.<br /><span style={{ color: "#00D4AA" }}>Not a financial intermediary.</span></>}
            </SectionTitle>
            <Sub style={{ margin: "0 auto" }}>
              {ru
                ? "Полная прозрачность в отношении нашей правовой модели — фундамент доверия к нашей платформе."
                : "Full transparency around our legal model is the foundation of platform trust. Here is exactly what we are — and what we are not."}
            </Sub>
          </div>

          <Glass style={{ borderColor: "rgba(0,212,170,0.15)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {compliance.map((pt, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: "0",
                  padding: "18px 0",
                  borderBottom: i < compliance.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}>
                  <Dot />
                  <span style={{ color: "#C0C4D8", fontSize: "15px", lineHeight: 1.7 }}>{pt}</span>
                </div>
              ))}
            </div>
          </Glass>

          <p style={{ marginTop: "20px", color: "#3A3F55", fontSize: "13px", textAlign: "center", lineHeight: 1.7 }}>
            {ru ? "Подробнее:" : "Full details:"}{" "}
            <a href="/terms" style={{ color: "#00D4AA", textDecoration: "none" }}>{ru ? "Условия" : "Terms of Service"}</a>
            {" · "}
            <a href="/risk" style={{ color: "#00D4AA", textDecoration: "none" }}>{ru ? "Раскрытие рисков" : "Risk Disclosure"}</a>
            {" · "}
            <a href="/refund" style={{ color: "#00D4AA", textDecoration: "none" }}>{ru ? "Политика возврата" : "Refund Policy"}</a>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section style={{ position: "relative", padding: "80px 32px", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: "600px", height: "300px",
          background: "radial-gradient(ellipse, rgba(0,212,170,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(30px,5vw,54px)", fontWeight: 900, letterSpacing: "-0.025em", marginBottom: "20px" }}>
            {ru ? <>Готовы пройти<br /><span style={{ color: "#00D4AA" }}>оценку?</span></> : <>Ready to begin<br /><span style={{ color: "#00D4AA" }}>your evaluation?</span></>}
          </h2>
          <p style={{ color: "#7A7F99", fontSize: "17px", marginBottom: "40px", lineHeight: 1.7 }}>
            {ru
              ? "Присоединяйтесь к тысячам трейдеров которые прошли нашу программу оценки и получили доступ к финансируемым аккаунтам."
              : "Join thousands of traders who have completed our evaluation program and gained access to performance-based funding opportunities."}
          </p>
          <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "17px 48px", borderRadius: "10px",
            background: "#00D4AA", color: "#050914",
            fontWeight: 800, fontSize: "16px", textDecoration: "none",
            boxShadow: "0 0 40px rgba(0,212,170,0.35), 0 4px 20px rgba(0,212,170,0.2)",
            letterSpacing: "0.01em",
          }}>
            {ru ? "Начать программу оценки →" : "Start Evaluation Program →"}
          </a>
          <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "24px", flexWrap: "wrap" }}>
            {(ru
              ? ["Симулированная среда", "Прозрачные правила", "Без скрытых комиссий"]
              : ["Simulated Environment", "Transparent Rules", "No Hidden Fees"]
            ).map(t => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "7px", color: "#3A3F55", fontSize: "13px" }}>
                <span style={{ color: "#00D4AA" }}>✓</span>{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
