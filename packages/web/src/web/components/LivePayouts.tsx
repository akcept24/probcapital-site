import { useLang } from "../i18n/LangContext";

const principles = [
  { icon: "📅", en: { t: "Weekly Payouts", d: "Standard plan pays out on a weekly schedule" }, ru: { t: "Выплаты каждую неделю", d: "План Standard — выплаты по недельному графику" } },
  { icon: "⚡", en: { t: "On-Demand Payouts", d: "Aggressive plan — request a payout when you want it" }, ru: { t: "Выплаты по запросу", d: "План Aggressive — запрашивайте выплату, когда удобно" } },
  { icon: "💰", en: { t: "Up to 90% Split", d: "Performance split up to 90% on Aggressive, 80% on Standard" }, ru: { t: "Сплит до 90%", d: "До 90% прибыли на Aggressive, 80% — на Standard" } },
  { icon: "↩️", en: { t: "Fee Rebate", d: "Evaluation fee returned with your first approved payout" }, ru: { t: "Возврат комиссии", d: "Комиссия за оценку возвращается с первой одобренной выплатой" } },
  { icon: "🏦", en: { t: "Paid by ProbCapital LLC", d: "Payouts are made by the company from its own operating funds" }, ru: { t: "Платит ProbCapital LLC", d: "Выплаты производит компания из собственных операционных средств" } },
  { icon: "🪪", en: { t: "KYC-Verified", d: "Identity verification before the first payout — stated in the Terms" }, ru: { t: "Верификация KYC", d: "Подтверждение личности перед первой выплатой — прописано в условиях" } },
  { icon: "📜", en: { t: "Rules in Writing", d: "Drawdown and daily loss limits are published before you pay" }, ru: { t: "Правила — письменно", d: "Лимиты просадки и дневного убытка опубликованы до оплаты" } },
  { icon: "🔍", en: { t: "No Hidden Deductions", d: "The split in the plan is the split applied to your payout" }, ru: { t: "Без скрытых вычетов", d: "Сплит из вашего плана — это сплит вашей выплаты" } },
];

const labels = {
  en: {
    badge: "Payouts",
    h2_1: "Payout Terms.",
    h2_2: "In Writing.",
    sub: "No trader screenshots and no invented totals. Just the payout terms of the program — published here and in the Terms before you pay a cent.",
    stat1: "90%", label1: "Max Performance Split",
    stat2: "$400K", label2: "Max Simulated Capital",
    stat3: "24h", label3: "Payout Processing",
    stat4: "15%", label4: "Max Affiliate Commission",
  },
  ru: {
    badge: "Выплаты",
    h2_1: "Условия выплат.",
    h2_2: "Письменно.",
    sub: "Никаких скриншотов трейдеров и выдуманных итогов. Только условия выплат программы — опубликованы здесь и в условиях до того, как вы заплатите хоть цент.",
    stat1: "90%", label1: "Максимальный сплит прибыли",
    stat2: "$400K", label2: "Макс. симулированный капитал",
    stat3: "24ч", label3: "Обработка выплат",
    stat4: "15%", label4: "Макс. партнёрская комиссия",
  },
};

export default function LivePayouts() {
  const { lang } = useLang();
  const l = labels[lang];
  const doubled = [...principles, ...principles];

  const renderCard = (p: (typeof principles)[number], i: number) => (
    <div key={i} className="shrink-0 w-[280px] h-[140px] rounded-2xl p-5 relative group"
      style={{ background: "linear-gradient(135deg, #1A1D27 0%, #15181F 100%)", border: "1px solid rgba(0,212,170,0.15)" }}>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(135deg, rgba(0,212,170,0.15) 0%, rgba(0,212,170,0.05) 100%)", filter: "blur(10px)" }} />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[14px]"
            style={{ background: "linear-gradient(135deg, #00D4AA 0%, #00FFCC 100%)" }}>
            {p.icon}
          </div>
          <span className="text-[13px] font-semibold text-[#F0F2FF]">{p[lang].t}</span>
        </div>
        <p className="text-[12px] text-[#8A8FA8] leading-relaxed">{p[lang].d}</p>
      </div>
    </div>
  );

  return (
    <section className="py-12 px-6 overflow-hidden">
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
          <p className="text-[#8A8FA8] max-w-[520px] mx-auto text-[16px] leading-relaxed">{l.sub}</p>
        </div>

        {/* Big stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { v: l.stat1, label: l.label1 },
            { v: l.stat2, label: l.label2 },
            { v: l.stat3, label: l.label3 },
            { v: l.stat4, label: l.label4 },
          ].map((s, i) => (
            <div key={i} className="text-center py-6 rounded-2xl"
              style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="font-black gold-text mb-1" style={{ fontSize: "clamp(26px, 4vw, 40px)", letterSpacing: "-0.02em" }}>
                {s.v}
              </div>
              <div className="text-[12px] text-[#8A8FA8] uppercase tracking-wider font-medium px-2">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scrolling principle cards — row 1 */}
        <div className="relative mb-4">
          <div className="ticker-inner gap-4" style={{ animationDuration: "40s" }}>
            {doubled.map((p, i) => renderCard(p, i))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0F1117, transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0F1117, transparent)" }} />
        </div>

        {/* Row 2 — reverse direction */}
        <div className="relative">
          <div className="ticker-inner gap-4" style={{ animationDuration: "45s", animationDirection: "reverse" }}>
            {[...doubled].reverse().map((p, i) => renderCard(p, i))}
          </div>
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0F1117, transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-24 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0F1117, transparent)" }} />
        </div>
      </div>
    </section>
  );
}
