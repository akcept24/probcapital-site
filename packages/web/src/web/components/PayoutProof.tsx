import { useState, useEffect, useRef } from "react";
import { useLang } from "../i18n/LangContext";

const certs = [
  "/cert-1.png",
  "/cert-2.png",
  "/cert-3.png",
  "/cert-4.png",
  "/cert-5.png",
];

const labels = {
  en: {
    badge: "Verified Payouts",
    h2_1: "Real Payouts.",
    h2_2: "Real Proof.",
    sub: "Every payout is verified and certified. No screenshots — real signed certificates.",
    total: "Total paid out to traders",
    cta: "Join Them →",
  },
  ru: {
    badge: "Подтверждённые выплаты",
    h2_1: "Реальные выплаты.",
    h2_2: "Реальные доказательства.",
    sub: "Каждая выплата верифицирована и сертифицирована. Не скриншоты — настоящие подписанные сертификаты.",
    total: "Всего выплачено трейдерам",
    cta: "Присоединиться →",
  },
};

export default function PayoutProof() {
  const { lang } = useLang();
  const l = labels[lang];
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(p => (p + 1) % certs.length);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (i: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 300);
    startTimer();
  };

  const prev = () => go((active - 1 + certs.length) % certs.length);
  const next = () => go((active + 1) % certs.length);

  return (
    <section className="py-12 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {l.badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {l.h2_1} <span className="gold-text">{l.h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[480px] mx-auto text-[16px] leading-relaxed">{l.sub}</p>
        </div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>

          {/* Main visible cert */}
          <div style={{
            position: "relative",
            maxWidth: "860px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(0,212,170,0.15)",
            border: "1px solid rgba(0,212,170,0.25)",
          }}>
            <img
              src={certs[active]}
              alt={`Payout Certificate ${active + 1}`}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                opacity: fading ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: "clamp(-8px, -3vw, -24px)",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px", height: "48px",
              borderRadius: "50%",
              background: "#1A1D27",
              border: "1px solid rgba(0,212,170,0.3)",
              color: "#00D4AA",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              zIndex: 10,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,212,170,0.15)")}
            onMouseLeave={e => (e.currentTarget.style.background = "#1A1D27")}
          >‹</button>

          {/* Next button */}
          <button
            onClick={next}
            style={{
              position: "absolute",
              right: "clamp(-8px, -3vw, -24px)",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px", height: "48px",
              borderRadius: "50%",
              background: "#1A1D27",
              border: "1px solid rgba(0,212,170,0.3)",
              color: "#00D4AA",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
              zIndex: 10,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,212,170,0.15)")}
            onMouseLeave={e => (e.currentTarget.style.background = "#1A1D27")}
          >›</button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "24px" }}>
          {certs.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                width: i === active ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === active ? "#00D4AA" : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Total strip */}
        <div className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12"
          style={{ background: "rgba(0,212,170,0.05)", border: "1px solid rgba(0,212,170,0.15)" }}>
          <div className="flex items-center gap-4">
            <div className="text-[40px] font-black gold-text" style={{ letterSpacing: "-0.03em" }}>$2.4M+</div>
            <div className="text-[15px] text-[#8A8FA8] max-w-[280px] leading-snug">{l.total}</div>
          </div>
          <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
            className="gold-gradient text-[#0F1117] text-[15px] font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ boxShadow: "0 4px 20px rgba(0,212,170,0.25)" }}>
            {l.cta}
          </a>
        </div>
      </div>


    </section>
  );
}
