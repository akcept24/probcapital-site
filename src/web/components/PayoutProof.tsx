import { useLang } from "../i18n/LangContext";

const certificates = [
  { id: "PC-2024-0841", trader: "A***x M.", amount: "$12,400", date: "Mar 14, 2024", method: "USDT", account: "$100K", phase: "Aggressive" },
  { id: "PC-2024-1203", trader: "S***h K.", amount: "$8,750",  date: "Apr 02, 2024", method: "PayPal", account: "$50K", phase: "Standard" },
  { id: "PC-2024-2187", trader: "D***l R.", amount: "$31,200", date: "May 18, 2024", method: "Bank Wire", account: "$200K", phase: "Aggressive" },
  { id: "PC-2024-3094", trader: "M***a C.", amount: "$5,600",  date: "Jun 07, 2024", method: "BTC", account: "$25K", phase: "Standard" },
  { id: "PC-2024-4451", trader: "J***s O.", amount: "$19,800", date: "Jul 23, 2024", method: "USDT", account: "$100K", phase: "Aggressive" },
  { id: "PC-2024-5812", trader: "P***a S.", amount: "$7,200",  date: "Aug 31, 2024", method: "PayPal", account: "$50K", phase: "Standard" },
];

const labels = {
  en: {
    badge: "Verified Payouts",
    h2_1: "Real Payouts.",
    h2_2: "Real Proof.",
    sub: "Every payout is verified and certified. No screenshots — cryptographically signed certificates.",
    cert: "Payout Certificate",
    verified: "Verified",
    trader: "Trader",
    amount_label: "Amount",
    date_label: "Date",
    method_label: "Via",
    account_label: "Account",
    total: "Total paid out to traders",
    cta: "Join Them →",
    id_label: "Certificate ID",
  },
  ru: {
    badge: "Подтверждённые выплаты",
    h2_1: "Реальные выплаты.",
    h2_2: "Реальные доказательства.",
    sub: "Каждая выплата верифицирована и сертифицирована. Не скриншоты — криптографически подписанные сертификаты.",
    cert: "Сертификат выплаты",
    verified: "Подтверждено",
    trader: "Трейдер",
    amount_label: "Сумма",
    date_label: "Дата",
    method_label: "Способ",
    account_label: "Счёт",
    total: "Всего выплачено трейдерам",
    cta: "Присоединиться →",
    id_label: "ID сертификата",
  },
};

export default function PayoutProof() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}
          >
            {l.badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {l.h2_1} <span className="gold-text">{l.h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[480px] mx-auto text-[16px] leading-relaxed">{l.sub}</p>
        </div>

        {/* Certificate grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl overflow-hidden transition-all duration-300 group"
              style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(0,212,170,0.25)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 8px 32px rgba(0,212,170,0.08)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.transform = "none"; el.style.boxShadow = "none"; }}
            >
              {/* Card header bar */}
              <div className="px-5 py-3 flex items-center justify-between"
                style={{ background: "rgba(0,212,170,0.05)", borderBottom: "1px solid rgba(0,212,170,0.1)" }}>
                <div className="flex items-center gap-2">
                  {/* Shield icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6l-9-4z" fill="rgba(0,212,170,0.2)" stroke="#00D4AA" strokeWidth="1.5"/>
                    <path d="M9 12l2 2 4-4" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[11px] font-bold text-[#00D4AA] uppercase tracking-wider">{l.cert}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold"
                  style={{ background: "rgba(0,212,170,0.1)", color: "#00D4AA", border: "1px solid rgba(0,212,170,0.2)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] pulse-gold inline-block" />
                  {l.verified}
                </div>
              </div>

              {/* Amount */}
              <div className="px-5 pt-5 pb-3">
                <div className="text-[36px] font-black gold-text leading-none mb-1">{cert.amount}</div>
                <div className="text-[12px] text-[#555A72]">{l.id_label}: <span className="text-[#8A8FA8] font-mono">{cert.id}</span></div>
              </div>

              {/* Details grid */}
              <div className="px-5 pb-5 grid grid-cols-2 gap-2">
                {[
                  { label: l.trader, value: cert.trader },
                  { label: l.date_label, value: cert.date },
                  { label: l.method_label, value: cert.method },
                  { label: l.account_label, value: cert.account },
                ].map(d => (
                  <div key={d.label} className="py-2 px-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="text-[10px] text-[#555A72] uppercase tracking-wider mb-0.5">{d.label}</div>
                    <div className="text-[13px] font-semibold text-[#F0F2FF]">{d.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Total payout CTA strip */}
        <div
          className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "rgba(0,212,170,0.05)", border: "1px solid rgba(0,212,170,0.15)" }}
        >
          <div className="flex items-center gap-4">
            <div className="text-[40px] font-black gold-text" style={{ letterSpacing: "-0.03em" }}>$2.4M+</div>
            <div className="text-[15px] text-[#8A8FA8] max-w-[280px] leading-snug">{l.total}</div>
          </div>
          <a
            href="https://app.probcapital.com" target="_blank" rel="noopener noreferrer"
            className="gold-gradient text-[#0F1117] text-[15px] font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ boxShadow: "0 4px 20px rgba(0,212,170,0.25)" }}
          >
            {l.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
