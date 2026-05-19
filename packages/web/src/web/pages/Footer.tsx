import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { tr, lang } = useLang();
  const ru = lang === "ru";

  // Explicit link maps per column
  const groups = [
    {
      title: tr.footer_col1,
      items: [
        { label: ru ? "О нас" : "About Us", href: "/about" },
        { label: ru ? "Блог" : "Blog", href: "#" },
        { label: ru ? "Карьера" : "Careers", href: "#" },
        { label: ru ? "Пресса" : "Press", href: "#" },
      ],
    },
    {
      title: tr.footer_col2,
      items: [
        { label: ru ? "Челленджи" : "Challenges", href: "/#challenges" },
        { label: ru ? "Тарифы" : "Pricing", href: "/#challenges" },
        { label: ru ? "Возможности" : "Features", href: "/#features" },
        { label: ru ? "Программа масштабирования" : "Scaling Program", href: "#" },
      ],
    },
    {
      title: tr.footer_col3,
      items: [
        { label: ru ? "Центр помощи" : "Help Center", href: "/help" },
        { label: ru ? "Связаться с нами" : "Contact Us", href: "/contact" },
        { label: ru ? "Правила" : "Rules & Guidelines", href: "/rules" },
        { label: ru ? "Выплаты" : "Payouts", href: "/payouts" },
      ],
    },
    {
      title: tr.footer_col4,
      items: [
        { label: ru ? "Условия использования" : "Terms of Service", href: "/terms" },
        { label: ru ? "Политика конфиденциальности" : "Privacy Policy", href: "/privacy" },
        { label: ru ? "Политика возврата" : "Refund Policy", href: "/refund" },
        { label: ru ? "Раскрытие рисков" : "Risk Disclosure", href: "/risk" },
        { label: ru ? "AML-политика" : "AML Policy", href: "/aml" },
      ],
    },
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
            <p className="text-[13px] text-[#9098B8] leading-relaxed max-w-[220px]">{tr.footer_desc}</p>
            <div className="flex gap-3 mt-5">
              {["𝕏", "in", "📷", "💬"].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl flex items-center justify-center text-[13px] transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#A8AEBE" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.3)"; (e.currentTarget as HTMLElement).style.color = "#00D4AA"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "#8A8FA8"; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-[12px] font-semibold uppercase tracking-widest text-[#9098B8] mb-4">{g.title}</div>
              <ul className="space-y-2.5">
                {g.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-[13px] text-[#A8AEBE] hover:text-[#F0F2FF] transition-colors duration-150">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stripe-compliant disclaimer */}
        <div className="py-5 px-6 rounded-xl mb-4 text-[12px] text-[#9098B8] leading-relaxed"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
          <strong className="text-[#B0B4C8]">{tr.footer_disclaimer_title}</strong>{" "}{tr.footer_disclaimer}
        </div>

        {/* Entity info */}
        <div className="py-4 px-6 rounded-xl mb-6 text-[11px] leading-relaxed"
          style={{ background: "rgba(0,212,170,0.03)", border: "1px solid rgba(0,212,170,0.1)", color: "#5A6880" }}>
          <strong style={{ color: "#7A8499" }}>ProbCapital LLC</strong>
          {ru
            ? " — технологическая компания, зарегистрированная в штате Делавэр, США (Рег. №10541343). Юридический адрес: 8 The Green, Suite B, Dover, DE 19901. ProbCapital LLC является поставщиком технологий и НЕ является финансовым брокером, инвестиционным советником и не принимает депозиты для инвестирования."
            : " is a technology company registered in the State of Delaware, USA (File #10541343). Registered address: 8 The Green, Suite B, Dover, DE 19901. ProbCapital LLC is a technology provider and is NOT a financial broker, investment adviser, and does not accept deposits for investment."}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="text-[12px] text-[#9098B8]">{tr.footer_copy}</div>
          <div className="flex flex-wrap gap-4 text-[12px] text-[#9098B8]">
            <a href="/terms" className="hover:text-[#A8AEBE] transition-colors">{tr.footer_terms}</a>
            <a href="/privacy" className="hover:text-[#A8AEBE] transition-colors">{tr.footer_privacy}</a>
            <a href="/refund" className="hover:text-[#A8AEBE] transition-colors">{ru ? "Возврат" : "Refund Policy"}</a>
            <a href="/risk" className="hover:text-[#A8AEBE] transition-colors">{tr.footer_risk}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
