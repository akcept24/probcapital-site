import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { tr, lang } = useLang();

  const statsBar = lang === "ru"
    ? [
        { icon: "$", value: "$400,000+", label: "Симулированного капитала" },
        { icon: "👤", value: "90%", label: "Максимальная выплата прибыли" },
        { icon: "🛡", value: tr.hero_trust_2 ?? "Прозрачные", label: "правила и честные условия" },
      ]
    : [
        { icon: "$", value: "$400,000+", label: "Simulated capital" },
        { icon: "👤", value: "90%", label: "Max profit payout" },
        { icon: "🛡", value: "Transparent", label: "rules & fair conditions" },
      ];

  return (
    <section style={{ background: "#0a0e17", paddingTop: "80px" }}>
      {/* Main hero row */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(40px, 6vw, 80px) 24px clamp(24px, 4vw, 48px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(24px, 4vw, 64px)",
        alignItems: "center",
      }} className="hero-grid">

        {/* LEFT: text */}
        <div>
          {/* Headline */}
          <h1 style={{
            margin: 0,
            fontSize: "clamp(32px, 5vw, 72px)",
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            color: "#FFFFFF",
          }}>
            {lang === "ru" ? (
              <>
                Получите<br />
                финансирование.<br />
                <span style={{ color: "#00D4AA" }}>Торгуйте нашим<br />капиталом.</span><br />
                Забирайте до{" "}
                <span style={{ color: "#00D4AA" }}>90%</span> прибыли.
              </>
            ) : (
              <>
                {tr.hero_h1_1}<br />
                <span style={{ color: "#00D4AA" }}>{tr.hero_h1_2}</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p style={{
            marginTop: "clamp(16px, 2vw, 28px)",
            fontSize: "clamp(14px, 1.3vw, 17px)",
            color: "rgba(255,255,255,0.70)",
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
            gap: "14px",
            marginTop: "clamp(20px, 3vw, 36px)",
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
                padding: "14px 32px",
                borderRadius: "8px",
                background: "#00D4AA",
                color: "#0a0e17",
                fontWeight: 700,
                fontSize: "clamp(14px, 1.2vw, 16px)",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(0,212,170,0.45)",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              {lang === "ru" ? "Начать челлендж →" : "Start Challenge →"}
            </a>
            <a
              href="#how-it-works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "8px",
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.35)",
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
                fontSize: "10px",
              }}>▶</span>
              {lang === "ru" ? "Как это работает" : "How It Works"}
            </a>
          </div>
        </div>

        {/* RIGHT: trader photo */}
        <div style={{
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",
          aspectRatio: "4/3",
          background: "#111420",
        }} className="hero-photo">
          <img
            src="/hero-bg.png"
            alt="Professional trader"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          {/* subtle green glow overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(0,212,170,0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto 0",
        padding: "0 24px clamp(24px, 4vw, 48px)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          borderRadius: "12px",
          background: "#131620",
          border: "1px solid rgba(255,255,255,0.07)",
          overflow: "hidden",
        }} className="hero-stats">
          {statsBar.map((s, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              padding: "20px 28px",
              borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "rgba(0,212,170,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0,
              }}>
                {s.icon}
              </div>
              <div>
                <div style={{
                  fontSize: "clamp(16px, 1.8vw, 22px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                }}>{s.value}</div>
                <div style={{
                  fontSize: "clamp(11px, 0.9vw, 13px)",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "2px",
                  lineHeight: 1.4,
                }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile fallback: stack columns */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-photo { display: none !important; }
          .hero-stats { grid-template-columns: 1fr !important; }
          .hero-stats > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .hero-stats > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
