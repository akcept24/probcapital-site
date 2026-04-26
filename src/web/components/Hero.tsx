import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <section style={{ background: "#060a10", paddingTop: "80px" }}>
      <div style={{ position: "relative", width: "100%" }}>

        {/* Photo as-is */}
        <img
          src={ru ? "/hero-bg-ru.png" : "/hero-bg.png"}
          alt="ProbCapital"
          style={{ display: "block", width: "100%", height: "auto" }}
        />

        {/* Button 1 — green */}
        <a
          href="https://app.probcapital.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: "73%",
            left: "7.5%",
            width: "20%",
            height: "7%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            color: "#0a0e17",
            fontWeight: 700,
            fontSize: "clamp(9px, 1.2vw, 15px)",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          {ru ? "Начать челлендж →" : "Start Challenge →"}
        </a>

        {/* Button 2 — dark */}
        <a
          href="#how-it-works"
          style={{
            position: "absolute",
            top: "73%",
            left: "30%",
            width: "20%",
            height: "7%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "clamp(9px, 1.2vw, 15px)",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          {ru ? "Как это работает" : "How It Works"}
        </a>

      </div>
    </section>
  );
}
