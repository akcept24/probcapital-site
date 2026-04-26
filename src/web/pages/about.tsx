import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

const Badge = ({ text }: { text: string }) => (
  <div style={{
    display: "inline-block", padding: "6px 16px", borderRadius: "100px",
    background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.25)",
    color: "#00D4AA", fontSize: "12px", fontWeight: 600,
    textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "20px",
  }}>{text}</div>
);

const Card = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    background: "#111520", border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "16px", padding: "32px", ...style,
  }}>{children}</div>
);

export default function AboutPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const steps = ru ? [
    { n: "01", title: "Выберите программу оценки", desc: "Выберите размер счёта и тип испытания — Standard или Aggressive. Оплатите разовый взнос." },
    { n: "02", title: "Торгуйте по правилам", desc: "Достигайте целей по прибыли в симулированной среде, соблюдая правила управления рисками." },
    { n: "03", title: "Получите финансирование", desc: "После прохождения оценки вы получаете доступ к симулированному финансируемому счёту и компенсацию на основе результатов." },
  ] : [
    { n: "01", title: "Choose Your Evaluation", desc: "Select an account size and challenge type — Standard or Aggressive. Pay a one-time fee." },
    { n: "02", title: "Trade Under Defined Rules", desc: "Hit profit targets in a simulated environment while following our clear risk management rules." },
    { n: "03", title: "Qualify for Funding", desc: "Once you pass, you receive access to a simulated funded account and performance-based compensation." },
  ];

  const pillars = ru ? [
    { icon: "⚖️", title: "Прозрачные правила", desc: "Никаких скрытых условий. Все правила чётко прописаны до начала испытания." },
    { icon: "🛡️", title: "Контролируемые риски", desc: "Чёткие лимиты просадки защищают как трейдера, так и целостность программы." },
    { icon: "📈", title: "Прогрессия по результатам", desc: "Ваши успехи определяют ваш рост. Никаких случайных решений." },
    { icon: "🔁", title: "Масштабируемая модель", desc: "Доказывайте стабильность — и мы увеличиваем размер вашего счёта до $2 000 000." },
  ] : [
    { icon: "⚖️", title: "Transparent Rules", desc: "No hidden conditions. Every rule is clearly defined before you start the challenge." },
    { icon: "🛡️", title: "Risk-Controlled Environment", desc: "Clear drawdown limits protect both the trader and the integrity of the program." },
    { icon: "📈", title: "Performance-Based Progression", desc: "Your results determine your growth. No arbitrary decisions." },
    { icon: "🔁", title: "Scalable Account Model", desc: "Prove consistency and we scale your allocation up to $2,000,000." },
  ];

  const modelPoints = ru ? [
    "ProbCapital — это платформа оценки трейдеров, а не инвестиционная компания.",
    "Мы не принимаем депозиты и не управляем клиентскими средствами.",
    "Всё торговля в рамках оценки и финансируемых счётов проходит в симулированной среде.",
    "Финансирование предоставляется на основе торговых результатов и внутренних критериев.",
    "Выплаты трейдерам — это компенсация от ProbCapital из собственных средств компании.",
    "Мы не предоставляем инвестиционные консультации и брокерские услуги.",
  ] : [
    "ProbCapital is a trader evaluation platform — not an investment company.",
    "We do not accept deposits or manage client funds.",
    "All evaluation and funded account trading occurs in a simulated environment.",
    "Funding is granted based on trading performance and internal criteria.",
    "Trader payouts are performance-based compensation paid by ProbCapital from its own funds.",
    "We do not provide investment advice or brokerage services.",
  ];

  return (
    <div style={{ background: "#070B12", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "120px 24px 64px", textAlign: "center" }}>
        <Badge text={ru ? "О компании" : "About Us"} />
        <h1 style={{
          fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900,
          lineHeight: 1.08, letterSpacing: "-0.025em", marginBottom: "24px",
        }}>
          {ru ? (<>Создано трейдерами.<br /><span style={{ color: "#00D4AA" }}>Для трейдеров.</span></>) : (<>Built by Traders.<br /><span style={{ color: "#00D4AA" }}>Designed for Performance.</span></>)}
        </h1>
        <p style={{ fontSize: "clamp(16px,1.4vw,19px)", color: "#8A8FA8", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto 16px" }}>
          {ru
            ? "ProbCapital — это платформа оценки трейдеров на основе результатов, созданная для выявления и поддержки дисциплинированных трейдеров по всему миру."
            : "ProbCapital is a performance-based trading evaluation platform created to identify and support disciplined traders around the world."}
        </p>
        <p style={{ fontSize: "15px", color: "#555A72", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 40px" }}>
          {ru
            ? "Мы верим, что талантливые трейдеры заслуживают структурированной возможности — прозрачной, справедливой и масштабируемой."
            : "We believe talented traders deserve a structured opportunity — one that is transparent, fair, and scalable."}
        </p>
        <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          padding: "16px 40px", borderRadius: "10px",
          background: "#00D4AA", color: "#070B12",
          fontWeight: 700, fontSize: "16px", textDecoration: "none",
          boxShadow: "0 4px 28px rgba(0,212,170,0.4)",
        }}>
          {ru ? "Начать испытание →" : "Start Challenge →"}
        </a>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", alignItems: "center" }}>
          <div>
            <Badge text={ru ? "История основания" : "Our Background"} />
            <h2 style={{ fontSize: "clamp(28px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "20px", lineHeight: 1.15 }}>
              {ru ? "Откуда мы пришли" : "Where We Come From"}
            </h2>
            <p style={{ color: "#8A8FA8", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              {ru
                ? "ProbCapital основан трейдером с более чем 15-летним опытом работы на глобальных финансовых рынках — от форекса до деривативов и алгоритмических стратегий."
                : "ProbCapital was founded by a U.S.-based trader with over 15 years of experience across global financial markets — from forex to derivatives and algorithmic strategies."}
            </p>
            <p style={{ color: "#8A8FA8", fontSize: "16px", lineHeight: 1.8 }}>
              {ru
                ? "После многолетней торговли мы пришли к одному выводу: индустрия нуждается в прозрачной, честной платформе, которая даёт трейдерам реальный шанс проявить себя."
                : "After years in the industry, we arrived at one conclusion: the market needed a transparent, fair platform that gives traders a real chance to prove themselves."}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { v: "15+", l: ru ? "Лет опыта" : "Years of Experience" },
              { v: "140+", l: ru ? "Стран" : "Countries Served" },
              { v: "$400K", l: ru ? "Макс. финансирование" : "Max Funding" },
              { v: "$2.4M+", l: ru ? "Выплачено трейдерам" : "Paid to Traders" },
            ].map(s => (
              <Card key={s.l} style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px 24px" }}>
                <div style={{ fontSize: "clamp(22px,3vw,32px)", fontWeight: 900, color: "#00D4AA", minWidth: "90px" }}>{s.v}</div>
                <div style={{ fontSize: "14px", color: "#8A8FA8" }}>{s.l}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY WE BUILT IT ── */}
      <section style={{ background: "#0d1220", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
          <Badge text={ru ? "Наша миссия" : "Why We Exist"} />
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            {ru ? "Зачем существует ProbCapital" : "Why PropCapital Exists"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", textAlign: "left", marginTop: "40px" }}>
            {(ru ? [
              { icon: "❌", title: "Проблема", items: ["Талантливые трейдеры лишены структурированных возможностей", "Отсутствие доступа к масштабируемому капиталу", "Непрозрачные правила в индустрии"] },
              { icon: "✅", title: "Наше решение", items: ["Структурированная программа оценки с чёткими правилами", "Масштабируемый симулированный капитал до $400 000", "Полная прозрачность условий до старта"] },
            ] : [
              { icon: "❌", title: "The Problem", items: ["Talented traders lack access to structured opportunities", "No scalable capital pathway exists for retail traders", "Unclear and inconsistent rules across the industry"] },
              { icon: "✅", title: "Our Solution", items: ["Structured evaluation program with clear, defined rules", "Scalable simulated capital access up to $400,000", "Full transparency before you start — no surprises"] },
            ]).map(col => (
              <Card key={col.title}>
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{col.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "17px", marginBottom: "16px" }}>{col.title}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {col.items.map(item => (
                    <li key={item} style={{ display: "flex", gap: "10px", color: "#8A8FA8", fontSize: "14px", lineHeight: 1.6 }}>
                      <span style={{ color: "#00D4AA", flexShrink: 0 }}>—</span>{item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <Badge text={ru ? "Процесс" : "How It Works"} />
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {ru ? "Три шага к финансированию" : "Three Steps to Funding"}
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {steps.map(s => (
            <Card key={s.n} style={{ position: "relative", overflow: "hidden" }}>
              <div style={{ fontSize: "56px", fontWeight: 900, color: "rgba(0,212,170,0.08)", lineHeight: 1, marginBottom: "16px", letterSpacing: "-0.03em" }}>{s.n}</div>
              <div style={{ fontWeight: 700, fontSize: "18px", marginBottom: "10px" }}>{s.title}</div>
              <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.7 }}>{s.desc}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <section style={{ background: "#0d1220", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <Badge text={ru ? "Наш подход" : "Our Approach"} />
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              {ru ? "На чём держится ProbCapital" : "What ProbCapital Stands For"}
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {pillars.map(p => (
              <Card key={p.title}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{p.icon}</div>
                <div style={{ fontWeight: 700, fontSize: "17px", marginBottom: "10px" }}>{p.title}</div>
                <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.7 }}>{p.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE / OUR MODEL ── */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "64px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <Badge text={ru ? "Соответствие требованиям" : "Compliance"} />
          <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {ru ? "Наша модель" : "Our Model"}
          </h2>
          <p style={{ color: "#8A8FA8", fontSize: "16px", maxWidth: "560px", margin: "16px auto 0", lineHeight: 1.7 }}>
            {ru
              ? "Прозрачность — основа доверия. Вот как мы работаем."
              : "Transparency is the foundation of trust. Here is exactly how we operate."}
          </p>
        </div>
        <Card style={{ borderColor: "rgba(0,212,170,0.2)" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
            {modelPoints.map((pt, i) => (
              <li key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", paddingBottom: i < modelPoints.length - 1 ? "16px" : 0, borderBottom: i < modelPoints.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                  <span style={{ color: "#00D4AA", fontSize: "11px", fontWeight: 700 }}>✓</span>
                </span>
                <span style={{ color: "#C0C4D8", fontSize: "15px", lineHeight: 1.65 }}>{pt}</span>
              </li>
            ))}
          </ul>
        </Card>
        <p style={{ marginTop: "20px", color: "#555A72", fontSize: "13px", lineHeight: 1.6, textAlign: "center" }}>
          {ru
            ? "Полная информация — в наших «Условиях использования», «Раскрытии рисков» и «Политике возврата»."
            : "Full details are available in our Terms of Service, Risk Disclosure, and Refund Policy."}
          {" "}
          <a href="/terms" style={{ color: "#00D4AA", textDecoration: "none" }}>{ru ? "Условия" : "Terms"}</a>
          {" · "}
          <a href="/risk" style={{ color: "#00D4AA", textDecoration: "none" }}>{ru ? "Риски" : "Risk"}</a>
          {" · "}
          <a href="/refund" style={{ color: "#00D4AA", textDecoration: "none" }}>{ru ? "Возврат" : "Refund"}</a>
        </p>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: "#0d1220", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "64px 24px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            {ru ? "Готовы начать?" : "Ready to Get Started?"}
          </h2>
          <p style={{ color: "#8A8FA8", fontSize: "17px", marginBottom: "36px", lineHeight: 1.7 }}>
            {ru
              ? "Присоединяйтесь к тысячам трейдеров которые уже прошли оценку и получили финансирование."
              : "Join thousands of traders who have already passed evaluation and qualified for funding."}
          </p>
          <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "16px 44px", borderRadius: "10px",
            background: "#00D4AA", color: "#070B12",
            fontWeight: 700, fontSize: "17px", textDecoration: "none",
            boxShadow: "0 4px 32px rgba(0,212,170,0.4)",
          }}>
            {ru ? "Начать испытание →" : "Start Your Challenge →"}
          </a>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "24px", flexWrap: "wrap" }}>
            {(ru ? ["Возврат взноса при первой выплате", "Без подписок", "Финансирование за 24ч"] : ["Fee refunded on first payout", "No subscriptions", "Funded in 24h"]).map(t => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#555A72", fontSize: "13px" }}>
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
