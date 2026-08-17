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
              fontSize: "clamp(24px, 3.2vw, 48px)",
              fontWeight: 900,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}>
              {ru ? (
                <>
                  Докажите торговую<br />дисциплину.<br />
                  Получите доступ к<br />симулированному капиталу.<br />
                  <span style={{ color: "#00D4AA" }}>Забирайте до 90%<br />одобренных выплат.</span>
                </>
              ) : (
                <>
                  Prove your trading<br />discipline.<br />
                  Access simulated capital.<br />
                  <span style={{ color: "#00D4AA" }}>Keep up to 90%<br />of approved payouts.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p style={{
              marginTop: "clamp(14px, 2vw, 24px)",
              fontSize: "clamp(12px, 1vw, 14px)",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
            }}>
              {ru
                ? <>Пройдите нашу программу оценки. Получите до <strong style={{ color: "#fff" }}>$400,000</strong> симулированного капитала с выплатой до <strong style={{ color: "#fff" }}>90%</strong> по результатам оценки.</>
                : <>Take our evaluation program. Access up to <strong style={{ color: "#fff" }}>$400,000</strong> in simulated capital. Keep up to <strong style={{ color: "#fff" }}>90%</strong> of approved performance payouts.</>
              }
            </p>

            {/* Buttons */}
            <div style={{
              display: "flex", gap: "14px",
              marginTop: "clamp(18px, 2.5vw, 32px)",
              flexWrap: "wrap",
            }}>
              <a
                href="https://app.probcapital.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  padding: "12px 26px", borderRadius: "8px",
                  background: "#00D4AA", color: "#060a10",
                  fontWeight: 700, fontSize: "14px",
                  textDecoration: "none", whiteSpace: "nowrap",
                  boxShadow: "0 4px 28px rgba(0,212,170,0.5)",
                }}
              >
                {ru ? "Начать оценку →" : "Start Evaluation →"}
              </a>

              <a
                href="#how-it-works"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  padding: "12px 22px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "#FFFFFF",
                  fontWeight: 600, fontSize: "14px",
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

            {/* Company trust signal */}
            <div style={{
              marginTop: "clamp(18px, 2.5vw, 28px)",
              padding: "12px 18px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, rgba(0,212,170,0.04) 0%, rgba(0,150,255,0.02) 100%)",
              border: "1px solid rgba(0,212,170,0.15)",
              display: "inline-block",
            }}>
              <div style={{
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: "#00D4AA",
                marginBottom: "4px",
              }}>
                {ru ? "Зарегистрированная в США компания" : "U.S.-Registered Company"}
              </div>
              <div style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#D0D8F0",
              }}>
                ProbCapital LLC · Delaware, USA
              </div>
              <a
                href="/about"
                style={{
                  fontSize: "11px",
                  color: "#00D4AA",
                  textDecoration: "none",
                  display: "inline-block",
                  marginTop: "6px",
                  opacity: 0.9,
                }}
              >
                {ru ? "Информация о компании и правовые документы →" : "Company & Legal Information →"}
              </a>
            </div>

            {/* Simulated account disclosure */}
            <p style={{
              marginTop: "clamp(14px, 2vw, 22px)",
              fontSize: "11px",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.6,
              maxWidth: "400px",
            }}>
              {ru
                ? "Все счета являются симулированными торговыми средами. Реальный капитал не используется. Выплаты производятся ProbCapital LLC из собственных операционных средств на основании метрик оценки. Прошлые результаты не гарантируют будущих."
                : "All accounts are simulated trading environments. No real capital is deployed. Payouts are made by ProbCapital LLC from its own operating funds based on evaluation metrics. Past results do not guarantee future outcomes."}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
