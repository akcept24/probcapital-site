import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

const faqs = [
  {
    category: "Getting Started",
    categoryRu: "Начало работы",
    items: [
      { q: "How do I start a challenge?", qRu: "Как начать челлендж?", a: "Register on app.probcapital.com, choose your account size and plan, complete payment, and receive your login credentials within minutes.", aRu: "Зарегистрируйтесь на app.probcapital.com, выберите размер счёта и план, оплатите — данные для входа придут в течение нескольких минут." },
      { q: "What trading platforms are supported?", qRu: "Какие платформы поддерживаются?", a: "We support MetaTrader 4 (MT4) and MetaTrader 5 (MT5). Both platforms are available for desktop, web, and mobile.", aRu: "Мы поддерживаем MetaTrader 4 (MT4) и MetaTrader 5 (MT5). Доступны версии для ПК, браузера и мобильных устройств." },
      { q: "What instruments can I trade?", qRu: "Какими инструментами можно торговать?", a: "The simulation environment supports Forex pairs, indices, commodities, and metals. All major and minor pairs are available within the evaluation software.", aRu: "Симулированная среда поддерживает форекс-пары, индексы, сырьевые товары и металлы. Все основные и минорные пары доступны в рамках программы оценки." },
    ],
  },
  {
    category: "Evaluation Rules",
    categoryRu: "Правила оценки",
    items: [
      { q: "What is the profit target for Phase 1?", qRu: "Какова цель прибыли в Фазе 1?", a: "Standard plan: 10% profit target. Aggressive plan: 8% profit target.", aRu: "Стандартный план: цель 10%. Агрессивный план: цель 8%." },
      { q: "Is there a minimum trading days requirement?", qRu: "Есть ли требование по минимальному количеству дней?", a: "Standard plan requires a minimum of 4 trading days. Aggressive plan has no minimum days requirement.", aRu: "Стандартный план — минимум 4 торговых дня. Агрессивный — без минимума." },
      { q: "What happens if I breach a rule?", qRu: "Что происходит при нарушении правила?", a: "If you breach a drawdown rule, your challenge account will be closed. You get 1 free re-take on your first attempt.", aRu: "При нарушении правила просадки счёт закрывается. На первой попытке вы получаете 1 бесплатный рестарт." },
    ],
  },
  {
    category: "Payouts",
    categoryRu: "Выплаты",
    items: [
      { q: "How do I request a payout?", qRu: "Как запросить выплату?", a: "Log in to your dashboard, navigate to Withdrawals, enter the amount and your payment details. Payouts are processed within 24 hours.", aRu: "Войдите в личный кабинет, перейдите в раздел «Вывод средств», укажите сумму и реквизиты. Выплаты обрабатываются в течение 24 часов." },
      { q: "What payout methods are available?", qRu: "Какие способы выплат доступны?", a: "Approved performance-based payouts are issued via bank wire transfer or other verified payment methods to the account registered in your name. All payouts require completed KYC verification.", aRu: "Одобренные выплаты на основе показателей производительности осуществляются банковским переводом или другими верифицированными методами на счёт, зарегистрированный на ваше имя. Все выплаты требуют пройденной KYC-верификации." },
      { q: "How is performance-based compensation calculated?", qRu: "Как рассчитывается вознаграждение за результаты?", a: "Performance-based compensation is paid by ProbCapital LLC from its own operating funds based on your Evaluation Process metrics. The applicable rate depends on your selected evaluation plan.", aRu: "Вознаграждение за результаты выплачивается ProbCapital LLC из собственных операционных средств на основании метрик вашего процесса оценки. Применимая ставка зависит от выбранного плана оценки." },
    ],
  },
];

export default function HelpPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <div style={{ background: "#0F1117", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", color: "#00D4AA", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            {ru ? "Поддержка" : "Support"}
          </div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            {ru ? "Центр помощи" : "Help Center"}
          </h1>
          <p style={{ color: "#8A8FA8", fontSize: "17px" }}>
            {ru ? "Ответы на часто задаваемые вопросы" : "Answers to frequently asked questions"}
          </p>
        </div>

        {faqs.map((section) => (
          <div key={section.category} style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#00D4AA", marginBottom: "20px" }}>
              {ru ? section.categoryRu : section.category}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {section.items.map((item, i) => (
                <div key={i} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "24px" }}>
                  <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "10px", color: "#F0F2FF" }}>
                    {ru ? item.qRu : item.q}
                  </div>
                  <div style={{ color: "#8A8FA8", fontSize: "15px", lineHeight: 1.7 }}>
                    {ru ? item.aRu : item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.25)", borderRadius: "20px", padding: "32px", textAlign: "center", marginTop: "32px" }}>
          <div style={{ fontSize: "24px", marginBottom: "12px" }}>💬</div>
          <div style={{ fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>
            {ru ? "Не нашли ответ?" : "Didn't find your answer?"}
          </div>
          <div style={{ color: "#8A8FA8", marginBottom: "20px" }}>
            {ru ? "Наша команда поддержки всегда на связи" : "Our support team is always here to help"}
          </div>
          <a href="/contact" style={{ display: "inline-flex", alignItems: "center", padding: "12px 28px", borderRadius: "50px", background: "#00D4AA", color: "#0a0e17", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
            {ru ? "Связаться с нами" : "Contact Us"}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
