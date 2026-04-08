import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

export default function AmlPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const sections = ru ? [
    { title: "Общие положения", text: "ProbCapital обязуется соблюдать требования законодательства в области противодействия отмыванию денег (AML) и финансированию терроризма (CFT). Настоящая политика описывает наши процедуры проверки и мониторинга." },
    { title: "Идентификация клиентов (KYC)", text: "Для получения выплат все трейдеры обязаны пройти верификацию личности (KYC): предоставить документ, удостоверяющий личность (паспорт или ID-карта), и подтверждение адреса проживания (утилиты или выписка из банка не старше 3 месяцев)." },
    { title: "Мониторинг транзакций", text: "Мы отслеживаем все финансовые операции на предмет подозрительной активности. Транзакции, превышающие установленные пороги, подлежат дополнительной проверке. При выявлении подозрительных операций мы вправе приостановить выплаты." },
    { title: "Запрещённые юрисдикции", text: "Сервис недоступен для резидентов стран, находящихся под международными санкциями, включая списки FATF. Мы оставляем за собой право отказать в обслуживании без объяснения причин." },
    { title: "Политика источника средств", text: "Оплата за участие в челлендже должна производиться только с личных платёжных средств трейдера. Платежи от третьих лиц не принимаются. Выплаты осуществляются только на реквизиты, совпадающие с данными верифицированного аккаунта." },
    { title: "Сообщение о нарушениях", text: "При наличии подозрений в нарушении AML-политики обращайтесь по адресу compliance@probcapital.com. Все обращения рассматриваются конфиденциально." },
  ] : [
    { title: "General Provisions", text: "ProbCapital is committed to complying with Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT) regulations. This policy outlines our verification and monitoring procedures." },
    { title: "Customer Identification (KYC)", text: "To receive payouts, all traders must complete identity verification (KYC): provide a government-issued ID (passport or national ID card) and proof of address (utility bill or bank statement not older than 3 months)." },
    { title: "Transaction Monitoring", text: "We monitor all financial transactions for suspicious activity. Transactions exceeding set thresholds are subject to additional review. We reserve the right to suspend payouts upon detecting suspicious activity." },
    { title: "Prohibited Jurisdictions", text: "The service is unavailable to residents of countries under international sanctions, including FATF lists. We reserve the right to refuse service without explanation." },
    { title: "Source of Funds Policy", text: "Challenge fees must be paid using the trader's own payment methods only. Third-party payments are not accepted. Payouts are made exclusively to verified account details." },
    { title: "Reporting Violations", text: "If you suspect an AML policy violation, contact us at compliance@probcapital.com. All reports are handled confidentially." },
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
            {ru ? "AML-политика" : "AML Policy"}
          </h1>
          <p style={{ color: "#555A72", fontSize: "14px" }}>{ru ? "Последнее обновление: апрель 2026" : "Last updated: April 2026"}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {sections.map((s) => (
            <div key={s.title} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "24px" }}>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#F0F2FF", marginBottom: "10px" }}>{s.title}</h2>
              <p style={{ color: "#8A8FA8", fontSize: "15px", lineHeight: 1.75, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.25)", borderRadius: "16px", padding: "20px 24px", marginTop: "32px" }}>
          <p style={{ color: "#8A8FA8", fontSize: "14px", margin: 0 }}>
            {ru ? "Вопросы по AML: " : "AML inquiries: "}
            <a href="mailto:compliance@probcapital.com" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>compliance@probcapital.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
