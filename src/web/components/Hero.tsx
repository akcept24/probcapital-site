import { useEffect, useRef } from "react";
import { useLang } from "../i18n/LangContext";
import { appPlans } from "../lib/app-links";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { tr } = useLang();

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mouse-x", `${x}%`);
      el.style.setProperty("--mouse-y", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden grid-bg"
      style={{ paddingTop: "100px" }}
    >
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 900px 600px at 50% 40%, rgba(0,212,170,0.10) 0%, transparent 70%)",
      }} />
      <div className="absolute pointer-events-none" style={{
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,212,170,0.15) 0%, transparent 70%)",
        top: "10%", right: "15%", filter: "blur(60px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(0,212,170,0.1) 0%, transparent 70%)",
        bottom: "20%", left: "10%", filter: "blur(80px)",
      }} />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 fade-in-up"
        style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.25)", animationDelay: "0.1s" }}>
        <span className="w-2 h-2 rounded-full gold-gradient pulse-gold" />
        <span className="text-[13px] font-medium text-[#00D4AA]">{tr.hero_badge}</span>
      </div>

      {/* Headline */}
      <h1 className="fade-in-up" style={{
        fontSize: "clamp(38px, 7vw, 80px)", fontWeight: 800,
        lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: "900px", animationDelay: "0.2s",
      }}>
        {tr.hero_h1_1}
        <br />
        <span className="gold-text">{tr.hero_h1_2}</span>
      </h1>

      {/* Subheadline */}
      <p className="fade-in-up mt-6 text-[#8A8FA8] max-w-[580px] leading-relaxed"
        style={{ fontSize: "clamp(15px, 2vw, 18px)", animationDelay: "0.3s" }}>
        {tr.hero_sub}{" "}
        <span className="text-[#F0F2FF] font-semibold">{tr.hero_sub_amount}</span>{" "}
        {tr.hero_sub_mid}{" "}
        <span className="text-[#F0F2FF] font-semibold">{tr.hero_sub_split}</span>.
      </p>

      {/* CTA Buttons */}
      <div className="fade-in-up flex flex-col sm:flex-row gap-4 mt-10" style={{ animationDelay: "0.4s" }}>
        <a href={appPlans()} className="gold-gradient text-[#0F1117] text-[16px] font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-200"
          style={{ boxShadow: "0 8px 32px rgba(0,212,170,0.3)" }}>
          {tr.hero_cta1}
        </a>
        <a href="#how-it-works" className="text-[#F0F2FF] text-[16px] font-semibold px-8 py-4 rounded-xl transition-all duration-200"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(0,212,170,0.05)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}>
          {tr.hero_cta2}
        </a>
      </div>

      {/* Trust row */}
      <div className="fade-in-up flex flex-wrap items-center justify-center gap-6 mt-14 text-[13px] text-[#555A72]"
        style={{ animationDelay: "0.5s" }}>
        {([tr.hero_trust_1, tr.hero_trust_2, tr.hero_trust_3, tr.hero_trust_4]).map((text) => (
          <span key={text} className="flex items-center gap-1.5">
            <span className="text-[#00D4AA] font-bold">✓</span>
            <span>{text}</span>
          </span>
        ))}
      </div>

      {/* Dashboard mockup */}
      <div className="fade-in-up w-full max-w-[900px] mt-20 relative" style={{ animationDelay: "0.6s" }}>
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,212,170,0.08), transparent)", borderRadius: "0 0 16px 16px" }} />
        <div className="rounded-2xl overflow-hidden" style={{
          background: "#1A1D27", border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 0 1px rgba(0,212,170,0.1), 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,212,170,0.06)",
        }}>
          {/* Window bar */}
          <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
            <div className="ml-auto text-[12px] text-[#555A72] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] pulse-gold" />
              {tr.hero_dash_live}
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-4 md:p-6">
            {/* Top row stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[
                { label: tr.hero_dash_acct, value: "$100,000", change: null },
                { label: tr.hero_dash_bal, value: "$108,240", change: "+8.24%" },
                { label: tr.hero_dash_profit, value: "$8,240", change: "+8.24%" },
                { label: tr.hero_dash_days, value: "14 / 30", change: null },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-3 min-w-0"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-[10px] text-[#555A72] mb-1.5 uppercase tracking-wider font-medium truncate">
                    {stat.label}
                  </div>
                  <div className="font-bold text-[#F0F2FF] truncate" style={{ fontSize: "clamp(13px, 1.8vw, 18px)" }}>
                    {stat.value}
                  </div>
                  {stat.change && (
                    <div className="text-[11px] text-[#22C55E] font-medium mt-1">{stat.change}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="rounded-xl p-4 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", height: "150px" }}>
              <div className="absolute inset-0 flex items-end px-4 pb-4 gap-1">
                {[40, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 108].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm" style={{
                    height: `${h}%`,
                    background: i === 11 ? "linear-gradient(to top, #00D4AA, #00FFCC)" : "rgba(0,212,170,0.2)",
                  }} />
                ))}
              </div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <div className="text-[11px] text-[#555A72] uppercase tracking-wider font-medium">{tr.hero_dash_label}</div>
                  <div className="text-[20px] font-bold gold-text mt-1">+8.24%</div>
                </div>
                <div className="text-[11px] px-2.5 py-1 rounded-full font-medium whitespace-nowrap"
                  style={{ background: "rgba(34,197,94,0.12)", color: "#22C55E", border: "1px solid rgba(34,197,94,0.2)" }}>
                  Phase 1 ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade out bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0F1117, transparent)" }} />
    </section>
  );
}
