import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <section style={{ background: "#060a10", paddingTop: "80px" }}>
      <div style={{
        position: "relative",
        width: "100%",
        minHeight: "clamp(480px, 70vw, 720px)",
        overflow: "hidden",
        backgroundImage: `url(${ru ? "/hero-bg-ru.png" : "/hero-bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}>

        {/* Dark overlay left side */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(6,10,16,0.96) 0%, rgba(6,10,16,0.85) 35%, rgba(6,10,16,0.4) 60%, rgba(6,10,16,0.05) 100%)",
        }} />
        {/* Bottom fade */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
          background: "linear-gradient(to top, #060a10, transparent)",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: "1200px", margin: "0 auto",
          padding: "clamp(48px, 8vw, 100px) 32px clamp(80px, 12vw, 130px)",
        }}>
          <div style={{ maxWidth: "500px" }}>

            <h1 style={{
              margin: 0,
              fontSize: "clamp(32px, 5vw, 66px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}>
              {ru ? (
                <>
                  Получите финансирование.<br />
                  <span style={{ color: "#00D4AA" }}>Торгуйте нашим капиталом.</span><br />
                  Забирайте до <span style={{ color: "#00D4AA" }}>90%</span> прибыли.
                </>
              ) : (
                <>
                  Get funded.<br />
                  Trade our capital.<br />
                  <span style={{ color: "#00D4AA" }}>Keep up to 90%<br />of the profits.</span>
                </>
              )}
            </h1>

            <p style={{
              marginTop: "clamp(12px, 2vw, 22px)",
              fontSize: "clamp(13px, 1.2vw, 15px)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              maxWidth: "400px",
            }}>
              {ru
                ? <>Пройдите нашу программу оценки. Получите финансирование до <strong style={{ color: "#fff" }}>$400,000</strong> симулированного торгового капитала с выплатой до <strong style={{ color: "#fff" }}>90%</strong> от прибыли.</>
                : <>Take our evaluation program and get funded with up to <strong style={{ color: "#fff" }}>$400,000</strong> in simulated trading capital. Keep up to <strong style={{ color: "#fff" }}>90%</strong> of the profits.</>
              }
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "clamp(24px, 3vw, 40px)", flexWrap: "wrap" }}>
              <a
                href="https://app.probcapital.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "14px 30px", borderRadius: "8px",
                  background: "#00D4AA", color: "#060a10",
                  fontWeight: 700, fontSize: "clamp(13px, 1.1vw, 15px)",
                  textDecoration: "none", whiteSpace: "nowrap",
                  boxShadow: "0 4px 24px rgba(0,212,170,0.45)",
                }}
              >
                {ru ? "Начать челлендж →" : "Start Challenge →"}
              </a>
              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  padding: "14px 24px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1.5px solid rgba(255,255,255,0.28)",
                  color: "#FFFFFF",
                  fontWeight: 600, fontSize: "clamp(13px, 1.1vw, 15px)",
                  textDecoration: "none", whiteSpace: "nowrap",
                }}
              >
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: "20px", height: "20px", borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.4)", fontSize: "8px",
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
