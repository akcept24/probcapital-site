import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { tr } = useLang();

  // Photo is 1536x1024 = 3:2 ratio (66.67%)
  // On mobile we show it taller so nothing crops

  return (
    <section style={{ background: "#0a0e17", paddingTop: "80px" }}>

      {/* Photo container — aspect-ratio preserves full image */}
      <div style={{
        position: "relative",
        width: "100%",
        // 3:2 ratio = 66.67% padding trick
        paddingTop: "66.67%",
        overflow: "hidden",
      }}>

        {/* The actual photo — fully visible, no crop */}
        <img
          src="/hero-bg.png"
          alt="Professional trader at multi-monitor workstation"
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
            zIndex: 0,
          }}
        />

        {/* Left gradient so text is readable */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(5,8,15,0.85) 0%, rgba(5,8,15,0.55) 40%, rgba(5,8,15,0.05) 70%, transparent 100%)",
          zIndex: 1,
        }} />

        {/* Bottom fade into page */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "30%",
          background: "linear-gradient(to top, #0a0e17, transparent)",
          zIndex: 2,
        }} />

        {/* TEXT overlaid on photo */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "flex-start",
          paddingTop: "8%",
          padding: "8% 5% 0",
        }}>
          <div style={{ maxWidth: "520px" }}>

            {/* Headline */}
            <h1 style={{
              margin: 0,
              fontSize: "clamp(28px, 4.5vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}>
              {tr.hero_h1_1}
              <br />
              <span style={{ color: "#00D4AA" }}>{tr.hero_h1_2}</span>
            </h1>

            {/* Subheadline */}
            <p style={{
              marginTop: "clamp(8px, 1.5vw, 20px)",
              fontSize: "clamp(13px, 1.4vw, 17px)",
              color: "rgba(255,255,255,0.80)",
              lineHeight: 1.6,
            }}>
              {tr.hero_sub}{" "}
              <strong style={{ color: "#fff" }}>{tr.hero_sub_amount}</strong>{" "}
              {tr.hero_sub_mid}{" "}
              <strong style={{ color: "#fff" }}>{tr.hero_sub_split}</strong>.
            </p>

            {/* Trust bullets */}
            <div style={{
              marginTop: "clamp(10px, 1.5vw, 22px)",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}>
              {[tr.hero_bullets_1, tr.hero_bullets_2, tr.hero_bullets_3].map((b, i) => (
                <span key={i} style={{
                  fontSize: "clamp(12px, 1.1vw, 14px)",
                  color: "#00D4AA",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}>{b}</span>
              ))}
            </div>

            {/* Buttons */}
            <div style={{
              display: "flex",
              gap: "12px",
              marginTop: "clamp(12px, 2vw, 28px)",
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
                  padding: "clamp(10px,1.2vw,16px) clamp(20px,2.5vw,32px)",
                  borderRadius: "50px",
                  background: "#00D4AA",
                  color: "#0a0e17",
                  fontWeight: 700,
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(0,212,170,0.45)",
                  whiteSpace: "nowrap",
                }}
              >
                {tr.hero_cta1}
              </a>
              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "clamp(10px,1.2vw,16px) clamp(20px,2.5vw,32px)",
                  borderRadius: "50px",
                  background: "transparent",
                  border: "2px solid rgba(255,255,255,0.55)",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.2vw, 16px)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {tr.hero_cta2}
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
