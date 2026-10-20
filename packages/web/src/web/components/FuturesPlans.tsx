import { useState } from "react";
import { useLang } from "../i18n/LangContext";
import { TRIAL_SIGNUP_URL } from "../lib/links";

const futuresSizes = ["$25,000", "$50,000", "$100,000", "$150,000"];
const futuresData: Record<string, { price: number; step1: string; step2: string; trailing: string }> = {
  "$25,000":  { price: 67,  step1: "$1,500 (6%)", step2: "$750 (3%)",   trailing: "$1,250" },
  "$50,000":  { price: 149, step1: "$3,000 (6%)", step2: "$1,500 (3%)", trailing: "$2,500" },
  "$100,000": { price: 249, step1: "$6,000 (6%)", step2: "$3,000 (3%)", trailing: "$5,000" },
  "$150,000": { price: 327, step1: "$9,000 (6%)", step2: "$4,500 (3%)", trailing: "$7,500" },
};
const POPULAR_SIZE = "$50,000";

export default function FuturesPlans() {
  const [selectedSize, setSelectedSize] = useState(POPULAR_SIZE);
  const { tr } = useLang();

  const data = futuresData[selectedSize];
  const isPopular = selectedSize === POPULAR_SIZE;

  const rules = [
    { label: tr.fut_step1,    value: data.step1,            good: true },
    { label: tr.fut_step2,    value: data.step2,            good: true },
    { label: tr.fut_dll,      value: "3%",                  good: false },
    { label: tr.fut_trailing, value: data.trailing,         good: false },
    { label: tr.fut_mindays,  value: tr.fut_mindays_value,  good: false },
    { label: tr.fut_timelimit, value: tr.fut_timelimit_value, good: true },
    { label: tr.fut_split,    value: tr.fut_split_value,    good: true },
    { label: tr.fut_leverage, value: tr.fut_leverage_value, good: true },
  ];

  const features = [
    tr.fut_chip_monthly,
    tr.fut_chip_cancel,
    tr.fut_feat_rebate,
    tr.fut_chip_sim,
  ];

  return (
    <section id="futures" className="py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {tr.fut_badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {tr.fut_h2_1}{" "}<span className="gold-text">{tr.fut_h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[560px] mx-auto text-[16px]">{tr.fut_sub}</p>
        </div>

        {/* Account size selector */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {futuresSizes.map((size) => (
            <button key={size} onClick={() => setSelectedSize(size)}
              className="px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200"
              style={selectedSize === size
                ? { background: "linear-gradient(135deg, #00D4AA, #00FFCC)", color: "#0F1117", boxShadow: "0 4px 20px rgba(0,212,170,0.3)" }
                : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8FA8" }}>
              {size}
            </button>
          ))}
        </div>

        {/* Plan card */}
        <div className="max-w-[720px] mx-auto">
          <div className="rounded-2xl p-8 relative flex flex-col"
            style={{ background: "#1A1D27", border: "1px solid rgba(0,212,170,0.40)", boxShadow: "0 0 50px rgba(0,212,170,0.12)" }}>

            {isPopular && (
              <div className="absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
                style={{ background: "linear-gradient(135deg, #00D4AA, #00FFCC)", color: "#0F1117" }}>
                {tr.fut_popular}
              </div>
            )}

            {/* Name + Price */}
            <div className="mb-6">
              <div className="text-[13px] text-[#8A8FA8] font-medium uppercase tracking-widest mb-2">{tr.fut_badge}</div>
              <div className="text-[22px] font-bold text-[#F0F2FF] mb-3">{selectedSize}</div>
              <div className="flex items-end gap-2">
                <span className="font-black" style={{
                  fontSize: "52px", letterSpacing: "-0.03em", lineHeight: 1,
                  background: "linear-gradient(135deg, #00D4AA, #00FFCC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  ${data.price}
                </span>
                <span className="text-[#555A72] text-[14px] mb-2">{tr.fut_per_month}</span>
              </div>
              <div className="text-[12px] text-[#22C55E] font-medium mt-1.5 flex items-center gap-1">
                <span>↩</span> {tr.fut_feat_rebate}
              </div>
            </div>

            {/* Rules grid */}
            <div className="rounded-xl p-4 mb-6 grid grid-cols-2 gap-y-4 gap-x-3"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
              {rules.map((rule) => (
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
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[14px] text-[#8A8FA8]">
                  <span className="text-[#00D4AA] font-bold text-[12px] shrink-0">✓</span>{f}
                </li>
              ))}
            </ul>

            <button
              className="w-full py-3.5 rounded-xl text-[15px] font-bold transition-all duration-200"
              onClick={() => window.open(TRIAL_SIGNUP_URL, "_blank")}
              style={{ background: "linear-gradient(135deg, #00D4AA, #00FFCC)", color: "#0F1117", boxShadow: "0 4px 20px rgba(0,212,170,0.25)" }}>
              {tr.fut_cta}
            </button>
          </div>

          {/* Instruments note */}
          <div className="mt-6 px-5 py-4 rounded-xl text-[13px] text-center leading-relaxed"
            style={{ background: "rgba(0,212,170,0.04)", border: "1px solid rgba(0,212,170,0.14)", color: "#7A8298", lineHeight: 1.85 }}>
            {tr.fut_note}
          </div>
        </div>
      </div>
    </section>
  );
}
