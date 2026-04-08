import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

export default function RiskPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const sections = ru ? [
    { title: "Общее раскрытие рисков", text: "Торговля на финансовых рынках сопряжена с высоким уровнем риска. Прошлые результаты не гарантируют будущих доходов. Вы можете потерять все вложенные средства. Никогда не торгуйте на деньги, которые не можете позволить себе потерять." },
    { title: "Имитационные счета", text: "Все торговые счета ProbCapital являются имитационными (демо). Реальные деньги на рынке не размещаются. Выплаты трейдерам производятся ProbCapital из собственных средств компании на основании результатов торговли." },
    { title: "Риск волатильности", text: "Цены на финансовые инструменты могут резко меняться под воздействием экономических новостей, геополитических событий и рыночной ликвидности. Это может привести к быстрым и существенным убыткам." },
    { title: "Риск кредитного плеча", text: "Торговля с плечом увеличивает как потенциальную прибыль, так и потенциальные убытки. Использование высокого кредитного плеча может привести к потере всего депозита за одну сделку." },
    { title: "Технологические риски", text: "Торговля через интернет подвержена рискам технических сбоев, задержек соединения и перебоев в работе платформы. ProbCapital не несёт ответственности за убытки, вызванные техническими неполадками." },
    { title: "Налоговые обязательства", text: "Трейдеры несут самостоятельную ответственность за уплату налогов с полученных выплат в соответствии с законодательством своей страны. Мы рекомендуем проконсультироваться с налоговым специалистом." },
  ] : [
    { title: "General Risk Disclosure", text: "Trading financial markets involves a high level of risk. Past performance does not guarantee future results. You may lose all funds invested. Never trade with money you cannot afford to lose." },
    { title: "Simulated Accounts", text: "All ProbCapital trading accounts are simulated (demo). No real money is placed in the market. Trader payouts are made by ProbCapital from company funds based on simulated trading performance." },
    { title: "Volatility Risk", text: "Financial instrument prices can move sharply due to economic news, geopolitical events, and market liquidity. This can lead to rapid and significant losses." },
    { title: "Leverage Risk", text: "Trading with leverage amplifies both potential profits and potential losses. Using high leverage can result in losing the entire account balance in a single trade." },
    { title: "Technology Risks", text: "Internet-based trading is subject to technical failures, connection delays, and platform outages. ProbCapital is not liable for losses caused by technical issues." },
    { title: "Tax Obligations", text: "Traders are solely responsible for paying taxes on received payouts in accordance with their local laws. We recommend consulting a tax professional." },
  ];

  return (
    <div style={{ background: "#0F1117", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", color: "#00D4AA", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            {ru ? "Правовая информация" : "Legal"}
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
            {ru ? "Раскрытие рисков" : "Risk Disclosure"}
          </h1>
          <p style={{ color: "#555A72", fontSize: "14px" }}>{ru ? "Последнее обновление: апрель 2026" : "Last updated: April 2026"}</p>
        </div>

        {/* Warning banner */}
        <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: "16px", padding: "20px 24px", marginBottom: "36px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "22px", flexShrink: 0 }}>⚠️</span>
          <p style={{ color: "#FCA5A5", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
            {ru
              ? "Торговля финансовыми инструментами сопряжена с высоким риском потери капитала. Убедитесь, что вы понимаете все риски перед началом торговли."
              : "Trading financial instruments carries a high risk of capital loss. Make sure you fully understand all risks before you start trading."}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {sections.map((s) => (
            <div key={s.title} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "24px" }}>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#F0F2FF", marginBottom: "10px" }}>{s.title}</h2>
              <p style={{ color: "#8A8FA8", fontSize: "15px", lineHeight: 1.75, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
