import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

export default function TermsPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const sections = ru ? [
    { title: "1. Принятие условий", text: "Используя сайт probcapital.com и сервисы ProbCapital, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны, пожалуйста, прекратите использование сервиса." },
    { title: "2. Описание сервиса", text: "ProbCapital предоставляет платформу для оценки навыков трейдеров. После прохождения оценки трейдеры получают доступ к имитационным торговым счетам. Выплаты основаны на результатах торговли на этих счетах." },
    { title: "3. Требования к пользователям", text: "Вы должны быть старше 18 лет. Использование сервиса разрешено только физическим лицам. Корпоративные счета не допускаются. Запрещено создание нескольких аккаунтов одним пользователем." },
    { title: "4. Оплата и возврат средств", text: "Оплата за участие в челлендже является разовой и невозвратной, за исключением случаев, предусмотренных нашей политикой. Комиссия за оценку возвращается при первой выплате прибыли." },
    { title: "5. Правила торговли", text: "Все участники обязаны соблюдать правила торговли, опубликованные на странице Правил. Нарушение правил влечёт отключение счёта без возврата средств." },
    { title: "6. Ограничение ответственности", text: "ProbCapital не несёт ответственности за убытки от торговли. Прошлые результаты не гарантируют будущих. Все торговые счета являются имитационными." },
    { title: "7. Изменение условий", text: "Мы оставляем за собой право изменять настоящие Условия в любое время. Уведомление будет размещено на сайте. Продолжение использования сервиса означает согласие с изменениями." },
  ] : [
    { title: "1. Acceptance of Terms", text: "By using probcapital.com and ProbCapital services, you agree to these Terms of Service. If you disagree, please discontinue use of the service." },
    { title: "2. Service Description", text: "ProbCapital provides a platform for evaluating traders' skills. Upon passing evaluation, traders receive access to simulated trading accounts. Payouts are based on trading performance on these accounts." },
    { title: "3. User Requirements", text: "You must be 18 years or older. Service is available to individuals only. Corporate accounts are not permitted. Creating multiple accounts is prohibited." },
    { title: "4. Payment and Refunds", text: "Challenge fees are one-time and non-refundable except as provided by our policy. The evaluation fee is refunded upon your first profit payout." },
    { title: "5. Trading Rules", text: "All participants must follow the trading rules published on our Rules page. Rule violations result in account termination without refund." },
    { title: "6. Limitation of Liability", text: "ProbCapital is not liable for trading losses. Past performance does not guarantee future results. All trading accounts are simulated." },
    { title: "7. Changes to Terms", text: "We reserve the right to modify these Terms at any time. Notice will be posted on the website. Continued use constitutes acceptance of changes." },
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
            {ru ? "Условия использования" : "Terms of Service"}
          </h1>
          <p style={{ color: "#555A72", fontSize: "14px" }}>{ru ? "Последнее обновление: апрель 2026" : "Last updated: April 2026"}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {sections.map((s) => (
            <div key={s.title}>
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
