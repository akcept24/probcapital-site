import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

export default function ContactPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const channels = [
    { icon: "💬", title: ru ? "Живой чат" : "Live Chat", desc: ru ? "Отвечаем в течение нескольких минут" : "We respond within minutes", action: ru ? "Открыть чат" : "Open Chat", href: "https://app.probcapital.com" },
    { icon: "📧", title: "Email", desc: "support@probcapital.com", action: ru ? "Написать" : "Send Email", href: "mailto:support@probcapital.com" },
    { icon: "📱", title: "Telegram", desc: "@probcapital_support", action: ru ? "Написать в Telegram" : "Message on Telegram", href: "https://t.me/probcapital_support" },
  ];

  return (
    <div style={{ background: "#0F1117", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", color: "#00D4AA", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            {ru ? "Поддержка" : "Support"}
          </div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            {ru ? "Связаться с нами" : "Contact Us"}
          </h1>
          <p style={{ color: "#8A8FA8", fontSize: "17px" }}>
            {ru ? "Мы работаем 24/7 — выберите удобный способ связи" : "We're available 24/7 — choose your preferred channel"}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "48px" }}>
          {channels.map((c) => (
            <div key={c.title} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontSize: "32px" }}>{c.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "18px" }}>{c.title}</div>
              <div style={{ color: "#8A8FA8", fontSize: "14px", flex: 1 }}>{c.desc}</div>
              <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 20px", borderRadius: "50px", background: "rgba(0,212,170,0.12)", border: "1px solid rgba(0,212,170,0.3)", color: "#00D4AA", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                {c.action}
              </a>
            </div>
          ))}
        </div>

        <div style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "24px" }}>
            {ru ? "Отправить сообщение" : "Send a Message"}
          </h2>
          <form onSubmit={(e) => { e.preventDefault(); alert(ru ? "Сообщение отправлено!" : "Message sent!"); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", color: "#8A8FA8", marginBottom: "8px" }}>{ru ? "Имя" : "Name"}</label>
                <input required style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#F0F2FF", fontSize: "15px", outline: "none", boxSizing: "border-box" }} placeholder={ru ? "Ваше имя" : "Your name"} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", color: "#8A8FA8", marginBottom: "8px" }}>Email</label>
                <input required type="email" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#F0F2FF", fontSize: "15px", outline: "none", boxSizing: "border-box" }} placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#8A8FA8", marginBottom: "8px" }}>{ru ? "Тема" : "Subject"}</label>
              <input required style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#F0F2FF", fontSize: "15px", outline: "none", boxSizing: "border-box" }} placeholder={ru ? "Тема сообщения" : "Subject"} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#8A8FA8", marginBottom: "8px" }}>{ru ? "Сообщение" : "Message"}</label>
              <textarea required rows={5} style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#F0F2FF", fontSize: "15px", outline: "none", resize: "vertical", boxSizing: "border-box" }} placeholder={ru ? "Ваше сообщение..." : "Your message..."} />
            </div>
            <button type="submit" style={{ padding: "14px 32px", borderRadius: "50px", background: "linear-gradient(135deg, #00D4AA, #00FFCC)", color: "#0a0e17", fontWeight: 700, fontSize: "15px", border: "none", cursor: "pointer", alignSelf: "flex-start" }}>
              {ru ? "Отправить" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
