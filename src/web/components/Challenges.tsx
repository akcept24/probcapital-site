import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import { appPlans } from "../lib/app-links";

const accountSizes = ["$10,000", "$25,000", "$50,000", "$100,000", "$200,000", "$400,000"];
const prices: Record<string, { standard: number; aggressive: number }> = {
  "$10,000": { standard: 79, aggressive: 59 },
  "$25,000": { standard: 149, aggressive: 109 },
  "$50,000": { standard: 249, aggressive: 189 },
  "$100,000": { standard: 449, aggressive: 349 },
  "$200,000": { standard: 799, aggressive: 599 },
  "$400,000": { standard: 1299, aggressive: 999 },
};

export default function Challenges() {
  const [selectedSize, setSelectedSize] = useState("$100,000");
  const { tr } = useLang();

  const plans = [
    {
      id: "standard" as const,
      name: tr.ch_standard,
      badge: null,
      highlight: false,
      phase1Target: "10%",
      phase2Target: "5%",
      maxDD: "10%",
      dailyDD: "5%",
      minDays: tr.ch_mindays_std,
      profitSplit: "80%",
      features: [tr.ch_feat1, tr.ch_feat2, tr.ch_feat3_std, tr.ch_feat4],
      cta: tr.ch_cta_std,
    },
    {
      id: "aggressive" as const,
      name: tr.ch_aggressive,
      badge: tr.ch_popular,
      highlight: true,
      phase1Target: "10%",
      phase2Target: "5%",
      maxDD: "12%",
      dailyDD: "5%",
      minDays: tr.ch_mindays_agg,
      profitSplit: "90%",
      features: [tr.ch_feat1, tr.ch_feat2, tr.ch_feat3_agg, tr.ch_feat4, tr.ch_feat5],
      cta: tr.ch_cta_agg,
    },
  ];

  return (
    <section id="challenges" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {tr.ch_badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {tr.ch_h2_1}{" "}<span className="gold-text">{tr.ch_h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[480px] mx-auto text-[16px]">{tr.ch_sub}</p>
        </div>

        {/* Account size selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {accountSizes.map((size) => (
            <button key={size} onClick={() => setSelectedSize(size)}
              className="px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200"
              style={selectedSize === size
                ? { background: "linear-gradient(135deg, #00D4AA, #00FFCC)", color: "#0F1117", boxShadow: "0 4px 20px rgba(0,212,170,0.3)" }
                : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8FA8" }}>
              {size}
            </button>
          ))}
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="rounded-2xl p-8 relative transition-all duration-300"
              style={plan.highlight
                ? { background: "#1A1D27", border: "1px solid rgba(0,212,170,0.35)", boxShadow: "0 0 40px rgba(0,212,170,0.1), 0 0 0 1px rgba(0,212,170,0.1)" }
                : { background: "#1A1D27", border: "1px solid rgba(255,255,255,0.08)" }}>
              {plan.badge && (
                <div className="absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
                  style={{ background: "linear-gradient(135deg, #00D4AA, #00FFCC)", color: "#0F1117" }}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-7">
                <div className="text-[13px] text-[#8A8FA8] font-medium uppercase tracking-widest mb-2">{plan.name}</div>
                <div className="flex items-end gap-2">
                  <span className="font-black" style={{
                    fontSize: "48px", letterSpacing: "-0.03em", lineHeight: 1,
                    ...(plan.highlight
                      ? { background: "linear-gradient(135deg, #00D4AA, #00FFCC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }
                      : { color: "#F0F2FF" }),
                  }}>
                    ${prices[selectedSize][plan.id]}
                  </span>
                  <span className="text-[#555A72] text-[14px] mb-2">{tr.ch_onetime}</span>
                </div>
                <div className="text-[12px] text-[#22C55E] font-medium mt-1.5 flex items-center gap-1">
                  <span>↩</span> {tr.ch_refunded}
                </div>
              </div>

              {/* Rules */}
              <div className="rounded-xl p-4 mb-6 grid grid-cols-2 gap-3" style={{ background: "rgba(255,255,255,0.03)" }}>
                {[
                  { label: tr.ch_phase1, value: plan.phase1Target },
                  { label: tr.ch_phase2, value: plan.phase2Target },
                  { label: tr.ch_maxdd, value: plan.maxDD },
                  { label: tr.ch_dailydd, value: plan.dailyDD },
                  { label: tr.ch_mindays, value: plan.minDays },
                  { label: tr.ch_split, value: plan.profitSplit },
                ].map((rule) => (
                  <div key={rule.label}>
                    <div className="text-[11px] text-[#555A72] uppercase tracking-wider mb-0.5">{rule.label}</div>
                    <div className="text-[14px] font-semibold text-[#F0F2FF]">{rule.value}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[14px] text-[#8A8FA8]">
                    <span className="text-[#00D4AA] font-bold text-[12px]">✓</span>{f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3.5 rounded-xl text-[15px] font-bold transition-all duration-200"
                onClick={() => { window.location.href = appPlans(); }}
                style={plan.highlight
                  ? { background: "linear-gradient(135deg, #00D4AA, #00FFCC)", color: "#0F1117", boxShadow: "0 4px 20px rgba(0,212,170,0.25)" }
                  : { background: "transparent", border: "1px solid rgba(0,212,170,0.3)", color: "#00D4AA" }}
                onMouseEnter={e => { if (!plan.highlight) (e.currentTarget as HTMLElement).style.background = "rgba(0,212,170,0.08)"; }}
                onMouseLeave={e => { if (!plan.highlight) (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#555A72] mt-8">{tr.ch_note}</p>
      </div>
    </section>
  );
}
