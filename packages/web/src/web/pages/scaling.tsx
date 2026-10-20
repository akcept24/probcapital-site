import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";
import { usePageHead } from "../hooks/usePageHead";
import { TRIAL_SIGNUP_URL } from "../lib/links";

export default function ScalingPage() {
  const { lang, tr } = useLang();
  const ru = lang === "ru";
  usePageHead({
    title: ru
      ? "Скейлинг ProbCapital — рост финансируемого счёта до $2 000 000"
      : "ProbCapital Scaling Program — Grow Your Funded Account to $2,000,000",
    description: ru
      ? "Как работает скейлинг ProbCapital: +10% чистой прибыли на профинансированном счёте даёт увеличение размера на 25% после проверки, не чаще одного раза в 30 дней, вплоть до $2 000 000."
      : "How ProbCapital scaling works: +10% net profit on your funded account earns a +25% size increase after review, at most once per 30 days, up to $2,000,000.",
    path: "/scaling",
    lang,
  });

  const terms = [
    { title: tr.scl_t1_t, value: tr.scl_t1_v, desc: tr.scl_t1_d },
    { title: tr.scl_t2_t, value: tr.scl_t2_v, desc: tr.scl_t2_d },
    { title: tr.scl_t3_t, value: tr.scl_t3_v, desc: tr.scl_t3_d },
    { title: tr.scl_t4_t, value: tr.scl_t4_v, desc: tr.scl_t4_d },
  ];

  const steps = [
    { n: "01", title: tr.scl_s1_t, desc: tr.scl_s1_d },
    { n: "02", title: tr.scl_s2_t, desc: tr.scl_s2_d },
    { n: "03", title: tr.scl_s3_t, desc: tr.scl_s3_d },
    { n: "04", title: tr.scl_s4_t, desc: tr.scl_s4_d },
  ];

  const ctaStyle = {
    display: "inline-block", padding: "15px 42px",
    background: "linear-gradient(135deg, #00D4AA, #00FFCC)",
    borderRadius: "12px", color: "#0F1117", fontWeight: 800,
    fontSize: "16px", textDecoration: "none",
    boxShadow: "0 4px 24px rgba(0,212,170,0.3)",
  } as const;

  return (
    <div style={{ background: "#0F1117", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />

      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "140px 24px 96px" }}>

        {/* ── Hero ── */}
        <div style={{ marginBottom: "72px", textAlign: "center" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", color: "#00D4AA", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "20px" }}>
            {tr.scl_badge}
          </div>
          <h1 style={{ fontSize: "clamp(34px,5.5vw,56px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "18px", lineHeight: 1.05 }}>
            {tr.scl_h1_1} <span className="gold-text">{tr.scl_h1_2}</span>
          </h1>
          <p style={{ color: "#8A8FA8", fontSize: "16px", lineHeight: 1.8, maxWidth: "620px", margin: "0 auto 30px" }}>
            {tr.scl_sub}
          </p>
          <a href={TRIAL_SIGNUP_URL} target="_blank" rel="noopener noreferrer" style={ctaStyle}>
            {tr.nav_getFunded}
          </a>
        </div>

        {/* ── The plan: term cards ── */}
        <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", textAlign: "center" }}>
          {tr.scl_terms_h2}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "16px", marginBottom: "72px" }}>
          {terms.map((t) => (
            <div key={t.title} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", padding: "24px" }}>
              <div style={{ fontSize: "11px", color: "#555A72", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "10px" }}>
                {t.title}
              </div>
              <div style={{ fontSize: "32px", fontWeight: 800, color: "#00D4AA", marginBottom: "10px", lineHeight: 1 }}>
                {t.value}
              </div>
              <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.65 }}>{t.desc}</div>
            </div>
          ))}
        </div>

        {/* ── How it works ── */}
        <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", textAlign: "center" }}>
          {tr.scl_hiw_h2}
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

        {/* ── Worked example ── */}
        <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "24px", textAlign: "center" }}>
          {tr.scl_ex_h2}
        </h2>
        <div style={{ background: "#1A1D27", border: "1px solid rgba(0,212,170,0.25)", borderRadius: "20px", padding: "32px 28px", marginBottom: "72px", textAlign: "center" }}>
          <div style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 800, letterSpacing: "-0.01em", marginBottom: "14px", color: "#F0F2FF" }}>
            {tr.scl_ex_ladder}
          </div>
          <p style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto" }}>
            {tr.scl_ex_d}
          </p>
        </div>

        {/* ── Honest note: reviewed, not automatic ── */}
        <div style={{ background: "rgba(0,212,170,0.05)", border: "1px solid rgba(0,212,170,0.18)", borderRadius: "20px", padding: "28px", marginBottom: "72px" }}>
          <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "8px", color: "#00D4AA" }}>{tr.scl_note_t}</div>
          <div style={{ color: "#8A8FA8", fontSize: "14px", lineHeight: 1.7 }}>{tr.scl_note_d}</div>
        </div>

        {/* ── Final CTA ── */}
        <div style={{
          textAlign: "center", padding: "56px 32px",
          background: "linear-gradient(135deg, rgba(0,212,170,0.07) 0%, rgba(0,140,255,0.03) 100%)",
          border: "1px solid rgba(0,212,170,0.18)", borderRadius: "24px",
        }}>
          <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "12px" }}>
            {tr.scl_cta_h2}
          </h2>
          <p style={{ color: "#8A8FA8", fontSize: "15px", marginBottom: "28px" }}>
            {tr.scl_cta_sub}
          </p>
          <a href={TRIAL_SIGNUP_URL} target="_blank" rel="noopener noreferrer" style={ctaStyle}>
            {tr.nav_getFunded}
          </a>
        </div>

      </div>
      <Footer />
    </div>
  );
}
