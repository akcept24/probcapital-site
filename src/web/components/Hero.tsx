import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { tr, lang } = useLang();
  const ru = lang === "ru";

  return (
    <section style={{ background: "#0a0e17", paddingTop: "80px" }}>
      <div style={{
        position: "relative",
        width: "100%",
        minHeight: "clamp(420px, 60vw, 680px)",
        overflow: "hidden",
      }}>
        {/* Background photo */}
        <img
          src="/hero-bg.png"
          alt="Professional trader"
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
            zIndex: 0,
          }}
        />

        {/* Dark overlay — left heavy so text readable */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(10,14,23,0.92) 0%, rgba(10,14,23,0.75) 45%, rgba(10,14,23,0.25) 75%, rgba(10,14,23,0.1) 100%)",
          zIndex: 1,
        }} />

        {/* Bottom fade */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "35%",
          background: "linear-gradient(to top, #0a0e17, transparent)",
          zIndex: 2,
        }} />

        {/* Text content */}
        <div style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(48px, 8vw, 100px) 24px clamp(60px, 10vw, 120px)",
        }}>
          <div style={{ maxWidth: "560px" }}>

            <h1 style={{
              margin: 0,
              fontSize: "clamp(34px, 5.5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "#FFFFFF",
            }}>
              {ru ? (
                <>
                  Получите<br />
                  финансирование.<br />
                  <span style={{ color: "#00D4AA" }}>Торгуйте нашим<br />капиталом.</span><br />
                  Забирайте до <span style={{ color: "#00D4AA" }}>90%</span> прибыли.
                </>
              ) : (
                <>
                  {tr.hero_h1_1}<br />
                  <span style={{ color: "#00D4AA" }}>{tr.hero_h1_2}</span>
                </>
              )}
            </h1>

            <p style={{
              marginTop: "clamp(14px, 2vw, 24px)",
              fontSize: "clamp(14px, 1.4vw, 17px)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.65,
              maxWidth: "460px",
            }}>
              {tr.hero_sub}{" "}
              <strong style={{ color: "#fff" }}>{tr.hero_sub_amount}</strong>{" "}
              {tr.hero_sub_mid}{" "}
              <strong style={{ color: "#fff" }}>{tr.hero_sub_split}</strong>.
            </p>

            {/* CTA buttons */}
            <div style={{
              display: "flex",
              gap: "12px",
              marginTop: "clamp(24px, 3vw, 40px)",
              flexWrap: "wrap",
            }}>
              <a
                href="https://app.probcapital.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "15px 32px",
                  borderRadius: "8px",
                  background: "#00D4AA",
                  color: "#0a0e17",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(0,212,170,0.5)",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                {ru ? "Начать челлендж →" : "Start Challenge →"}
              </a>

              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "15px 28px",
                  borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "clamp(14px, 1.2vw, 16px)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                }}
              >
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.5)",
                  fontSize: "9px",
                }}>▶</span>
                {ru ? "Как это работает" : "How It Works"}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
