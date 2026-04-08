import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

export default function PrivacyPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const sections = ru ? [
    { title: "Какие данные мы собираем", text: "Мы собираем: имя, email, платёжные данные при регистрации; данные торговой активности; IP-адрес и данные браузера; информацию об использовании сайта." },
    { title: "Как мы используем данные", text: "Для предоставления и улучшения наших услуг; для обработки платежей и выплат; для связи с вами по вопросам аккаунта; для соблюдения требований законодательства." },
    { title: "Передача данных третьим лицам", text: "Мы не продаём ваши данные. Данные могут передаваться платёжным провайдерам для обработки транзакций, а также по требованию регуляторов." },
    { title: "Безопасность данных", text: "Мы применяем шифрование SSL/TLS, двухфакторную аутентификацию и регулярные аудиты безопасности для защиты ваших данных." },
    { title: "Ваши права", text: "Вы вправе запросить доступ, исправление или удаление ваших персональных данных. Для этого свяжитесь с нами по адресу privacy@probcapital.com." },
    { title: "Cookies", text: "Мы используем cookies для аналитики и улучшения пользовательского опыта. Вы можете отключить cookies в настройках браузера." },
  ] : [
    { title: "What Data We Collect", text: "We collect: name, email, payment details upon registration; trading activity data; IP address and browser data; website usage information." },
    { title: "How We Use Data", text: "To provide and improve our services; to process payments and payouts; to communicate with you about your account; to comply with legal requirements." },
    { title: "Third-Party Sharing", text: "We do not sell your data. Data may be shared with payment processors for transactions, and with regulators as required by law." },
    { title: "Data Security", text: "We use SSL/TLS encryption, two-factor authentication, and regular security audits to protect your data." },
    { title: "Your Rights", text: "You have the right to access, correct, or delete your personal data. Contact us at privacy@probcapital.com to exercise these rights." },
    { title: "Cookies", text: "We use cookies for analytics and improving user experience. You can disable cookies in your browser settings." },
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
            {ru ? "Политика конфиденциальности" : "Privacy Policy"}
          </h1>
          <p style={{ color: "#555A72", fontSize: "14px" }}>{ru ? "Последнее обновление: апрель 2026" : "Last updated: April 2026"}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {sections.map((s) => (
            <div key={s.title} style={{ borderLeft: "2px solid rgba(0,212,170,0.3)", paddingLeft: "20px" }}>
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
