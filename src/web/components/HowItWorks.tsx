import { useLang } from "../i18n/LangContext";

const icons = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12h6M9 16h4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#00D4AA" strokeWidth="1.5"/>
    <path d="M12 6v6l4 2" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="#00D4AA" strokeWidth="1.5"/>
    <path d="M2 10h20" stroke="#00D4AA" strokeWidth="1.5"/>
    <circle cx="7" cy="15" r="1" fill="#00D4AA"/>
  </svg>,
];

export default function HowItWorks() {
  const { tr } = useLang();

  const steps = [
    { num: "01", title: tr.hiw_s1_title, desc: tr.hiw_s1_desc },
    { num: "02", title: tr.hiw_s2_title, desc: tr.hiw_s2_desc },
    { num: "03", title: tr.hiw_s3_title, desc: tr.hiw_s3_desc },
    { num: "04", title: tr.hiw_s4_title, desc: tr.hiw_s4_desc },
  ];

  return (
    <section id="how-it-works" className="py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {tr.hiw_badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {tr.hiw_h2_1}{" "}<span className="gold-text">{tr.hiw_h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[500px] mx-auto text-[16px] leading-relaxed">{tr.hiw_sub}</p>
          <a href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-[14px] font-semibold text-[#0F1117] gold-gradient hover:opacity-90 transition-opacity"
            style={{ boxShadow: "0 4px 20px rgba(0,212,170,0.3)" }}>
            Get Funded Now →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px hidden lg:block"
            style={{ background: "linear-gradient(to right, transparent, rgba(0,212,170,0.3), transparent)" }} />

          {steps.map((step, i) => (
            <div key={i} className="relative p-6 rounded-2xl transition-all duration-300"
              style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.3)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,212,170,0.08)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)" }}>
                  {icons[i]}
                </div>
                <span className="text-[40px] font-black" style={{ color: "rgba(255,255,255,0.04)", lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {step.num}
                </span>
              </div>
              <h3 className="font-bold mb-3 text-[17px] text-[#F0F2FF]">{step.title}</h3>
              <p className="text-[14px] text-[#8A8FA8] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
