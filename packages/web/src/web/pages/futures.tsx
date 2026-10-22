import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FuturesPlans from "../components/FuturesPlans";
import { useLang } from "../i18n/LangContext";
import { usePageHead } from "../hooks/usePageHead";
import { TRIAL_SIGNUP_URL } from "../lib/links";

export default function FuturesPage() {
  const { lang, tr } = useLang();
  const ru = lang === "ru";
  usePageHead({
    title: ru ? "Фьючерсы ProbCapital — фьючерсная оценка по подписке" : "ProbCapital Futures — Futures Evaluation by Subscription",
    description: ru
      ? "Фьючерсная оценка ProbCapital по подписке: покупательная способность $25,000–$150,000 от $67/мес, цели 6% + 3%, взносы засчитываются в счёт первой выплаты."
      : "ProbCapital Futures evaluation by subscription: $25K–$150K buying power from $67/mo, 6% + 3% targets, fees rebated with your first payout.",
    path: "/futures",
    lang,
  });

  const steps = [
    { n: "01", title: tr.futp_s1_t, desc: tr.futp_s1_d },
    { n: "02", title: tr.futp_s2_t, desc: tr.futp_s2_d },
    { n: "03", title: tr.futp_s3_t, desc: tr.futp_s3_d },
    { n: "04", title: tr.futp_s4_t, desc: tr.futp_s4_d },
  ];

  const dollarRows = [
    { size: "$25,000", step1: "$1,500", step2: "$750", dll: "$750", trailing: "$1,250" },
    { size: "$50,000", step1: "$3,000", step2: "$1,500", dll: "$1,500", trailing: "$2,500" },
    { size: "$100,000", step1: "$6,000", step2: "$3,000", dll: "$3,000", trailing: "$5,000" },
    { size: "$150,000", step1: "$9,000", step2: "$4,500", dll: "$4,500", trailing: "$7,500" },
  ];

  const cmpRows = [
    { f: tr.futp_cmp_r1_f, us: tr.futp_cmp_r1_us, them: tr.futp_cmp_r1_them },
    { f: tr.futp_cmp_r2_f, us: tr.futp_cmp_r2_us, them: tr.futp_cmp_r2_them },
    { f: tr.futp_cmp_r3_f, us: tr.futp_cmp_r3_us, them: tr.futp_cmp_r3_them },
    { f: tr.fut_dll, us: tr.futp_cmp_r4_us, them: tr.futp_cmp_r4_them },
  ];

  const faqs = [
    { q: tr.futp_faq1_q, a: tr.futp_faq1_a },
    { q: tr.futp_faq2_q, a: tr.fut_note },
    { q: tr.futp_faq3_q, a: tr.futp_faq3_a },
    { q: tr.futp_faq4_q, a: tr.futp_faq4_a },
    { q: tr.futp_faq5_q, a: tr.futp_faq5_a },
    { q: tr.futp_faq6_q, a: tr.futp_faq6_a },
  ];

  return (
    <div style={{ background: "#0F1117", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "140px 24px 96px" }}>

        {/* ── Hero ── */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", color: "#00D4AA", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
            {tr.fut_badge}
          </div>
          <h1 style={{ fontSize: "clamp(34px,5.5vw,56px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "18px", lineHeight: 1.05 }}>
            {tr.futp_h1_1} <span className="gold-text">{tr.futp_h1_2}</span>
          </h1>
          <p style={{ color: "#8A8FA8", fontSize: "16px", lineHeight: 1.8, maxWidth: "620px", margin: "0 auto 30px" }}>
            {tr.fut_sub}
          </p>
          <a
            href={TRIAL_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block", padding: "15px 42px",
              background: "linear-gradient(135deg, #00D4AA, #00FFCC)",
              borderRadius: "12px", color: "#0F1117", fontWeight: 800,
              fontSize: "16px", textDecoration: "none",
              boxShadow: "0 4px 24px rgba(0,212,170,0.3)",
            }}
          >
            {tr.fut_cta}
          </a>
          <div style={{ marginTop: "28px", display: "inline-block", padding: "14px 22px", borderRadius: "14px", background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.22)", maxWidth: "640px" }}>
            <div style={{ fontSize: "16px", fontWeight: 800, color: "#F0F2FF", lineHeight: 1.5 }}>
              {tr.ts_pair}
            </div>
            <div style={{ fontSize: "13px", color: "#8A8FA8", lineHeight: 1.6, marginTop: "8px" }}>
              {tr.ts_trial}
            </div>
          </div>
        </div>

        {/* ── Plan selector (shared component, header provided by hero) ── */}
        <div style={{ marginBottom: "72px" }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, letterSpacing: "-0.02em", textAlign: "center", marginBottom: "8px" }}>
            {tr.fut_h2}
          </h2>
          <FuturesPlans hideHeader />
          <p style={{ color: "#555A72", fontSize: "13px", textAlign: "center", marginTop: "4px" }}>
            {tr.ts_most_fail}
          </p>
        </div>

        {/* ── How it works ── */}
        <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", textAlign: "center" }}>
          {tr.futp_hiw_h2}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "16px", marginBottom: "72px" }}>
          {steps.map((s) => (
            <div key={s.n} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "24px" }}>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "#00D4AA", marginBottom: "12px", lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{s.title}</div>
              <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.65 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* ── Rules: compression headline + full dollar table immediately beneath ── */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "clamp(30px,4.5vw,44px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "10px" }}>
            {tr.ts_compression}
          </h2>
          <p style={{ color: "#8A8FA8", fontSize: "15px", lineHeight: 1.7, maxWidth: "620px", margin: "0 auto" }}>
            {tr.ts_compression_sub}
          </p>
        </div>
        <div style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden", marginBottom: "24px" }}>
          <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 700, margin: 0 }}>{tr.futp_rules_h2}</h3>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  {[
                    ru ? "Покупательная способность" : "Buying power",
                    ru ? "Этап 1 · Evaluation — цель" : "Step 1 · Evaluation target",
                    ru ? "Этап 2 · Verification — цель" : "Step 2 · Verification target",
                    `${tr.fut_dll} (3%)`,
                    ru ? "Трейлинг-лимит просадки (конец дня)" : "Trailing drawdown limit (EOD)",
                  ].map(h => (
                    <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontSize: "11px", color: "#555A72", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dollarRows.map((row, i) => (
                  <tr key={row.size} style={{ borderBottom: i < dollarRows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <td style={{ padding: "14px 20px", fontWeight: 800, fontSize: "15px", color: "#F0F2FF" }}>{row.size}</td>
                    <td style={{ padding: "14px 20px", fontWeight: 700, fontSize: "15px", color: "#00D4AA" }}>{row.step1}</td>
                    <td style={{ padding: "14px 20px", fontWeight: 700, fontSize: "15px", color: "#00D4AA" }}>{row.step2}</td>
                    <td style={{ padding: "14px 20px", fontSize: "15px", color: "#F0F2FF" }}>{row.dll}</td>
                    <td style={{ padding: "14px 20px", fontSize: "15px", color: "#F0F2FF" }}>{row.trailing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", color: "#8A8FA8", fontSize: "13.5px", lineHeight: 1.7 }}>
            {tr.fut_mindays}: {tr.fut_mindays_value} · {tr.fut_timelimit}: {tr.fut_timelimit_value} · {tr.fut_split}: {tr.fut_split_value} · {tr.fut_leverage}: {tr.fut_leverage_value}
            <div style={{ color: "#555A72", fontSize: "13px", marginTop: "6px" }}>{tr.risk_eod_note}</div>
          </div>
        </div>

        {/* ── Worked payout examples (our numbers, our process) ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "16px", marginBottom: "24px" }}>
          <div style={{ background: "#1A1D27", border: "1px solid rgba(0,212,170,0.25)", borderRadius: "20px", padding: "24px" }}>
            <div style={{ fontWeight: 800, fontSize: "15px", marginBottom: "12px", color: "#00D4AA" }}>
              {ru ? "✅ Пример — выплата (план 50K)" : "✅ Example — a payout (50K plan)"}
            </div>
            <p style={{ color: "#B0B8D1", fontSize: "14px", lineHeight: 1.75, margin: 0 }}>
              {ru
                ? "На этапе Simulated Funded симулированный баланс растёт с $50,000 до $53,000 (симулированная прибыль $3,000) → вы запрашиваете выплату → запрос проходит ручную проверку по правилам выплат → при одобрении вам выплачивается 90% прибыли = $2,700. С этой первой выплатой также засчитываются взносы вашей подписки."
                : "On the Simulated Funded stage, the simulated balance grows from $50,000 to $53,000 (simulated profit $3,000) → you request a payout → the request passes a manual review under the payout rules → if approved, you are paid 90% of the profit = $2,700. Your subscription fees are also rebated with this first payout."}
            </p>
          </div>
          <div style={{ background: "#1A1D27", border: "1px solid rgba(255,120,120,0.22)", borderRadius: "20px", padding: "24px" }}>
            <div style={{ fontWeight: 800, fontSize: "15px", marginBottom: "12px", color: "#FF8A8A" }}>
              {ru ? "❌ Пример — без выплаты (план 50K)" : "❌ Example — no payout (50K plan)"}
            </div>
            <p style={{ color: "#B0B8D1", fontSize: "14px", lineHeight: 1.75, margin: 0 }}>
              {ru
                ? "Симулированный баланс падает так, что на конец дня коснулся трейлинг-лимита просадки ($2,500 на плане 50K) → счёт закрывается, выплата не производится."
                : "The simulated balance falls so that, at end of day, it touches the trailing drawdown limit ($2,500 on the 50K plan) → the account is closed and no payout is made."}
            </p>
          </div>
        </div>
        <p style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.7, textAlign: "center", marginBottom: "72px" }}>
          {tr.ts_pair}
        </p>

        {/* ── Renewal, reset credit and Restart ── */}
        <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", textAlign: "center" }}>
          {ru ? "Продление, сброс и Restart" : "Renewal, Reset Credit and Restart"}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "16px", marginBottom: "72px" }}>
          <div style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{ru ? "Продление по счёту" : "Invoice renewal"}</div>
            <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.65 }}>{tr.ts_invoice}</div>
          </div>
          <div style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{ru ? "Кредит сброса при продлении" : "Renewal reset credit"}</div>
            <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.65 }}>{tr.ts_reset_credit}</div>
          </div>
          <div style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>Restart</div>
            <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.65 }}>{tr.ts_restart}</div>
          </div>
        </div>

        {/* ── Comparison ── */}
        <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", textAlign: "center" }}>
          {tr.futp_cmp_h2}
        </h2>
        <div style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden", marginBottom: "72px" }}>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <th style={{ padding: "14px 24px", textAlign: "left", fontSize: "12px", color: "#555A72", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}> </th>
                  <th style={{ padding: "14px 24px", textAlign: "left", fontSize: "12px", color: "#00D4AA", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>{tr.futp_cmp_us}</th>
                  <th style={{ padding: "14px 24px", textAlign: "left", fontSize: "12px", color: "#555A72", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{tr.futp_cmp_them}</th>
                </tr>
              </thead>
              <tbody>
                {cmpRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < cmpRows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <td style={{ padding: "16px 24px", fontWeight: 600, fontSize: "14px", color: "#B0B8D1" }}>{row.f}</td>
                    <td style={{ padding: "16px 24px", color: "#00D4AA", fontWeight: 700, fontSize: "15px" }}>{row.us}</td>
                    <td style={{ padding: "16px 24px", color: "#8A8FA8", fontSize: "14px" }}>{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── FAQ ── */}
        <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", textAlign: "center" }}>
          {tr.futp_faq_h2}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "72px" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "20px 24px" }}>
              <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>{f.q}</div>
              <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.7 }}>{f.a}</div>
            </div>
          ))}
        </div>

        {/* ── Final CTA ── */}
        <div style={{
          textAlign: "center", padding: "56px 32px",
          background: "linear-gradient(135deg, rgba(0,212,170,0.07) 0%, rgba(0,140,255,0.03) 100%)",
          border: "1px solid rgba(0,212,170,0.18)", borderRadius: "24px",
        }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "12px" }}>
            {tr.futp_cta_h2}
          </h2>
          <p style={{ color: "#8A8FA8", fontSize: "15px", marginBottom: "28px" }}>
            {tr.futp_cta_sub}
          </p>
          <a
            href={TRIAL_SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block", padding: "15px 42px",
              background: "linear-gradient(135deg, #00D4AA, #00FFCC)",
              borderRadius: "12px", color: "#0F1117", fontWeight: 800,
              fontSize: "16px", textDecoration: "none",
              boxShadow: "0 4px 24px rgba(0,212,170,0.3)",
            }}
          >
            {tr.fut_cta}
          </a>
        </div>

      </div>
      <Footer />
    </div>
  );
}
