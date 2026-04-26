import { useLang } from "../i18n/LangContext";

const traders = [
  { name: "Alex M.", country: "🇺🇸", payout: "$12,400", style: "Day Trader", views: "37K" },
  { name: "Sarah K.", country: "🇬🇧", payout: "$8,750", style: "Swing Trader", views: "119K" },
  { name: "Daniel R.", country: "🇩🇪", payout: "$31,200", style: "Scalper", views: "350K" },
  { name: "Mia C.", country: "🇯🇵", payout: "$5,600", style: "Day Trader", views: "62K" },
  { name: "James O.", country: "🇨🇦", payout: "$19,800", style: "Swing Trader", views: "81K" },
  { name: "Priya S.", country: "🇦🇺", payout: "$7,200", style: "Scalper", views: "46K" },
  { name: "Marco V.", country: "🇧🇷", payout: "$44,500", style: "Day Trader", views: "193K" },
  { name: "Anna B.", country: "🇳🇱", payout: "$22,100", style: "Scalper", views: "83K" },
];

const styleLabels: Record<string, { en: string; ru: string }> = {
  "Day Trader": { en: "Day Trader", ru: "Дневной трейдер" },
  "Swing Trader": { en: "Swing Trader", ru: "Свинг трейдер" },
  "Scalper": { en: "Scalper", ru: "Скальпер" },
};

const labels = {
  en: {
    badge: "Community",
    h2_1: "Trusted by",
    h2_2: "Millions of Traders",
    sub: "Real people. Real payouts. Join the fastest-growing prop trading community.",
    style: "Trading Style",
    views: "views",
    stat1: "3.5M+", label1: "Traders Worldwide",
    stat2: "$2.4M+", label2: "Total Paid Out",
    stat3: "140+", label3: "Countries Served",
    stat4: "24h", label4: "Avg Payout Time",
  },
  ru: {
    badge: "Сообщество",
    h2_1: "Нам доверяют",
    h2_2: "миллионы трейдеров",
    sub: "Реальные люди. Реальные выплаты. Присоединяйтесь к самому быстрорастущему проп-трейдинговому сообществу.",
    style: "Стиль торговли",
    views: "просмотров",
    stat1: "3.5M+", label1: "Трейдеров по всему миру",
    stat2: "$2.4M+", label2: "Всего выплачено",
    stat3: "140+", label3: "Стран",
    stat4: "24h", label4: "Среднее время выплаты",
  },
};

export default function LivePayouts() {
  const { lang } = useLang();
  const l = labels[lang];
  const doubled = [...traders, ...traders];

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

        {/* Scrolling trader cards — row 1 */}
        <div className="relative mb-4">
          <div className="ticker-inner gap-4" style={{ animationDuration: "35s" }}>
            {doubled.map((t, i) => (
              <div key={i} className="shrink-0 w-[220px] rounded-2xl p-5"
                style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[22px]">{t.country}</span>
                  <span className="text-[11px] text-[#555A72] font-medium">▶ {t.views} {l.views}</span>
                </div>
                <div className="text-[22px] font-black gold-text mb-1">{t.payout}</div>
                <div className="text-[13px] font-semibold text-[#F0F2FF] mb-1">{t.name}</div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-[#555A72] uppercase tracking-wider">{l.style}:</span>
                  <span className="text-[11px] text-[#8A8FA8] font-medium">{styleLabels[t.style][lang]}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0F1117, transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-16 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0F1117, transparent)" }} />
        </div>

        {/* Row 2 — reverse direction */}
        <div className="relative">
          <div className="ticker-inner gap-4" style={{ animationDuration: "40s", animationDirection: "reverse" }}>
            {[...doubled].reverse().map((t, i) => (
              <div key={i} className="shrink-0 w-[220px] rounded-2xl p-5"
                style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[22px]">{t.country}</span>
                  <span className="text-[11px] text-[#555A72] font-medium">▶ {t.views} {l.views}</span>
                </div>
                <div className="text-[22px] font-black gold-text mb-1">{t.payout}</div>
                <div className="text-[13px] font-semibold text-[#F0F2FF] mb-1">{t.name}</div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-[#555A72] uppercase tracking-wider">{l.style}:</span>
                  <span className="text-[11px] text-[#8A8FA8] font-medium">{styleLabels[t.style][lang]}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 pointer-events-none"
            style={{ background: "linear-gradient(to right, #0F1117, transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-16 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0F1117, transparent)" }} />
        </div>
      </div>
    </section>
  );
}
