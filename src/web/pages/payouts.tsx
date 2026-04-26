import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

export default function PayoutsPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  const steps = ru ? [
    { n: "01", title: "Откройте кабинет", desc: "Войдите на app.probcapital.com и перейдите в раздел «Вывод средств»." },
    { n: "02", title: "Выберите сумму", desc: "Укажите сумму вывода. Минимальная сумма — $50. Максимум — весь накопленный профит." },
    { n: "03", title: "Выберите способ", desc: "Банковский перевод или другой верифицированный метод оплаты." },
    { n: "04", title: "Получите деньги", desc: "Обрабатываем в течение 24 часов. Крипто — моментально после одобрения." },
  ] : [
    { n: "01", title: "Open Dashboard", desc: "Log in at app.probcapital.com and go to the Withdrawals section." },
    { n: "02", title: "Select Amount", desc: "Enter withdrawal amount. Minimum is $50. Maximum is your full accumulated profit." },
    { n: "03", title: "Choose Method", desc: "Bank wire transfer or other verified payment method registered in your name." },
    { n: "04", title: "Get Paid", desc: "Processed within 24 hours. Crypto is instant after approval." },
  ];

  const splits = [
    { plan: ru ? "Стандартный" : "Standard", split: "80%", freq: ru ? "Еженедельно" : "Weekly", min: "$50" },
    { plan: ru ? "Агрессивный" : "Aggressive", split: "90%", freq: ru ? "По запросу" : "On-demand", min: "$50" },
  ];

  return (
    <div style={{ background: "#0F1117", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", color: "#00D4AA", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            {ru ? "Выплаты" : "Payouts"}
          </div>
          <h1 style={{ fontSize: "clamp(32px,5vw,52px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            {ru ? "Как получить выплату" : "How Payouts Work"}
          </h1>
          <p style={{ color: "#8A8FA8", fontSize: "17px" }}>
            {ru ? "Прозрачно, быстро, без скрытых комиссий" : "Transparent, fast, no hidden fees"}
          </p>
        </div>

        {/* Splits table */}
        <div style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden", marginBottom: "32px" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <h2 style={{ fontSize: "17px", fontWeight: 700, margin: 0 }}>{ru ? "Условия по планам" : "Plan Conditions"}</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  {[ru ? "План" : "Plan", ru ? "Сплит прибыли" : "Profit Split", ru ? "Частота" : "Frequency", ru ? "Минимум" : "Minimum"].map(h => (
                    <th key={h} style={{ padding: "12px 24px", textAlign: "left", fontSize: "12px", color: "#555A72", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {splits.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < splits.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <td style={{ padding: "16px 24px", fontWeight: 600, fontSize: "15px" }}>{row.plan}</td>
                    <td style={{ padding: "16px 24px", color: "#00D4AA", fontWeight: 700, fontSize: "18px" }}>{row.split}</td>
                    <td style={{ padding: "16px 24px", color: "#B0B8D1", fontSize: "15px" }}>{row.freq}</td>
                    <td style={{ padding: "16px 24px", color: "#B0B8D1", fontSize: "15px" }}>{row.min}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Steps */}
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px" }}>{ru ? "Как вывести средства" : "How to Withdraw"}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "16px", marginBottom: "32px" }}>
          {steps.map((s) => (
            <div key={s.n} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "24px" }}>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#00D4AA", marginBottom: "12px", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{s.title}</div>
              <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Methods */}
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px" }}>{ru ? "Способы выплат" : "Payment Methods"}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "12px" }}>
          {[
            { icon: "🏦", name: ru ? "Банковский перевод" : "Bank Wire", detail: "SWIFT / SEPA", time: "1-3 " + (ru ? "дня" : "days") },
            { icon: "💳", name: ru ? "Верифицированный метод" : "Verified Method", detail: ru ? "На имя владельца аккаунта" : "Registered in account holder's name", time: ru ? "До 24 часов" : "Up to 24h" },
          ].map((m) => (
            <div key={m.name} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "20px" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{m.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>{m.name}</div>
              <div style={{ color: "#8A8FA8", fontSize: "13px", marginBottom: "8px" }}>{m.detail}</div>
              <div style={{ display: "inline-block", padding: "4px 10px", borderRadius: "100px", background: "rgba(34,197,94,0.12)", color: "#22C55E", fontSize: "12px", fontWeight: 600 }}>{m.time}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
