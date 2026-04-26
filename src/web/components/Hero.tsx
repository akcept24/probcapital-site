import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { tr, lang } = useLang();
  const ru = lang === "ru";

  const stats = ru
    ? [
        { icon: "💲", value: "$400,000+", line1: "Симулированного", line2: "торгового капитала" },
        { icon: "👤", value: "90%",       line1: "Максимальная",    line2: "выплата прибыли" },
        { icon: "🛡️", value: "Прозрачные", line1: "правила и честные", line2: "условия" },
      ]
    : [
        { icon: "💲", value: "$400,000+", line1: "Simulated",   line2: "Trading Capital" },
        { icon: "👤", value: "90%",       line1: "Maximum",     line2: "Profit Payout" },
        { icon: "🛡️", value: "Transparent", line1: "Rules and Fair", line2: "Conditions" },
      ];

  return (
    <section style={{ background: "#060a10", paddingTop: "80px" }}>

      {/* ── HERO PHOTO BLOCK ── */}
      <div style={{ position: "relative", width: "100%", minHeight: "clamp(400px, 55vw, 660px)", overflow: "hidden" }}>

        {/* Photo */}
        <img
          src="/hero-bg.png"
          alt="Professional trader"
          style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center top",
            zIndex: 0,
          }}
        />

        {/* Left gradient — keeps text readable */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(6,10,16,0.95) 0%, rgba(6,10,16,0.80) 38%, rgba(6,10,16,0.30) 65%, rgba(6,10,16,0.0) 100%)",
          zIndex: 1,
        }} />

        {/* Bottom fade into stats bar */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "30%",
          background: "linear-gradient(to top, #060a10, transparent)",
          zIndex: 2,
        }} />

        {/* TEXT */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: "1200px", margin: "0 auto",
          padding: "clamp(40px, 7vw, 90px) 32px clamp(80px, 12vw, 130px)",
        }}>
          <div style={{ maxWidth: "520px" }}>

            {/* Headline */}
            <h1 style={{
              margin: 0,
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
            }}>
              {ru ? (
                <>
                  Получите<br />финансирование.<br />
                  Торгуйте нашим капиталом.<br />
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
              marginTop: "clamp(16px, 2vw, 28px)",
              fontSize: "clamp(14px, 1.3vw, 16px)",
              color: "rgba(255,255,255,0.68)",
              lineHeight: 1.7,
              maxWidth: "420px",
            }}>
              {ru
                ? <>Пройдите нашу программу оценки и получите финансирование до <strong style={{ color: "#fff" }}>$400,000</strong> симулированного торгового капитала. Вы можете забрать до <strong style={{ color: "#fff" }}>90%</strong> прибыли.</>
                : <>Take our evaluation program and get funded with up to <strong style={{ color: "#fff" }}>$400,000</strong> in simulated trading capital. You can keep up to <strong style={{ color: "#fff" }}>90%</strong> of the profits.</>
              }
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "14px", marginTop: "clamp(24px, 3.5vw, 44px)", flexWrap: "wrap" }}>
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

          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px clamp(24px, 4vw, 48px)" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          borderRadius: "12px",
          background: "#0d1018",
          border: "1px solid rgba(0,212,170,0.18)",
          overflow: "hidden",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "22px 28px",
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(0,212,170,0.13)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "20px", flexShrink: 0,
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{ fontSize: "clamp(17px, 1.8vw, 22px)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "clamp(11px, 0.9vw, 13px)", color: "rgba(255,255,255,0.42)", marginTop: "2px", lineHeight: 1.4 }}>
                  {s.line1}<br />{s.line2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stack */}
      <style>{`
        @media (max-width: 640px) {
          .hero-stats-grid { grid-template-columns: 1fr !important; }
          .hero-stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07) !important; }
          .hero-stats-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
