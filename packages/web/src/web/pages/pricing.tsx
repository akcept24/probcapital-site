import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FREE_TRIAL_URL, TRIAL_SIGNUP_URL } from "../lib/links";
import { useLang } from "../i18n/LangContext";
import { usePageHead } from "../hooks/usePageHead";

/* ─── Types ─── */
interface PlanRow {
  size: string;
  standard: string;
  aggressive: string;
}

const PLANS: PlanRow[] = [
  // forex-5k in the plan catalog is Standard-only — no 5K Aggressive SKU.
  { size: "$5,000",   standard: "$39",    aggressive: "—"      },
  { size: "$10,000",  standard: "$79",    aggressive: "$99"    },
  { size: "$25,000",  standard: "$149",   aggressive: "$189"   },
  { size: "$50,000",  standard: "$249",   aggressive: "$329"   },
  { size: "$100,000", standard: "$349",   aggressive: "$449"   },
  { size: "$200,000", standard: "$599",   aggressive: "$799"   },
  { size: "$400,000", standard: "$999",   aggressive: "$1,299" },
];

/* ─── Futures subscription plans (mirror the product's futures plan data) ─── */
interface FuturesPlan {
  size: string;
  price: string;
  step1: string;
  step2: string;
  trailing: string;
  popular?: boolean;
  oneStep?: boolean;
}

const FUTURES_PLANS: FuturesPlan[] = [
  { size: "$25,000",  price: "$67",  step1: "$1,500 (6%)", step2: "$750 (3%)",   trailing: "$1,250" },
  { size: "$50,000",  price: "$149", step1: "$3,000 (6%)", step2: "$1,500 (3%)", trailing: "$2,500", popular: true },
  { size: "$100,000", price: "$249", step1: "$6,000 (6%)", step2: "$3,000 (3%)", trailing: "$5,000" },
  { size: "$150,000", price: "$327", step1: "$9,000 (6%)", step2: "$4,500 (3%)", trailing: "$7,500" },
  // futures-50k-1step: TRUE 1-step — single 8% target, no Step 2,
  // otherwise the standard futures rules.
  { size: "$50,000", price: "$199", step1: "$4,000 (8%)", step2: "", trailing: "$2,500", oneStep: true },
];

/* ─── Primitives ─── */
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span style={{
    display: "inline-block", padding: "5px 16px", borderRadius: "100px",
    background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.2)",
    color: "#00D4AA", fontSize: "11px", fontWeight: 700,
    textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: "20px",
  }}>
    {children}
  </span>
);

const Chip = ({ label, accent }: { label: string; accent?: boolean }) => (
  <span style={{
    display: "inline-block", padding: "3px 10px", borderRadius: "6px",
    background: accent ? "rgba(0,212,170,0.12)" : "rgba(255,255,255,0.05)",
    border: `1px solid ${accent ? "rgba(0,212,170,0.25)" : "rgba(255,255,255,0.08)"}`,
    color: accent ? "#00D4AA" : "#8A92A8", fontSize: "11px", fontWeight: 700,
    letterSpacing: "0.06em", textTransform: "uppercase" as const,
  }}>
    {label}
  </span>
);

const InfoNote = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: "rgba(0,212,170,0.04)", border: "1px solid rgba(0,212,170,0.14)",
    borderRadius: "12px", padding: "16px 20px",
    color: "#7A8298", fontSize: "13px", lineHeight: 1.85,
  }}>
    {children}
  </div>
);

/* ─── Page ─── */
export default function PricingPage() {
  const { lang, tr } = useLang();
  usePageHead({
    title: lang === "ru" ? "Тарифы ProbCapital — челленджи Standard и Aggressive, фьючерсная подписка" : "ProbCapital Pricing — Challenge Fees & Futures Subscription Plans",
    description: lang === "ru" ? "Цены ProbCapital: челленджи Standard и Aggressive (счета $5,000–$400,000, разовый взнос) и фьючерсные планы по подписке (счета $25,000–$150,000, помесячно)." : "ProbCapital pricing: Standard and Aggressive challenges ($5K–$400K accounts, one-time fee) and Futures subscription plans ($25K–$150K accounts, monthly).",
    path: "/pricing",
    lang,
  });
  const ru = lang === "ru";

  return (
    <div style={{ background: "#04080F", minHeight: "100vh", color: "#F0F4FF" }}>
      <Navbar />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "130px 24px 96px" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: "56px", textAlign: "center" }}>
          <Badge>{ru ? "Тарифные планы" : "Pricing"}</Badge>
          <h1 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "16px", lineHeight: 1.1 }}>
            {ru ? "Один взнос. Без скрытых сборов." : "One fee. No hidden charges."}
          </h1>
          <p style={{ color: "#606880", fontSize: "15px", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
            {ru
              ? "Оплатите разовый оценочный взнос и получите доступ к симулированному торговому счёту. Взнос засчитывается в счёт первой выплаты при её получении."
              : "Pay a one-time evaluation fee and get access to a simulated trading account. The fee is credited back on your first payout."}
          </p>
          <div style={{ marginTop: "16px" }}>
            <Chip label={ru ? "Симулированный счёт" : "Simulated Account"} />
            {" "}
            <Chip label={ru ? "Взнос возвращается" : "Fee Rebate on Payout"} accent />
          </div>
        </div>

        {/* ── Simulated account disclosure ── */}
        <div style={{
          background: "rgba(255,200,50,0.04)", border: "1px solid rgba(255,200,50,0.15)",
          borderRadius: "14px", padding: "18px 24px", marginBottom: "36px",
          display: "flex", gap: "14px", alignItems: "flex-start",
        }}>
          <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "2px" }}>⚠️</span>
          <p style={{ color: "#A09060", fontSize: "13px", lineHeight: 1.85, margin: 0 }}>
            {ru
              ? "Все счета ProbCapital являются симулированными торговыми счётами, работающими в условиях рыночных данных реального времени. Никакой реальный капитал не размещается и не подвергается риску ни клиентами, ни Компанией. Оценочный взнос является платой за участие в программе оценки навыков трейдера и не представляет собой инвестиции в финансовые инструменты."
              : "All ProbCapital accounts are simulated trading accounts operating under live market data conditions. No real capital is deployed or put at risk by clients or the Company. The evaluation fee is a program participation fee and does not constitute an investment in financial instruments."}
          </p>
        </div>

        {/* ── Plan labels ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: "0", marginBottom: "0",
          padding: "0 0 12px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ color: "#4A5268", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", paddingLeft: "24px" }}>
            {ru ? "Размер счёта" : "Account Size"}
          </div>
          <div style={{ color: "#8A92A8", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", textAlign: "center" as const }}>
            Standard
            <div style={{ fontSize: "10px", color: "#4A5268", fontWeight: 500, marginTop: "2px", letterSpacing: "0.04em" }}>
              {ru ? "10% + 5% цели / 10% просадка" : "10% + 5% targets / 10% drawdown"}
            </div>
          </div>
          <div style={{ color: "#00D4AA", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", textAlign: "center" as const }}>
            Aggressive
            <div style={{ fontSize: "10px", color: "#4A8268", fontWeight: 500, marginTop: "2px", letterSpacing: "0.04em" }}>
              {ru ? "10% + 5% цели / 12% просадка" : "10% + 5% targets / 12% drawdown"}
            </div>
          </div>
        </div>

        {/* ── Pricing table ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {PLANS.map((row, i) => (
            <div
              key={row.size}
              style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                alignItems: "center",
                padding: "20px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.012)",
              }}
            >
              {/* Account size */}
              <div style={{ paddingLeft: "24px" }}>
                <span style={{ fontSize: "17px", fontWeight: 800, color: "#E0E8FF", letterSpacing: "-0.01em" }}>
                  {row.size}
                </span>
              </div>

              {/* Standard */}
              <div style={{ textAlign: "center" as const }}>
                <span style={{ fontSize: "22px", fontWeight: 800, color: "#C8D0E8" }}>
                  {row.standard}
                </span>
                <div style={{ fontSize: "11px", color: "#4A5268", marginTop: "2px" }}>
                  {ru ? "разовый взнос" : "one-time fee"}
                </div>
              </div>

              {/* Aggressive */}
              <div style={{ textAlign: "center" as const }}>
                <span style={{ fontSize: "22px", fontWeight: 800, color: "#00D4AA" }}>
                  {row.aggressive}
                </span>
                <div style={{ fontSize: "11px", color: "#3A6858", marginTop: "2px" }}>
                  {row.aggressive === "—" ? (ru ? "только Standard" : "Standard only") : (ru ? "разовый взнос" : "one-time fee")}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ color: "#555A72", fontSize: "13px", textAlign: "center" as const, marginTop: "16px" }}>
          {tr.risk_eod_note}
        </p>
        {/* ── Rebate note ── */}
        <div style={{
          marginTop: "36px",
          background: "linear-gradient(135deg, rgba(0,212,170,0.07) 0%, rgba(0,140,255,0.03) 100%)",
          border: "1px solid rgba(0,212,170,0.2)", borderRadius: "16px",
          padding: "24px 28px",
        }}>
          <div style={{ fontSize: "10px", color: "#00D4AA", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" as const, marginBottom: "10px" }}>
            💰&nbsp;&nbsp;{ru ? "Условие возврата взноса" : "Fee Rebate Condition"}
          </div>
          <p style={{ color: "#C0C8E0", fontSize: "14px", lineHeight: 1.85, margin: 0 }}>
            {ru
              ? "Полная сумма оценочного взноса засчитывается в счёт выплаты при первом успешном получении прибыли. Это означает, что при первой выплате вы получите сумму своей торговой прибыли плюс сумму, эквивалентную уплаченному взносу. Условием является соблюдение всех правил программы и прохождение верификации KYC."
              : "The full evaluation fee is credited back as part of your first successful payout. This means your first payout includes your earned profit split plus an amount equal to the fee you paid. Conditions: all program rules must be met and KYC verification must be completed."}
          </p>
        </div>

        {/* ── Spreads ── */}
        <div style={{ marginTop: "72px" }}>
          <div style={{ marginBottom: "32px", textAlign: "center" }}>
            <Badge>{ru ? "Торговые условия" : "Trading Conditions"}</Badge>
            <h2 style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "12px", lineHeight: 1.15 }}>
              {ru ? "Типичные спреды" : "Typical Spreads"}
            </h2>
            <p style={{ color: "#606880", fontSize: "15px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
              {ru
                ? "Спред уже включён в котировку: покупка исполняется по ask, продажа — по bid. Отдельной комиссии за сделку нет."
                : "The spread is built into the quote: buys execute at the ask, sells at the bid. There is no separate per-trade commission."}
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            padding: "0 0 12px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            <div style={{ color: "#4A5268", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", paddingLeft: "24px" }}>
              {ru ? "Инструмент" : "Instrument"}
            </div>
            <div style={{ color: "#4A5268", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", textAlign: "center" as const }}>
              {ru ? "Типичный спред" : "Typical Spread"}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { symbol: "EUR/USD", spread: ru ? "1.0 пипса" : "1.0 pip" },
              { symbol: "GBP/USD", spread: ru ? "1.2 пипса" : "1.2 pips" },
              { symbol: "USD/JPY", spread: ru ? "1.0 пипса" : "1.0 pip" },
              { symbol: "EUR/GBP", spread: ru ? "1.2 пипса" : "1.2 pips" },
              { symbol: "AUD/USD", spread: ru ? "1.2 пипса" : "1.2 pips" },
              { symbol: "USD/CAD", spread: ru ? "1.5 пипса" : "1.5 pips" },
              { symbol: "XAU/USD (Gold)", spread: "$0.30" },
              { symbol: "BTC/USD", spread: "$30" },
            ].map((row, i) => (
              <div
                key={row.symbol}
                style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  alignItems: "center",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                  background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.012)",
                }}
              >
                <div style={{ paddingLeft: "24px" }}>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#E0E8FF", letterSpacing: "-0.01em" }}>
                    {row.symbol}
                  </span>
                </div>
                <div style={{ textAlign: "center" as const }}>
                  <span style={{ fontSize: "15px", fontWeight: 700, color: "#C8D0E8" }}>
                    {row.spread}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "20px" }}>
            <InfoNote>
              {ru
                ? "Типичные спреды в симулированной среде. Значения ориентировочные: фактический спред зависит от рыночной ликвидности и может расширяться на новостях и в часы низкой ликвидности. Исполнение всегда идёт по живой котировке на момент сделки."
                : "Typical spreads in the simulated environment. Values are indicative: the actual spread depends on market liquidity and may widen around news releases and low-liquidity hours. Execution always uses the live quote at the time of the trade."}
            </InfoNote>
          </div>
        </div>

        {/* ── Futures Subscription ── */}
        <div style={{ marginTop: "72px" }}>
          <div style={{ marginBottom: "40px", textAlign: "center" }}>
            <Badge>{tr.fut_badge}</Badge>
            <h2 style={{ fontSize: "clamp(30px,4.5vw,46px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "14px", lineHeight: 1.15 }}>
              {tr.fut_h2}
            </h2>
            <p style={{ color: "#606880", fontSize: "15px", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
              {tr.fut_sub}
            </p>
            <div style={{ marginTop: "16px" }}>
              <Chip label={tr.fut_chip_sim} />
              {" "}
              <Chip label={tr.fut_chip_monthly} accent />
              {" "}
              <Chip label={tr.fut_chip_cancel} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {FUTURES_PLANS.map((plan) => {
              const rows: { label: string; value: string; good: boolean }[] = [
                { label: tr.fut_step1, value: plan.step1, good: true },
                { label: tr.fut_step2, value: plan.oneStep ? tr.fut_step2_none : plan.step2, good: true },
                { label: tr.fut_dll, value: "3%", good: false },
                { label: tr.fut_trailing, value: plan.trailing, good: false },
                { label: tr.fut_mindays, value: tr.fut_mindays_value, good: false },
                { label: tr.fut_timelimit, value: tr.fut_timelimit_value, good: true },
                { label: tr.fut_split, value: tr.fut_split_value, good: true },
                { label: tr.fut_leverage, value: tr.fut_leverage_value, good: true },
              ];
              return (
                <div
                  key={`${plan.size}-${plan.price}`}
                  style={{
                    position: "relative",
                    background: "#1A1D27",
                    border: `1px solid ${plan.popular ? "rgba(0,212,170,0.40)" : "rgba(255,255,255,0.08)"}`,
                    boxShadow: plan.popular ? "0 0 50px rgba(0,212,170,0.12)" : "none",
                    borderRadius: "16px", padding: "32px",
                    display: "flex", flexDirection: "column",
                  }}
                >
                  {plan.popular && (
                    <div style={{
                      position: "absolute", top: "16px", right: "16px",
                      fontSize: "10px", fontWeight: 900, padding: "4px 10px", borderRadius: "100px",
                      textTransform: "uppercase" as const, letterSpacing: "0.12em",
                      background: "linear-gradient(135deg, #00D4AA, #00FFCC)", color: "#0F1117",
                    }}>
                      {tr.fut_popular}
                    </div>
                  )}
                  <div style={{ marginBottom: "24px" }}>
                    <div style={{ fontSize: "13px", color: "#8A8FA8", fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: "8px" }}>
                      {tr.fut_badge}
                    </div>
                    <div style={{ fontSize: "22px", fontWeight: 800, color: "#E0E8FF", letterSpacing: "-0.01em" }}>
                      {plan.size}{plan.oneStep ? ` · ${tr.fut_1step_suffix}` : ""}
                    </div>
                    <div style={{ fontSize: "12px", color: "#8A8FA8", marginBottom: "12px" }}>
                      {tr.fut_size_label}
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
                      <span style={{
                        fontSize: "52px", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1,
                        ...(plan.popular
                          ? { background: "linear-gradient(135deg, #00D4AA, #00FFCC)", WebkitBackgroundClip: "text" as const, WebkitTextFillColor: "transparent" }
                          : { color: "#F0F2FF" }),
                      }}>
                        {plan.price}
                      </span>
                      <span style={{ fontSize: "14px", color: "#555A72", marginBottom: "8px" }}>
                        {tr.fut_per_month}
                      </span>
                    </div>
                    <div style={{ fontSize: "12px", color: "#22C55E", fontWeight: 500, marginTop: "6px" }}>
                      ↩ {tr.fut_feat_rebate}
                    </div>
                  </div>
                  <div style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "12px", padding: "16px", marginBottom: "24px",
                    display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 12px",
                  }}>
                    {rows.map((row) => (
                      <div key={row.label}>
                        <div style={{ fontSize: "11px", color: "#555A72", textTransform: "uppercase" as const, letterSpacing: "0.05em", marginBottom: "4px" }}>
                          {row.label}
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: row.good ? "#00D4AA" : "#F0F2FF" }}>
                          {row.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <a
                    href={TRIAL_SIGNUP_URL}
                    style={{
                      marginTop: "auto",
                      display: "block", textAlign: "center" as const, padding: "14px 24px",
                      background: plan.popular
                        ? "linear-gradient(135deg, #00D4AA, #00FFCC)"
                        : "transparent",
                      border: plan.popular ? "none" : "1px solid rgba(0,212,170,0.3)",
                      borderRadius: "12px",
                      color: plan.popular ? "#0F1117" : "#00D4AA",
                      fontWeight: 700, fontSize: "15px", letterSpacing: "0.02em", textDecoration: "none",
                      boxShadow: plan.popular ? "0 4px 20px rgba(0,212,170,0.25)" : "none",
                    }}
                  >
                    {tr.fut_cta}
                  </a>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: "20px" }}>
            <InfoNote>{tr.fut_note}</InfoNote>
          </div>
          <div style={{ marginTop: "12px" }}>
            <InfoNote>{tr.fut_consistency}</InfoNote>
          </div>
          <div style={{ marginTop: "12px" }}>
            <InfoNote>{tr.fut_onestep_note}</InfoNote>
          </div>
          <p style={{ color: "#8A8FA8", fontSize: "13.5px", textAlign: "center" as const, marginTop: "16px", fontWeight: 600 }}>
            {tr.ts_pair}
          </p>
          <p style={{ color: "#555A72", fontSize: "13px", textAlign: "center" as const, marginTop: "8px" }}>
            {tr.ts_invoice} {tr.ts_reset_credit}
          </p>
          <p style={{ color: "#555A72", fontSize: "13px", textAlign: "center" as const, marginTop: "8px" }}>
            {tr.ts_most_fail}
          </p>
          <p style={{ color: "#555A72", fontSize: "13px", textAlign: "center" as const, marginTop: "8px" }}>
            {tr.risk_eod_note}
          </p>
        </div>

        {/* ── What's included ── */}
        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#E0E8FF", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            {ru ? "Что включено" : "What's included"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {(ru ? [
              ["📊", "Симулированный счёт", "Реальные рыночные данные в реальном времени"],
              ["💸", "Выплата до 90%", "При достижении целевых показателей"],
              ["🔄", "1 бесплатный рестарт", "На планах Aggressive, при первой неудачной попытке"],
              ["📞", "Поддержка 24/7", "Живой чат: ответ в течение пары минут"],
              ["🛡️", "Без скрытых комиссий", "Один взнос, больше ничего"],
              ["📋", "Все инструменты", "Forex, индексы, металлы, крипто"],
            ] : [
              ["📊", "Simulated Account", "Live market data in real-time"],
              ["💸", "Up to 90% Payout", "Upon hitting profit targets"],
              ["🔄", "1 Free Re-take", "On Aggressive plans, on first failed attempt"],
              ["📞", "24/7 Support", "Live chat: replies within minutes"],
              ["🛡️", "No Hidden Fees", "One fee, nothing else"],
              ["📋", "All Instruments", "Forex, indices, metals, crypto"],
            ]).map(([icon, title, desc]) => (
              <div key={title as string} style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "14px", padding: "20px 22px",
              }}>
                <div style={{ fontSize: "22px", marginBottom: "10px" }}>{icon}</div>
                <div style={{ fontSize: "14px", fontWeight: 700, color: "#D0D8F0", marginBottom: "4px" }}>{title}</div>
                <div style={{ fontSize: "12px", color: "#5A6278", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Legal notes ── */}
        <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <InfoNote>
            <strong style={{ color: "#9A9E98", fontWeight: 700 }}>
              {ru ? "Симулированный счёт: " : "Simulated Account: "}
            </strong>
            {ru
              ? "Все счета ProbCapital являются симулированными. Никакая реальная торговля, инвестиции или хранение активов не осуществляются. Результаты оценки не гарантируют и не отражают будущие результаты реальной торговли."
              : "All ProbCapital accounts are simulated. No real trading, investment, or custody of assets occurs. Evaluation results do not guarantee or reflect future real-market performance."}
          </InfoNote>
          <InfoNote>
            <strong style={{ color: "#9A9E98", fontWeight: 700 }}>
              {ru ? "Налоги и НДС: " : "Tax & VAT: "}
            </strong>
            {ru
              ? "Оценочные взносы могут облагаться НДС или иными местными налогами в зависимости от юрисдикции клиента. Отображаемые цены указаны без учёта применимых налогов. Клиент несёт ответственность за исполнение налоговых обязательств в своей юрисдикции."
              : "Evaluation fees may be subject to VAT or other local taxes depending on your jurisdiction. Prices shown exclude any applicable taxes. Clients are responsible for their own tax obligations in their jurisdiction."}
          </InfoNote>
          <InfoNote>
            <strong style={{ color: "#9A9E98", fontWeight: 700 }}>
              {ru ? "Платёж и возврат: " : "Payment & Refund: "}
            </strong>
            {ru
              ? "Платежи обрабатываются через наших платёжных провайдеров; оплата криптовалютой доступна уже сейчас. Полные условия возврата изложены в "
              : "Payments are processed via our payment providers; crypto payments are available now. Full refund terms are set out in the "}
            <a href="/refund" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>
              {ru ? "Политике возврата" : "Refund Policy"}
            </a>
            {ru ? "." : "."}
          </InfoNote>
          <InfoNote>
            <strong style={{ color: "#9A9E98", fontWeight: 700 }}>
              {ru ? "Юрисдикционные ограничения: " : "Jurisdictional Restrictions: "}
            </strong>
            {ru
              ? "Услуги недоступны в юрисдикциях, находящихся под санкциями США/ЕС/ООН. Клиент несёт ответственность за проверку соответствия местному законодательству. Подробнее — в разделе "
              : "Services are unavailable in jurisdictions subject to US/EU/UN sanctions. Clients are responsible for verifying local law compliance. See the "}
            <a href="/risk" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>
              {ru ? "Раскрытии рисков" : "Risk Disclosure"}
            </a>
            {ru ? "." : "."}
          </InfoNote>
        </div>

        {/* ── CTA ── */}
        <div style={{
          marginTop: "56px", textAlign: "center" as const,
          padding: "48px 32px",
          background: "linear-gradient(135deg, rgba(0,212,170,0.06) 0%, rgba(0,140,255,0.03) 100%)",
          border: "1px solid rgba(0,212,170,0.15)", borderRadius: "20px",
        }}>
          <h2 style={{ fontSize: "26px", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: "12px" }}>
            {ru ? "Готовы начать?" : "Ready to start?"}
          </h2>
          <p style={{ color: "#606880", fontSize: "14px", marginBottom: "28px" }}>
            {ru
              ? "Выберите размер счёта и пройдите оценку. Взнос засчитывается при первой выплате."
              : "Pick your account size and pass the evaluation. Your fee is credited on your first payout."}
          </p>
          <a
            href="/#challenges"
            style={{
              display: "inline-block", padding: "14px 36px",
              background: "linear-gradient(135deg, #00D4AA 0%, #00B894 100%)",
              borderRadius: "12px", color: "#04080F", fontWeight: 800,
              fontSize: "15px", letterSpacing: "0.02em", textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,212,170,0.3)",
            }}
          >
            {ru ? "Начать оценку" : "Start Evaluation"}
          </a>
          <div style={{ marginTop: "16px" }}>
            <a
              href={FREE_TRIAL_URL}
              style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}
            >
              {ru ? "или попробуйте бесплатный триал на 14 дней →" : "or try a free 14-day trial →"}
            </a>
            <div style={{ color: "#555A72", fontSize: "12.5px", marginTop: "10px", lineHeight: 1.6 }}>
              {tr.ts_trial}
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
