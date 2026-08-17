import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

/* ─── Types ─── */
interface PlanRow {
  size: string;
  standard: string;
  aggressive: string;
}

const PLANS: PlanRow[] = [
  { size: "$10,000",  standard: "$79",    aggressive: "$59"    },
  { size: "$25,000",  standard: "$149",   aggressive: "$109"   },
  { size: "$50,000",  standard: "$249",   aggressive: "$189"   },
  { size: "$100,000", standard: "$449",   aggressive: "$349"   },
  { size: "$200,000", standard: "$799",   aggressive: "$599"   },
  { size: "$400,000", standard: "$1,299", aggressive: "$999"   },
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
  const { lang } = useLang();
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
              ? "Оплатите разовый оценочный взнос и получите доступ к симулированному торговому счёту. Взнос полностью засчитывается в счёт первой выплаты при её получении."
              : "Pay a one-time evaluation fee and get access to a simulated trading account. The fee is fully credited back on your first payout."}
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
              {ru ? "5% цель / 4% просадка" : "5% target / 4% drawdown"}
            </div>
          </div>
          <div style={{ color: "#00D4AA", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", textAlign: "center" as const }}>
            Aggressive
            <div style={{ fontSize: "10px", color: "#4A8268", fontWeight: 500, marginTop: "2px", letterSpacing: "0.04em" }}>
              {ru ? "10% цель / 8% просадка" : "10% target / 8% drawdown"}
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
                  {ru ? "разовый взнос" : "one-time fee"}
                </div>
              </div>
            </div>
          ))}
        </div>

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

        {/* ── What's included ── */}
        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, color: "#E0E8FF", marginBottom: "24px", letterSpacing: "-0.01em" }}>
            {ru ? "Что включено" : "What's included"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {(ru ? [
              ["📊", "Симулированный счёт", "Реальные рыночные данные в реальном времени"],
              ["💸", "Выплата до 90%", "При достижении целевых показателей"],
              ["🔄", "Неограниченные попытки", "В рамках срока оценки"],
              ["📞", "Поддержка", "Ответ в течение 2 рабочих дней"],
              ["🛡️", "Без скрытых комиссий", "Один взнос, больше ничего"],
              ["📋", "Все инструменты", "Forex, индексы, металлы, крипто"],
            ] : [
              ["📊", "Simulated Account", "Live market data in real-time"],
              ["💸", "Up to 90% Payout", "Upon hitting profit targets"],
              ["🔄", "Unlimited Retries", "Within evaluation period"],
              ["📞", "Support", "Response within 2 business days"],
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
              ? "Платежи обрабатываются через Stripe и иных платёжных провайдеров. Полные условия возврата изложены в "
              : "Payments are processed via Stripe and other payment processors. Full refund terms are set out in the "}
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
        </div>

      </div>
      <Footer />
    </div>
  );
}
