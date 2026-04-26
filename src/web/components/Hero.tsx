import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <section style={{ background: "#060a10", paddingTop: "80px" }}>

      {/* Just the photo — no text overlay */}
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src={ru ? "/hero-bg-ru.png" : "/hero-bg.png"}
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
      </div>

      {/* Buttons below the image, in normal flow */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "24px 32px clamp(24px, 4vw, 48px)",
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
            padding: "15px 34px", borderRadius: "8px",
            background: "#00D4AA", color: "#060a10",
            fontWeight: 700, fontSize: "clamp(14px, 1.2vw, 16px)",
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
            padding: "15px 28px", borderRadius: "8px",
            background: "rgba(255,255,255,0.06)",
            border: "1.5px solid rgba(255,255,255,0.28)",
            color: "#FFFFFF",
            fontWeight: 600, fontSize: "clamp(14px, 1.2vw, 16px)",
            textDecoration: "none", whiteSpace: "nowrap",
          }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: "22px", height: "22px", borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.45)", fontSize: "9px",
          }}>▶</span>
          {ru ? "Как это работает" : "How It Works"}
        </a>
      </div>

    </section>
  );
}
