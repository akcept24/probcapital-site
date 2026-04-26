import { useState } from "react";
import { useLang } from "../i18n/LangContext";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { tr } = useLang();

  return (
    <section id="faq" className="py-12 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {tr.faq_badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {tr.faq_h2_1}{" "}<span className="gold-text">{tr.faq_h2_2}</span>
          </h2>
        </div>

        <div className="space-y-3">
          {(tr.faq_items as readonly { q: string; a: string }[]).map((faq, i) => (
            <div key={i} className="rounded-xl overflow-hidden transition-all duration-200"
              style={{ background: "#1A1D27", border: open === i ? "1px solid rgba(0,212,170,0.25)" : "1px solid rgba(255,255,255,0.07)" }}>
              <button className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="text-[15px] font-semibold text-[#F0F2FF] pr-4">{faq.q}</span>
                <span className="text-[20px] transition-transform duration-200 shrink-0"
                  style={{ color: open === i ? "#00D4AA" : "#555A72", transform: open === i ? "rotate(45deg)" : "none" }}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="h-px mb-4" style={{ background: "rgba(255,255,255,0.05)" }} />
                  <p className="text-[14px] text-[#8A8FA8] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px] font-bold text-[#0F1117] gold-gradient hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0 8px 32px rgba(0,212,170,0.3)" }}>
            Start Your Challenge →
          </a>
          <p className="mt-3 text-[12px] text-[#555A72]">Fee refunded on first payout · No subscriptions · Funded in 24h</p>
        </div>
      </div>
    </section>
  );
}
