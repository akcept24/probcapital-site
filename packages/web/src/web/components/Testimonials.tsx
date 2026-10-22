import { useLang } from "../i18n/LangContext";

const labels = {
  en: {
    badge: "No Fairy Tales",
    h2_1: "Don't Trust",
    h2_2: "Screenshots.",
    sub: "Any firm can post payout screenshots and trader stories. We would rather you tested the product itself — the trial is free.",
    cards: [
      { icon: "🎁", t: "Free $25K Trial First", d: "A full-size $25,000 evaluation account for 14 days. No card, no payment, no catch — judge the platform before spending a cent. Free 25K trial runs on FX evaluation rules; paid futures plans use different targets and rules." },
      { icon: "📜", t: "Rules Before Money", d: "Drawdown, daily loss, targets, payout schedule — published in full on this site before checkout, not after a dispute." },
      { icon: "🖥️", t: "Our Own Terminal", d: "ProbTrader is built in-house for this program. The tool you are judged on is the tool we control." },
      { icon: "1️⃣", t: "One Fee. Once.", d: "No subscriptions and no monthly platform fees. The evaluation fee is rebated with your first approved payout." },
      { icon: "↩️", t: "One Free Re-Take", d: "On Aggressive plans, fail an evaluation and your first retry is on us, under the published program terms." },
      { icon: "🔍", t: "Simulated — and We Say So", d: "Accounts are simulated trading environments, disclosed everywhere on this site. Payouts are made by ProbCapital LLC from its own funds." },
    ],
    note: "Individual results vary significantly. Past performance is not indicative of future results. All trading environments are simulations.",
  },
  ru: {
    badge: "Без сказок",
    h2_1: "Не верьте",
    h2_2: "скриншотам.",
    sub: "Скриншоты выплат и истории трейдеров может выложить любая фирма. Мы предпочитаем, чтобы вы проверили сам продукт, — триал бесплатный.",
    cards: [
      { icon: "🎁", t: "Сначала бесплатный триал $25K", d: "Полноразмерный оценочный счёт на $25 000 на 14 дней. Без карты и оплаты — оцените платформу до того, как потратить цент. Бесплатный триал 25K работает по правилам FX-оценки; платные фьючерсные планы используют другие цели и правила." },
      { icon: "📜", t: "Правила — до денег", d: "Просадка, дневной убыток, цели, график выплат — опубликованы на этом сайте полностью до оплаты, а не после спора." },
      { icon: "🖥️", t: "Собственный терминал", d: "ProbTrader разработан внутри компании под эту программу. Инструмент оценки — под нашим контролем." },
      { icon: "1️⃣", t: "Одна комиссия. Один раз.", d: "Никаких подписок и ежемесячных плат за платформу. Комиссия за оценку возвращается с первой одобренной выплатой." },
      { icon: "↩️", t: "Одна бесплатная повторная попытка", d: "На планах Aggressive: не прошли оценку — первая повторная попытка за наш счёт, по опубликованным условиям программы." },
      { icon: "🔍", t: "Симуляция — и мы это говорим", d: "Счета являются симулированными торговыми средами, и это указано везде на сайте. Выплаты производит ProbCapital LLC из собственных средств." },
    ],
    note: "Индивидуальные результаты могут существенно отличаться. Прошлые результаты не свидетельствуют о будущих. Все торговые среды являются симуляциями.",
  },
};

export default function Testimonials() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section className="py-12 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {l.badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {l.h2_1}{" "}<span className="gold-text">{l.h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[480px] mx-auto text-[16px]">{l.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {l.cards.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl transition-all duration-300"
              style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,170,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}>
              <div className="text-[22px] mb-4">{c.icon}</div>
              <div className="text-[15px] font-bold text-[#F0F2FF] mb-2">{c.t}</div>
              <p className="text-[14px] text-[#8A8FA8] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-[#454A5E] mt-8 max-w-[700px] mx-auto leading-relaxed">
          {l.note}
        </p>
      </div>
    </section>
  );
}
