import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

const sectionsEn = [
  {
    title: "1. Overview",
    text: `This Refund Policy applies to all evaluation fees paid to ProbCapital ("Company") for participation in trader evaluation programs. Please read this policy carefully before completing your purchase. By submitting payment, you acknowledge and agree to the terms set out below.`,
  },
  {
    title: "2. Nature of the Purchase",
    text: `When you purchase a ProbCapital evaluation challenge, you are purchasing access to a simulated trading evaluation service — not a financial product, investment vehicle, or brokerage account. The fee grants you access to our evaluation platform, trading environment, and associated dashboard tools for the duration of your challenge attempt.`,
  },
  {
    title: "3. Standard Refund Policy",
    text: `Evaluation fees are non-refundable once access to the trading account has been granted. Access is considered granted at the moment your account credentials are delivered to your registered email address. This is because the service is fully delivered at the point of access provision, and the Company incurs immediate operational costs upon account activation.`,
  },
  {
    title: "4. Fee Refund Upon First Payout",
    text: `As part of our evaluation program terms, the full evaluation fee will be credited back to the Trader alongside their first approved profit payout from a funded account, provided: (a) the Trader has successfully passed all required evaluation phases; (b) the payout request meets the applicable minimum withdrawal threshold; (c) the funded account is in good standing with no outstanding rule violations. This fee credit is not a refund in the legal sense but a contractual performance-based rebate.`,
  },
  {
    title: "5. Exceptional Circumstances — Eligible Refunds",
    text: `A full refund of the evaluation fee may be issued in the following limited circumstances: (a) Technical failure: if the Company's platform experienced a verified technical fault that prevented you from accessing or using the evaluation account within 48 hours of purchase, and the issue was not resolved within a reasonable timeframe; (b) Duplicate payment: if a duplicate charge was processed due to a payment system error; (c) Statutory rights: where applicable consumer protection legislation in your jurisdiction grants a mandatory right of cancellation (typically 14 days from purchase for digital services where access has not been granted), and you have not yet accessed your account credentials. To request a refund under these circumstances, contact support@probcapital.com within 7 days of the triggering event with supporting evidence.`,
  },
  {
    title: "6. Non-Refundable Circumstances",
    text: `Refunds will not be issued in the following cases: (a) failure to meet the profit target or breach of risk rules during the evaluation; (b) voluntary withdrawal from the challenge after account access has been granted; (c) account termination due to violation of our Terms of Service, Trading Rules, or AML Policy; (d) change of mind after account access has been granted; (e) failure to trade within any applicable time limit; (f) market conditions, platform errors attributable to third-party providers (MT4/MT5), or internet connectivity issues on the Trader's side.`,
  },
  {
    title: "7. Chargebacks",
    text: `Initiating a chargeback or payment dispute with your card issuer or payment provider without first contacting ProbCapital support constitutes a breach of these Terms. In such cases, the Company reserves the right to permanently ban the associated account and report the matter to relevant fraud prevention services. If you have a legitimate dispute, please contact us at support@probcapital.com before escalating to your payment provider.`,
  },
  {
    title: "8. Refund Process",
    text: `Approved refunds will be processed to the original payment method used at the time of purchase within 5–10 business days of approval. ProbCapital does not charge any administrative fees for approved refunds. Refunds denominated in cryptocurrency will be returned at the exchange rate at the time of the original transaction.`,
  },
  {
    title: "9. Consumer Rights",
    text: `Nothing in this Refund Policy limits or excludes your statutory consumer rights under applicable law. If you are a consumer located in a jurisdiction that affords specific cancellation or refund rights for digital services, those rights apply to the extent they cannot be waived by contract.`,
  },
  {
    title: "10. Contact",
    text: `For all refund requests and billing inquiries, please contact: support@probcapital.com\n\nPlease include your registered email address, order/transaction ID, and a description of your request. We aim to respond to all refund inquiries within 2 business days.`,
  },
];

const sectionsRu = [
  {
    title: "1. Общие положения",
    text: `Настоящая Политика возврата средств применяется ко всем оценочным взносам, уплаченным в ProbCapital («Компания») за участие в программах оценки трейдеров. Пожалуйста, внимательно ознакомьтесь с настоящей политикой до совершения оплаты. Осуществляя платёж, вы подтверждаете своё согласие с изложенными ниже условиями.`,
  },
  {
    title: "2. Характер приобретаемой услуги",
    text: `Приобретая оценочный челлендж ProbCapital, вы оплачиваете доступ к симулированному сервису оценки трейдеров — не к финансовому продукту, инвестиционному инструменту или брокерскому счёту. Взнос предоставляет доступ к нашей платформе оценки, торговой среде и инструментам дашборда на время вашей попытки прохождения челленджа.`,
  },
  {
    title: "3. Стандартные условия возврата",
    text: `Оценочные взносы не подлежат возврату после предоставления доступа к торговому счёту. Доступ считается предоставленным с момента направления учётных данных на ваш зарегистрированный адрес электронной почты. Это обусловлено тем, что услуга считается полностью оказанной в момент предоставления доступа, а Компания несёт немедленные операционные расходы при активации счёта.`,
  },
  {
    title: "4. Возврат взноса при первой выплате",
    text: `В соответствии с условиями нашей программы оценки полный оценочный взнос будет зачислен обратно Трейдеру вместе с его первой одобренной выплатой прибыли с финансируемого счёта при условии: (а) успешного прохождения Трейдером всех необходимых фаз оценки; (б) соответствия запроса на выплату применимому минимальному порогу вывода; (в) отсутствия нарушений правил по финансируемому счёту. Данный зачёт взноса не является возвратом в юридическом смысле, а представляет собой договорную скидку, основанную на результатах торговли.`,
  },
  {
    title: "5. Исключительные обстоятельства — право на возврат",
    text: `Полный возврат оценочного взноса может быть произведён в следующих ограниченных случаях: (а) Технический сбой: если платформа Компании претерпела подтверждённый технический сбой, лишивший вас возможности получить доступ к оценочному счёту в течение 48 часов с момента оплаты, и проблема не была устранена в разумные сроки; (б) Задвоенный платёж: при двойном списании вследствие ошибки платёжной системы; (в) Законодательные права: если применимое законодательство о защите прав потребителей вашей юрисдикции предоставляет обязательное право на отказ от договора (как правило, 14 дней с момента покупки цифровых услуг при условии, что доступ ещё не был предоставлен). Для запроса возврата в указанных случаях обратитесь на support@probcapital.com в течение 7 дней с приложением подтверждающих документов.`,
  },
  {
    title: "6. Случаи, когда возврат не производится",
    text: `Возврат средств не производится в следующих случаях: (а) недостижение цели по прибыли или нарушение правил управления рисками в ходе оценки; (б) добровольный отказ от челленджа после предоставления доступа к счёту; (в) закрытие счёта вследствие нарушения Условий использования, Правил торговли или Политики ПОД/ФТ; (г) изменение решения после предоставления доступа к счёту; (д) несовершение торговых операций в установленные сроки; (е) рыночные условия, ошибки платформы сторонних поставщиков (MT4/MT5) или проблемы с интернет-соединением на стороне Трейдера.`,
  },
  {
    title: "7. Чарджбэки",
    text: `Инициирование чарджбэка или платёжного спора у эмитента карты или платёжного провайдера без предварительного обращения в службу поддержки ProbCapital является нарушением настоящих Условий. В таких случаях Компания оставляет за собой право навсегда заблокировать связанный аккаунт и передать информацию в соответствующие службы предотвращения мошенничества. При наличии обоснованного спора, пожалуйста, сначала свяжитесь с нами по адресу support@probcapital.com.`,
  },
  {
    title: "8. Порядок возврата",
    text: `Одобренные возвраты обрабатываются на исходное платёжное средство, использованное при покупке, в течение 5–10 рабочих дней с момента одобрения. ProbCapital не взимает административных сборов за одобренные возвраты. Возвраты в криптовалюте производятся по курсу на дату исходной транзакции.`,
  },
  {
    title: "9. Права потребителей",
    text: `Ничто в настоящей Политике не ограничивает и не исключает ваших законных прав потребителя в соответствии с применимым законодательством. Если вы являетесь потребителем в юрисдикции, предоставляющей особые права на отмену или возврат средств за цифровые услуги, эти права применяются в той мере, в которой они не могут быть ограничены договором.`,
  },
  {
    title: "10. Контакты",
    text: `По всем вопросам возврата средств и биллинга обращайтесь: support@probcapital.com\n\nУкажите ваш зарегистрированный адрес электронной почты, идентификатор заказа/транзакции и описание запроса. Мы стремимся отвечать на все запросы о возврате в течение 2 рабочих дней.`,
  },
];

export default function RefundPage() {
  const { lang } = useLang();
  const ru = lang === "ru";
  const sections = ru ? sectionsRu : sectionsEn;

  return (
    <div style={{ background: "#0F1117", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)", color: "#00D4AA", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            {ru ? "Правовая информация" : "Legal"}
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
            {ru ? "Политика возврата средств" : "Refund Policy"}
          </h1>
          <p style={{ color: "#555A72", fontSize: "14px" }}>{ru ? "Последнее обновление: апрель 2026" : "Last updated: April 2026"}</p>
        </div>

        {/* Key info box */}
        <div style={{ background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.25)", borderRadius: "14px", padding: "20px 24px", marginBottom: "36px", display: "flex", gap: "14px" }}>
          <span style={{ fontSize: "20px", flexShrink: 0 }}>💡</span>
          <p style={{ color: "#B0B8D1", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
            {ru
              ? "Ключевое: оценочный взнос возвращается вместе с вашей первой выплатой прибыли с финансируемого счёта. Если у вас возникла проблема с платежом или технический сбой — немедленно свяжитесь с нами."
              : "Key point: your evaluation fee is returned with your first profit payout from a funded account. If you experienced a payment issue or technical failure — contact us immediately."}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#00D4AA", marginBottom: "10px" }}>{s.title}</h2>
              <p style={{ color: "#B0B8D1", fontSize: "15px", lineHeight: 1.85, margin: 0, whiteSpace: "pre-line" }}>{s.text}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "48px", padding: "20px 24px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#555A72", fontSize: "13px" }}>
          {ru ? "Вопросы? " : "Questions? "}
          <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>support@probcapital.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
