import { useState } from "react";
import { useLang } from "../i18n/LangContext";

const accountSizes = ["$10,000", "$25,000", "$50,000", "$100,000", "$200,000", "$400,000"];
const prices: Record<string, { standard: number; aggressive: number }> = {
  "$10,000":  { standard: 79,   aggressive: 59   },
  "$25,000":  { standard: 149,  aggressive: 109  },
  "$50,000":  { standard: 249,  aggressive: 189  },
  "$100,000": { standard: 449,  aggressive: 349  },
  "$200,000": { standard: 799,  aggressive: 599  },
  "$400,000": { standard: 1299, aggressive: 999  },
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
      rules: [
        { label: tr.ch_phase1,  value: "10%",    good: true },
        { label: tr.ch_phase2,  value: "5%",     good: true },
        { label: tr.ch_maxdd,   value: "10%",    good: false },
        { label: tr.ch_dailydd, value: "5%",     good: false },
        { label: tr.ch_mindays, value: "4 " + tr.ch_days, good: false },
        { label: tr.ch_split,   value: "80%",    good: true },
        { label: tr.ch_leverage,value: "1:100",  good: true },
        { label: tr.ch_payouts, value: tr.ch_weekly, good: false },
      ],
      features: [
        tr.ch_feat_mt,
        tr.ch_feat_instruments,
        tr.ch_feat_retake,
        tr.ch_feat_phase2,
      ],
      cta: tr.ch_cta_std,
    },
    {
      id: "aggressive" as const,
      name: tr.ch_aggressive,
      badge: tr.ch_popular,
      highlight: true,
      rules: [
        { label: tr.ch_phase1,  value: "8%",     good: true },
        { label: tr.ch_phase2,  value: tr.ch_nophase2, good: true },
        { label: tr.ch_maxdd,   value: "12%",    good: true },
        { label: tr.ch_dailydd, value: "5%",     good: false },
        { label: tr.ch_mindays, value: tr.ch_nomin, good: true },
        { label: tr.ch_split,   value: "90%",    good: true },
        { label: tr.ch_leverage,value: "1:200",  good: true },
        { label: tr.ch_payouts, value: tr.ch_ondemand, good: true },
      ],
      features: [
        tr.ch_feat_mt,
        tr.ch_feat_instruments,
        tr.ch_feat_retake,
        tr.ch_feat_nophase2,
        tr.ch_feat_leverage,
      ],
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
        <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="rounded-2xl p-8 relative flex flex-col"
              style={plan.highlight
                ? { background: "#1A1D27", border: "1px solid rgba(0,212,170,0.40)", boxShadow: "0 0 50px rgba(0,212,170,0.12)" }
                : { background: "#1A1D27", border: "1px solid rgba(255,255,255,0.08)" }}>

              {plan.badge && (
                <div className="absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
                  style={{ background: "linear-gradient(135deg, #00D4AA, #00FFCC)", color: "#0F1117" }}>
                  {plan.badge}
                </div>
              )}

              {/* Name + Price */}
              <div className="mb-6">
                <div className="text-[13px] text-[#8A8FA8] font-medium uppercase tracking-widest mb-2">{plan.name}</div>
                <div className="flex items-end gap-2">
                  <span className="font-black" style={{
                    fontSize: "52px", letterSpacing: "-0.03em", lineHeight: 1,
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

              {/* Rules grid */}
              <div className="rounded-xl p-4 mb-6 grid grid-cols-2 gap-y-4 gap-x-3"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                {plan.rules.map((rule) => (
                  <div key={rule.label}>
                    <div className="text-[11px] text-[#555A72] uppercase tracking-wider mb-1">{rule.label}</div>
                    <div className="text-[14px] font-bold flex items-center gap-1.5"
                      style={{ color: rule.good ? "#00D4AA" : "#F0F2FF" }}>
                      {rule.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-[14px] text-[#8A8FA8]">
                    <span className="text-[#00D4AA] font-bold text-[12px] shrink-0">✓</span>{f}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3.5 rounded-xl text-[15px] font-bold transition-all duration-200"
                onClick={() => window.open("https://app.probcapital.com", "_blank")}
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

        {/* Comparison hint */}
        <div className="mt-10 max-w-[900px] mx-auto rounded-2xl p-6"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              { icon: "🎯", title: tr.ch_diff1_title, desc: tr.ch_diff1_desc },
              { icon: "⚡", title: tr.ch_diff2_title, desc: tr.ch_diff2_desc },
              { icon: "💰", title: tr.ch_diff3_title, desc: tr.ch_diff3_desc },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-[14px] font-bold text-[#F0F2FF] mb-1">{item.title}</div>
                <div className="text-[13px] text-[#6B7090]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-[13px] text-[#555A72] mt-6">{tr.ch_note}</p>
      </div>
    </section>
  );
}
