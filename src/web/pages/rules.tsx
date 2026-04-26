import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

export default function RulesPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const rules = [
    {
      title: ru ? "Цели прибыли" : "Profit Targets",
      icon: "🎯",
      items: ru ? [
        "Стандарт Фаза 1: достичь 10% прибыли",
        "Стандарт Фаза 2: достичь 5% прибыли",
        "Агрессив Фаза 1: достичь 8% прибыли",
        "Агрессив: нет Фазы 2",
      ] : [
        "Standard Phase 1: reach 10% profit target",
        "Standard Phase 2: reach 5% profit target",
        "Aggressive Phase 1: reach 8% profit target",
        "Aggressive: no Phase 2 required",
      ],
    },
    {
      title: ru ? "Правила просадки" : "Drawdown Rules",
      icon: "📉",
      items: ru ? [
        "Стандарт: максимальная просадка 10% от начального баланса",
        "Агрессив: максимальная просадка 12% от начального баланса",
        "Дневная просадка: не более 5% (оба плана)",
        "Просадка считается от баланса на начало дня",
      ] : [
        "Standard: max drawdown 10% from initial balance",
        "Aggressive: max drawdown 12% from initial balance",
        "Daily drawdown: max 5% loss per day (both plans)",
        "Drawdown is calculated from the day's starting balance",
      ],
    },
    {
      title: ru ? "Минимальные дни торговли" : "Minimum Trading Days",
      icon: "📅",
      items: ru ? [
        "Стандарт: минимум 4 торговых дня в каждой фазе",
        "Агрессив: нет минимального требования по дням",
        "Торговый день — день, в котором открыта хотя бы 1 сделка",
      ] : [
        "Standard: minimum 4 trading days per phase",
        "Aggressive: no minimum trading days required",
        "A trading day counts when at least 1 trade is opened",
      ],
    },
    {
      title: ru ? "Разрешённые инструменты" : "Allowed Instruments",
      icon: "📊",
      items: ru ? [
        "Форекс: все основные, минорные и экзотические пары",
        "Металлы: золото (XAUUSD), серебро (XAGUSD)",
        "Индексы: US30, NAS100, SP500, UK100 и др.",
        "Нефть: WTI и Brent",
        "Криптовалюты: BTC, ETH, основные пары",
      ] : [
        "Forex: all major, minor and exotic pairs",
        "Metals: Gold (XAUUSD), Silver (XAGUSD)",
        "Indices: US30, NAS100, SP500, UK100 and more",
        "Oil: WTI and Brent",
        "Crypto pairs: BTC, ETH, major pairs",
      ],
    },
    {
      title: ru ? "Запрещённые действия" : "Prohibited Actions",
      icon: "🚫",
      items: ru ? [
        "Торговля на новостях с задержкой (latency arbitrage)",
        "Копирование сделок между счетами ProbCapital",
        "Использование советников с запрещёнными стратегиями",
        "Удержание позиций через выходные на агрессивном плане не рекомендуется",
      ] : [
        "Latency arbitrage or tick scalping",
        "Copying trades between ProbCapital accounts",
        "Using EAs with prohibited strategies",
        "Holding positions over weekends on aggressive plan is not recommended",
      ],
    },
    {
      title: ru ? "Плечо" : "Leverage",
      icon: "⚡",
      items: ru ? [
        "Стандартный план: плечо до 1:100",
        "Агрессивный план: плечо до 1:200",
        "Плечо применяется ко всем инструментам",
      ] : [
        "Standard plan: leverage up to 1:100",
        "Aggressive plan: leverage up to 1:200",
        "Leverage applies across all instruments",
      ],
    },
  ];

  return (
    <div style={{ background: "#0F1117", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", color: "#00D4AA", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            {ru ? "Правила" : "Rules"}
          </div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            {ru ? "Правила торговли" : "Trading Rules"}
          </h1>
          <p style={{ color: "#8A8FA8", fontSize: "17px" }}>
            {ru ? "Полные правила для прохождения оценки и торговли на финансируемом счёте" : "Complete rules for evaluation and funded account trading"}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {rules.map((section) => (
            <div key={section.title} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <span style={{ fontSize: "24px" }}>{section.icon}</span>
                <h2 style={{ fontSize: "18px", fontWeight: 700 }}>{section.title}</h2>
              </div>
              <ul style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: 0, listStyle: "none", margin: 0 }}>
                {section.items.map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#B0B8D1", fontSize: "15px", lineHeight: 1.6 }}>
                    <span style={{ color: "#00D4AA", fontWeight: 700, marginTop: "2px", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.25)", borderRadius: "20px", padding: "24px", marginTop: "32px", textAlign: "center" }}>
          <p style={{ color: "#8A8FA8", fontSize: "14px", margin: 0 }}>
            {ru ? "Вопросы по правилам? " : "Questions about the rules? "}
            <a href="/contact" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>
              {ru ? "Свяжитесь с поддержкой" : "Contact support"}
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
