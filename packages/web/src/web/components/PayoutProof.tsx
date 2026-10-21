import { useLang } from "../i18n/LangContext";
import { FREE_TRIAL_URL } from "../lib/links";

const labels = {
  en: {
    badge: "How Payouts Work",
    h2_1: "From Profit",
    h2_2: "to Payout.",
    sub: "Four steps — every one of them visible in your dashboard, and every rule published before you start.",
    steps: [
      { n: "01", t: "Pass the Evaluation", d: "Reach the profit target inside the drawdown rules — 10% target, 10% max drawdown, 5% daily loss on Standard." },
      { n: "02", t: "Request in the Dashboard", d: "One request in your account: the amount and a payment method registered in your name." },
      { n: "03", t: "Compliance Check", d: "Rule compliance and KYC identity verification — the same checks described in the Terms, no surprises after the fact." },
      { n: "04", t: "Get Paid", d: "Weekly on Standard, payout requests anytime on Aggressive. Your evaluation fee rebate lands with the first approved payout." },
    ],
    stripBig: "Up to 90%",
    stripText: "of your performance is yours — the split depends on your plan and is fixed before you start",
    cta: "Start Free Trial →",
  },
  ru: {
    badge: "Как работают выплаты",
    h2_1: "От прибыли",
    h2_2: "до выплаты.",
    sub: "Четыре шага — каждый виден в вашем кабинете, а каждое правило опубликовано до старта.",
    steps: [
      { n: "01", t: "Пройдите оценку", d: "Достигните цели по прибыли внутри правил просадки — цель 10%, макс. просадка 10%, дневной убыток 5% на Standard." },
      { n: "02", t: "Запросите в кабинете", d: "Один запрос в вашем аккаунте: сумма и способ оплаты, зарегистрированный на ваше имя." },
      { n: "03", t: "Проверка соответствия", d: "Соблюдение правил и верификация личности KYC — те же проверки, что описаны в условиях, без сюрпризов постфактум." },
      { n: "04", t: "Получите выплату", d: "Еженедельно на Standard, запрос выплаты в любое время на Aggressive. Возврат комиссии за оценку — с первой одобренной выплатой." },
    ],
    stripBig: "До 90%",
    stripText: "вашей прибыли — ваша доля; сплит зависит от плана и зафиксирован до старта",
    cta: "Начать бесплатный триал →",
  },
};

export default function PayoutProof() {
  const { lang } = useLang();
  const l = labels[lang];

  return (
    <section className="py-12 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[12px] font-semibold uppercase tracking-widest"
            style={{ background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)", color: "#00D4AA" }}>
            {l.badge}
          </div>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.02em" }}>
            {l.h2_1} <span className="gold-text">{l.h2_2}</span>
          </h2>
          <p className="text-[#8A8FA8] max-w-[480px] mx-auto text-[16px] leading-relaxed">{l.sub}</p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {l.steps.map((s) => (
            <div key={s.n} className="rounded-2xl p-6"
              style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="font-black gold-text mb-3" style={{ fontSize: "30px", letterSpacing: "-0.02em" }}>{s.n}</div>
              <div className="text-[15px] font-bold text-[#F0F2FF] mb-2">{s.t}</div>
              <p className="text-[13px] text-[#8A8FA8] leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        {/* Split strip */}
        <div className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12"
          style={{ background: "rgba(0,212,170,0.05)", border: "1px solid rgba(0,212,170,0.15)" }}>
          <div className="flex items-center gap-4">
            <div className="text-[40px] font-black gold-text" style={{ letterSpacing: "-0.03em" }}>{l.stripBig}</div>
            <div className="text-[15px] text-[#8A8FA8] max-w-[340px] leading-snug">{l.stripText}</div>
          </div>
          <a href={FREE_TRIAL_URL} target="_blank" rel="noopener noreferrer"
            className="gold-gradient text-[#0F1117] text-[15px] font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{ boxShadow: "0 4px 20px rgba(0,212,170,0.25)" }}>
            {l.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
