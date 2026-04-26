import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <section style={{ background: "#060a10", paddingTop: "80px" }}>
      <div style={{
        position: "relative",
        width: "100%",
        minHeight: "clamp(480px, 65vw, 700px)",
        overflow: "hidden",
        backgroundImage: `url(${ru ? "/hero-bg-ru.png" : "/hero-bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}>

        {/* Dark overlay — heavy on left where text goes */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(6,10,16,0.97) 0%, rgba(6,10,16,0.88) 30%, rgba(6,10,16,0.5) 55%, rgba(6,10,16,0.0) 80%)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "25%",
          background: "linear-gradient(to top, #060a10, transparent)",
        }} />

        {/* Content — left side */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: "1200px", margin: "0 auto",
          padding: "clamp(50px, 8vw, 110px) 40px",
          display: "flex", flexDirection: "column", alignItems: "flex-start",
        }}>
          <div style={{ maxWidth: "480px" }}>

            {/* Headline */}
            <h1 style={{
              margin: 0,
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#FFFFFF",
            }}>
              {ru ? (
                <>
                  Получите<br />финансирование.<br />
                  Торгуйте нашим<br />капиталом.<br />
                  <span style={{ color: "#00D4AA" }}>Забирайте до 90%<br />прибыли.</span>
                </>
              ) : (
                <>
                  Get funded.<br />
                  Trade our capital.<br />
                  <span style={{ color: "#00D4AA" }}>Keep up to 90%<br />of the profits.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p style={{
              marginTop: "clamp(14px, 2vw, 24px)",
              fontSize: "clamp(14px, 1.2vw, 16px)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
            }}>
              {ru
                ? <>Пройдите нашу программу оценки. Получите до <strong style={{ color: "#fff" }}>$400,000</strong> симулированного капитала с выплатой до <strong style={{ color: "#fff" }}>90%</strong> прибыли.</>
                : <>Take our evaluation program. Get funded with up to <strong style={{ color: "#fff" }}>$400,000</strong> in simulated capital. Keep up to <strong style={{ color: "#fff" }}>90%</strong> of profits.</>
              }
            </p>

            {/* Buttons */}
            <div style={{
              display: "flex", gap: "14px",
              marginTop: "clamp(28px, 4vw, 48px)",
              flexWrap: "wrap",
            }}>
              <a
                href="https://app.probcapital.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "15px 32px", borderRadius: "8px",
                  background: "#00D4AA", color: "#060a10",
                  fontWeight: 700, fontSize: "16px",
                  textDecoration: "none", whiteSpace: "nowrap",
                  boxShadow: "0 4px 28px rgba(0,212,170,0.5)",
                }}
              >
                {ru ? "Начать челлендж →" : "Start Challenge →"}
              </a>

              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  padding: "15px 28px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  fontWeight: 600, fontSize: "16px",
                  textDecoration: "none", whiteSpace: "nowrap",
                }}
              >
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "22px", height: "22px", borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.5)", fontSize: "9px",
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
