import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <section style={{ background: "#060a10", paddingTop: "80px" }}>
      <div style={{ position: "relative", width: "100%" }}>

        {/* Photo — shown exactly as designed */}
        <img
          src={ru ? "/hero-bg-ru.png" : "/hero-bg.png"}
          alt="ProbCapital"
          style={{ display: "block", width: "100%", height: "auto" }}
        />

        {/* Two buttons placed over the empty button shapes on the photo */}
        {/* Buttons are at ~72% from top, ~6% from left on the original image */}
        <div style={{
          position: "absolute",
          top: "72%",
          left: "6%",
          display: "flex",
          gap: "2%",
          width: "60%",
        }}>
          <a
            href="https://app.probcapital.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "45%",
              padding: "2% 0",
              borderRadius: "8px",
              background: "transparent",
              color: "#060a10",
              fontWeight: 700,
              fontSize: "clamp(11px, 1.5vw, 17px)",
              textDecoration: "none",
              whiteSpace: "nowrap",
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
              gap: "6px",
              width: "45%",
              padding: "2% 0",
              borderRadius: "8px",
              background: "transparent",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: "clamp(11px, 1.5vw, 17px)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            {ru ? "Как это работает" : "How It Works"}
          </a>
        </div>

      </div>
    </section>
  );
}
