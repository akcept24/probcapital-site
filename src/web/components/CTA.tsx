import { useLang } from "../i18n/LangContext";
import { appPlans } from "../lib/app-links";

export default function CTA() {
  const { tr } = useLang();

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden"
          style={{ background: "#1A1D27", border: "1px solid rgba(0,212,170,0.2)", boxShadow: "0 0 80px rgba(0,212,170,0.08)" }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 700px 400px at 50% 50%, rgba(0,212,170,0.08) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 pointer-events-none opacity-30"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          {/* Corners */}
          <div className="absolute top-0 left-0 w-px h-16" style={{ background: "linear-gradient(to bottom, #00D4AA, transparent)" }} />
          <div className="absolute top-0 left-0 w-16 h-px" style={{ background: "linear-gradient(to right, #00D4AA, transparent)" }} />
          <div className="absolute bottom-0 right-0 w-px h-16" style={{ background: "linear-gradient(to top, #00D4AA, transparent)" }} />
          <div className="absolute bottom-0 right-0 w-16 h-px" style={{ background: "linear-gradient(to left, #00D4AA, transparent)" }} />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.25)" }}>
              <span className="w-2 h-2 rounded-full gold-gradient pulse-gold" />
              <span className="text-[13px] font-medium text-[#00D4AA]">{tr.cta_badge}</span>
            </div>

            <h2 className="font-black mb-5" style={{ fontSize: "clamp(36px, 6vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              {tr.cta_h2_1}{" "}<span className="gold-text">{tr.cta_h2_2}</span>
            </h2>

            <p className="text-[#8A8FA8] text-[17px] max-w-[500px] mx-auto mb-10 leading-relaxed">{tr.cta_sub}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={appPlans()} className="gold-gradient text-[#0F1117] text-[16px] font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-all duration-200"
                style={{ boxShadow: "0 8px 32px rgba(0,212,170,0.3)" }}>
                {tr.cta_btn1}
              </a>
              <a href="#how-it-works" className="text-[#F0F2FF] text-[16px] font-semibold px-10 py-4 rounded-xl transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                {tr.cta_btn2}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-10 text-[13px] text-[#555A72]">
              {[tr.cta_t1, tr.cta_t2, tr.cta_t3, tr.cta_t4].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-[#00D4AA]">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
