import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { tr } = useLang();

  const groups = [
    { title: tr.footer_col1, links: tr.footer_c1 as readonly string[] },
    { title: tr.footer_col2, links: tr.footer_c2 as readonly string[] },
    { title: tr.footer_col3, links: tr.footer_c3 as readonly string[] },
    { title: tr.footer_col4, links: tr.footer_c4 as readonly string[] },
  ];

  return (
    <footer className="pt-16 pb-8 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Probcapital" className="w-9 h-9 rounded-lg object-cover" />
              <span className="font-bold text-[17px]">
                <span className="gold-text">Prob</span><span className="text-[#F0F2FF]">capital</span>
              </span>
            </div>
            <p className="text-[13px] text-[#555A72] leading-relaxed max-w-[220px]">{tr.footer_desc}</p>
            <div className="flex gap-3 mt-5">
              {["𝕏", "in", "📷", "💬"].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl flex items-center justify-center text-[13px] transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#8A8FA8" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.3)"; (e.currentTarget as HTMLElement).style.color = "#00D4AA"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "#8A8FA8"; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-[12px] font-semibold uppercase tracking-widest text-[#555A72] mb-4">{g.title}</div>
              <ul className="space-y-2.5">
                {g.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-[#8A8FA8] hover:text-[#F0F2FF] transition-colors duration-150">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="py-5 px-6 rounded-xl mb-8 text-[12px] text-[#555A72] leading-relaxed"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
          <strong className="text-[#6A6A7A]">{tr.footer_disclaimer_title}</strong>{" "}{tr.footer_disclaimer}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="text-[12px] text-[#555A72]">{tr.footer_copy}</div>
          <div className="flex gap-4 text-[12px] text-[#555A72]">
            <a href="#" className="hover:text-[#8A8FA8] transition-colors">{tr.footer_terms}</a>
            <a href="#" className="hover:text-[#8A8FA8] transition-colors">{tr.footer_privacy}</a>
            <a href="#" className="hover:text-[#8A8FA8] transition-colors">{tr.footer_risk}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
