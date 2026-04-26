import { useLang } from "../i18n/LangContext";

const icons = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#00D4AA" strokeWidth="1.5"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="#00D4AA" strokeWidth="1.5"/><path d="M8 21h8M12 17v4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="#00D4AA" strokeWidth="1.5"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round"/></svg>,
];

export default function Features() {
  const { tr } = useLang();

  const features = [
    { title: tr.feat_1_title, desc: tr.feat_1_desc },
    { title: tr.feat_2_title, desc: tr.feat_2_desc },
    { title: tr.feat_3_title, desc: tr.feat_3_desc },
    { title: tr.feat_4_title, desc: tr.feat_4_desc },
    { title: tr.feat_5_title, desc: tr.feat_5_desc },
    { title: tr.feat_6_title, desc: tr.feat_6_desc },
  ];

  return (
    <section id="features" className="py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {tr.feat_badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {tr.feat_h2_1}{" "}<span className="gold-text">{tr.feat_h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[480px] mx-auto text-[16px]">{tr.feat_sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="p-7 rounded-2xl transition-all duration-300 cursor-default"
              style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,212,170,0.25)"; el.style.boxShadow = "0 0 30px rgba(0,212,170,0.06)"; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.boxShadow = "none"; el.style.transform = "none"; }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.15)" }}>
                {icons[i]}
              </div>
              <h3 className="font-bold text-[17px] text-[#F0F2FF] mb-2.5">{f.title}</h3>
              <p className="text-[14px] text-[#8A8FA8] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
