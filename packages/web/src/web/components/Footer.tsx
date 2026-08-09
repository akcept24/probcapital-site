import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { tr, lang } = useLang();
  const ru = lang === "ru";

  const groups = [
    {
      title: ru ? "Компания" : "Company",
      items: [
        { label: ru ? "О нас" : "About Us", href: "/about" },
        { label: ru ? "Центр помощи" : "Help Center", href: "/help" },
        { label: ru ? "Связаться с нами" : "Contact Us", href: "/contact" },
        { label: ru ? "Правила торговли" : "Trading Rules", href: "/rules" },
      ],
    },
    {
      title: ru ? "Программа" : "Program",
      items: [
        { label: ru ? "Челленджи" : "Challenges", href: "/#challenges" },
        { label: ru ? "Тарифы" : "Pricing", href: "/pricing" },
        { label: ru ? "Возможности" : "Features", href: "/#features" },
        { label: ru ? "Выплаты" : "Payouts", href: "/payouts" },
      ],
    },
    {
      title: ru ? "Правовые документы" : "Legal",
      items: [
        { label: ru ? "Условия использования" : "Terms of Service", href: "/terms" },
        { label: ru ? "Политика конфиденциальности" : "Privacy Policy", href: "/privacy" },
        { label: ru ? "Политика возврата" : "Refund Policy", href: "/refund" },
        { label: ru ? "Раскрытие рисков" : "Risk Disclosure", href: "/risk" },
        { label: ru ? "AML-политика" : "AML Policy", href: "/aml" },
        { label: ru ? "Не продавать мои данные" : "Do Not Sell or Share My Personal Information", href: "/privacy#ccpa" },
      ],
    },
  ];

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "56px", paddingBottom: "32px", paddingLeft: "24px", paddingRight: "24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top grid: brand + columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "40px", marginBottom: "48px" }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <img src="/logo.png" alt="ProbCapital" style={{ width: "36px", height: "36px", borderRadius: "10px", objectFit: "cover" }} />
              <span style={{ fontWeight: 700, fontSize: "17px" }}>
                <span className="gold-text">Prob</span>
                <span style={{ color: "#F0F2FF" }}>capital</span>
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "#9098B8", lineHeight: 1.7, maxWidth: "200px", margin: "0 0 20px" }}>
              {ru
                ? "Программное обеспечение для оценки трейдинговых навыков институционального уровня."
                : "Institutional-grade skill assessment software for professional traders."}
            </p>
          </div>

          {/* Nav columns */}
          {groups.map((g) => (
            <div key={g.title}>
              <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9098B8", marginBottom: "16px" }}>
                {g.title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {g.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}
                      style={{ fontSize: "13px", color: "#A8AEBE", textDecoration: "none", transition: "color 0.15s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#F0F2FF"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#A8AEBE"; }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mandatory legal disclaimer */}
        <div style={{
          padding: "20px 24px", borderRadius: "14px", marginBottom: "16px",
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
          fontSize: "12px", color: "#9098B8", lineHeight: 1.75,
        }}>
          <strong style={{ color: "#B0B4C8", display: "block", marginBottom: "6px" }}>
            {ru ? "Регуляторное раскрытие" : "Important Disclosure"}
          </strong>
          {ru
            ? "ProbCapital LLC предоставляет программное обеспечение для оценки торговых навыков и образовательные симуляции. ProbCapital LLC НЕ является финансовым брокером, инвестиционным советником или финансовым посредником и НЕ принимает клиентские средства для инвестирования. Все оценочные среды являются проприетарными программными симуляциями, использующими данные рынка в реальном времени — реальный капитал на финансовых рынках не используется. Вознаграждение за результаты оценки выплачивается ProbCapital LLC из собственных операционных средств исключительно на основании метрик процесса оценки. Прошлые результаты симуляций не свидетельствуют о будущих. Взносы за участие не возвращаются после начала использования услуги. Перед участием ознакомьтесь с Условиями использования, Политикой возврата и Раскрытием рисков."
            : "ProbCapital LLC provides Skill Evaluation Software and Educational Trading Simulation services. ProbCapital LLC is NOT a financial broker, NOT a registered investment adviser, NOT an investment firm, and does NOT accept client deposits for investment or trading purposes. All evaluation environments are proprietary software simulations using real-time market data feeds — no real capital is deployed in financial markets on behalf of users. Performance-based compensation is paid by ProbCapital LLC from its own operating funds based solely on Evaluation Process metrics. Past simulation performance does not indicate future results. Participation fees are non-refundable once the service is rendered. Please read our Terms of Service, Refund Policy, and Risk Disclosure in full before participating."}
        </div>

        {/* Delaware entity block */}
        <div style={{
          padding: "16px 24px", borderRadius: "14px", marginBottom: "28px",
          background: "rgba(0,212,170,0.03)", border: "1px solid rgba(0,212,170,0.1)",
          fontSize: "11px", color: "#5A6880", lineHeight: 1.7,
        }}>
          <strong style={{ color: "#7A8499" }}>ProbCapital LLC</strong>
          {ru
            ? " · Зарегистрирована в штате Делавэр, США · Регистрационный номер: 10541343 · Зарегистрированный офис: 8 The Green, Suite B, Dover, DE 19901"
            : " · Registered in the State of Delaware, USA · File #10541343 · Registered Office: 8 The Green, Suite B, Dover, DE 19901"}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.04)",
          display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px",
        }}>
          <div style={{ fontSize: "12px", color: "#9098B8" }}>
            {ru ? `© ${new Date().getFullYear()} ProbCapital LLC. Все права защищены.` : `© ${new Date().getFullYear()} ProbCapital LLC. All rights reserved.`}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "12px" }}>
            {[
              { label: ru ? "Условия" : "Terms", href: "/terms" },
              { label: ru ? "Конфиденциальность" : "Privacy", href: "/privacy" },
              { label: ru ? "Возврат" : "Refund", href: "/refund" },
              { label: ru ? "Риски" : "Risk", href: "/risk" },
              { label: ru ? "Не продавать мои данные" : "Do Not Sell My Info", href: "/privacy#ccpa" },
            ].map(l => (
              <a key={l.href} href={l.href}
                style={{ color: "#9098B8", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#A8AEBE"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#9098B8"; }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
