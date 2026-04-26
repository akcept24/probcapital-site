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

        {/* Certificate images grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {["/cert-1.png", "/cert-2.png", "/cert-3.png"].map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{ border: "1px solid rgba(0,212,170,0.2)", boxShadow: "0 0 30px rgba(0,212,170,0.06)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 40px rgba(0,212,170,0.15)"; el.style.borderColor = "rgba(0,212,170,0.4)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "none"; el.style.boxShadow = "0 0 30px rgba(0,212,170,0.06)"; el.style.borderColor = "rgba(0,212,170,0.2)"; }}
            >
              <img src={src} alt={`Payout Certificate ${i + 1}`} style={{ display: "block", width: "100%", height: "auto" }} />
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
