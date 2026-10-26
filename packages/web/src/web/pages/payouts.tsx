import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";
import { usePageHead } from "../hooks/usePageHead";

export default function PayoutsPage() {
  const { lang, tr } = useLang();
  usePageHead({
    title: lang === "ru" ? "Выплаты ProbCapital — как получить выплату" : "ProbCapital Payouts — How Payouts Work",
    description: lang === "ru" ? "Как работают выплаты ProbCapital: сплиты до 90%, минимум $50, обработка в течение 24–48 часов после одобрения." : "How ProbCapital payouts work: up to 90% splits, $50 minimum, processed within 24–48 hours after approval.",
    path: "/payouts",
    lang,
  });
  const ru = lang === "ru";

  const steps = ru ? [
    { n: "01", title: "Откройте кабинет", desc: "Войдите на app.probcapital.com и перейдите в раздел «Финансы»." },
    { n: "02", title: "Выберите сумму", desc: "Укажите сумму вывода. Минимальная сумма — $50. Максимум — весь накопленный профит." },
    { n: "03", title: "Выберите способ", desc: "USDT (TRC-20 или ERC-20) или Wise — на кошелёк или счёт на ваше имя." },
    { n: "04", title: "Получите деньги", desc: "Обрабатываем в течение 24–48 часов после одобрения." },
  ] : [
    { n: "01", title: "Open Dashboard", desc: "Log in at app.probcapital.com and go to the Finance section." },
    { n: "02", title: "Select Amount", desc: "Enter withdrawal amount. Minimum is $50. Maximum is your full accumulated profit." },
    { n: "03", title: "Choose Method", desc: "USDT (TRC-20 or ERC-20) or Wise, to a wallet or account registered in your name." },
    { n: "04", title: "Get Paid", desc: "Processed within 24–48 hours after approval." },
  ];

  const splits = [
    { plan: ru ? "Стандартный" : "Standard", split: "80%", freq: ru ? "Запрос в любое время" : "Request anytime", min: "$50" },
    { plan: ru ? "Агрессивный" : "Aggressive", split: "90%", freq: ru ? "Запрос в любое время" : "Request anytime", min: "$50" },
    { plan: ru ? "Фьючерсы" : "Futures", split: "90%", freq: ru ? "Запрос в любое время" : "Request anytime", min: "$50" },
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
          <div style={{ marginTop: "20px", padding: "14px 22px", borderRadius: "14px", background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.22)", fontSize: "16px", fontWeight: 800, color: "#F0F2FF", lineHeight: 1.5 }}>
            {tr.ts_pair}
          </div>
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

        {/* Payout policy summary */}
        <div style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "24px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 16px" }}>{tr.pop_h2}</h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {[tr.pop_1, tr.pop_2, tr.pop_3, tr.pop_4, tr.pop_5].map((item) => (
              <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "#B0B8D1", fontSize: "14.5px", lineHeight: 1.6 }}>
                <span style={{ color: "#00D4AA", fontWeight: 800, flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
            { icon: "₮", name: "USDT (TRC-20)", detail: ru ? "Сеть TRON, кошелёк на ваше имя" : "TRON network, wallet in your name", time: ru ? "24–48 часов после одобрения" : "24–48 hours after approval" },
            { icon: "₮", name: "USDT (ERC-20)", detail: ru ? "Сеть Ethereum, кошелёк на ваше имя" : "Ethereum network, wallet in your name", time: ru ? "24–48 часов после одобрения" : "24–48 hours after approval" },
            { icon: "🏦", name: "Wise", detail: ru ? "На счёт на ваше имя" : "To an account in your name", time: ru ? "24–48 часов после одобрения" : "24–48 hours after approval" },
          ].map((m) => (
            <div key={m.name} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "20px" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{m.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "4px" }}>{m.name}</div>
              <div style={{ color: "#8A8FA8", fontSize: "13px", marginBottom: "8px" }}>{m.detail}</div>
              <div style={{ display: "inline-block", padding: "4px 10px", borderRadius: "100px", background: "rgba(34,197,94,0.12)", color: "#22C55E", fontSize: "12px", fontWeight: 600 }}>{m.time}</div>
            </div>
          ))}
        </div>
        {/* Operating funds disclaimer */}
        <div style={{
          marginTop: "40px", background: "rgba(255,160,60,0.04)",
          border: "1px solid rgba(255,160,60,0.15)", borderRadius: "16px",
          padding: "24px 28px",
        }}>
          <div style={{ fontSize: "10px", color: "#FFA03C", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
            ⚠️ &nbsp;{ru ? "Важное уведомление о выплатах" : "Important Payout Disclosure"}
          </div>
          <p style={{ color: "#C8BEA8", fontSize: "13.5px", lineHeight: 1.85, margin: 0 }}>
            {ru
              ? "Все выплаты производятся ProbCapital LLC из собственных операционных средств компании. Они не являются инвестиционной прибылью, доходом от ценных бумаг или какими-либо гарантированными поступлениями. Выплата возможна только после успешного прохождения всех обязательных этапов оценки, прохождения верификации KYC, соблюдения всех правил торговли и отсутствия нарушений по аккаунту. На выплаты могут распространяться лимиты, пороговые значения, периоды проверки и условия, изложенные в Правилах торговли и договоре программы оценки. ProbCapital оставляет за собой право проводить дополнительную проверку перед обработкой любого запроса на выплату. Прошлые результаты оценки не гарантируют будущих выплат."
              : "All payouts are made by ProbCapital LLC from its own operating funds. They do not constitute investment returns, securities income, or any form of guaranteed earnings. Payouts are subject to successful completion of all required evaluation phases, KYC identity verification, compliance with all trading rules, and no outstanding account violations. Payouts may be subject to caps, minimum thresholds, review periods, and conditions set out in the Trading Rules and evaluation program agreement. ProbCapital reserves the right to conduct additional review before processing any payout request. Past evaluation performance does not guarantee future payouts."}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
