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
      ? "Фьючерсная оценка ProbCapital по подписке: счета $25,000–$150,000 от $67/мес, цели 6% + 3%, взносы засчитываются в счёт первой выплаты."
      : "ProbCapital Futures evaluation by subscription: $25K–$150K simulated accounts from $67/mo, 6% + 3% targets, fees rebated with your first payout.",
    path: "/futures",
    lang,
  });

  const steps = [
    { n: "01", title: tr.futp_s1_t, desc: tr.futp_s1_d },
    { n: "02", title: tr.futp_s2_t, desc: tr.futp_s2_d },
    { n: "03", title: tr.futp_s3_t, desc: tr.futp_s3_d },
    { n: "04", title: tr.futp_s4_t, desc: tr.futp_s4_d },
  ];

  const ruleRows = [
    { label: tr.fut_step1, value: tr.futp_step1_value, good: true },
    { label: tr.fut_step2, value: tr.futp_step2_value, good: true },
    { label: tr.fut_dll, value: "3%", good: false },
    { label: tr.fut_trailing, value: tr.futp_trailing_values, good: false },
    { label: tr.fut_mindays, value: tr.fut_mindays_value, good: false },
    { label: tr.fut_timelimit, value: tr.fut_timelimit_value, good: true },
    { label: tr.fut_split, value: tr.fut_split_value, good: true },
    { label: tr.fut_leverage, value: tr.fut_leverage_value, good: true },
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
        </div>

        {/* ── Plan selector (shared component, header provided by hero) ── */}
        <div style={{ marginBottom: "72px" }}>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 900, letterSpacing: "-0.02em", textAlign: "center", marginBottom: "8px" }}>
            {tr.fut_h2}
          </h2>
          <FuturesPlans hideHeader />
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

        {/* ── Rules ── */}
        <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", textAlign: "center" }}>
          {tr.futp_rules_h2}
        </h2>
        <div style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "28px", marginBottom: "72px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "20px 24px" }}>
            {ruleRows.map((row) => (
              <div key={row.label}>
                <div style={{ fontSize: "11px", color: "#555A72", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "6px" }}>
                  {row.label}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: row.good ? "#00D4AA" : "#F0F2FF" }}>
                  {row.value}
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: "#555A72", fontSize: "13px", lineHeight: 1.7, marginTop: "20px", marginBottom: 0 }}>
            {tr.risk_eod_note}
          </p>
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
