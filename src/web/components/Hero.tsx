import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <section style={{ background: "#060a10", paddingTop: "80px" }}>

      {/* Just the photo — no text overlay */}
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src="/hero-bg.png"
          alt="Professional trader"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />

        {/* Bottom fade into page */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "15%",
          background: "linear-gradient(to top, #060a10, transparent)",
          pointerEvents: "none",
        }} />

        {/* Active buttons overlaid in the exact position from the design */}
        <div style={{
          position: "absolute",
          bottom: "22%",
          left: "5%",
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
        }}>
          <a
            href="https://app.probcapital.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "clamp(10px,1.5vw,15px) clamp(18px,2.5vw,32px)",
              borderRadius: "8px",
              background: "#00D4AA", color: "#060a10",
              fontWeight: 700, fontSize: "clamp(13px, 1.2vw, 16px)",
              textDecoration: "none", whiteSpace: "nowrap",
              boxShadow: "0 4px 24px rgba(0,212,170,0.5)",
            }}
          >
            {ru ? "Начать челлендж →" : "Start Challenge →"}
          </a>
          <a
            href="#how-it-works"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
              padding: "clamp(10px,1.5vw,15px) clamp(16px,2vw,28px)",
              borderRadius: "8px",
              background: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              color: "#FFFFFF",
              fontWeight: 600, fontSize: "clamp(13px, 1.2vw, 16px)",
              textDecoration: "none", whiteSpace: "nowrap",
            }}
          >
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "20px", height: "20px", borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.45)", fontSize: "8px",
            }}>▶</span>
            {ru ? "Как это работает" : "How It Works"}
          </a>
        </div>
      </div>

    </section>
  );
}
