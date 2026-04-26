import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

/* ─── Primitives ─── */
const SectionBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ paddingBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
    <h2 style={{
      fontSize: "15px", fontWeight: 700, color: "#00D4AA",
      marginBottom: "12px", letterSpacing: "0.01em",
    }}>{title}</h2>
    <div style={{ color: "#B8BED6", fontSize: "15px", lineHeight: 1.9 }}>{children}</div>
  </div>
);

const InfoBox = ({ icon, children }: { icon: string; children: React.ReactNode }) => (
  <div style={{
    background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.2)",
    borderRadius: "14px", padding: "20px 24px",
    display: "flex", gap: "14px", alignItems: "flex-start",
  }}>
    <span style={{ fontSize: "20px", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
    <div style={{ color: "#B8BED6", fontSize: "14px", lineHeight: 1.8 }}>{children}</div>
  </div>
);

const WarnBox = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: "rgba(255,160,60,0.05)", border: "1px solid rgba(255,160,60,0.2)",
    borderRadius: "14px", padding: "20px 24px",
    display: "flex", gap: "14px", alignItems: "flex-start",
  }}>
    <span style={{ fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>⚠️</span>
    <div style={{ color: "#C8BEA8", fontSize: "14px", lineHeight: 1.8 }}>{children}</div>
  </div>
);

const Ul = ({ items }: { items: string[] }) => (
  <ul style={{ margin: "8px 0 0", paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
        <span style={{
          flexShrink: 0, marginTop: "7px",
          width: "5px", height: "5px", borderRadius: "50%",
          background: "#00D4AA", boxShadow: "0 0 6px rgba(0,212,170,0.5)",
        }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/* ─── Page ─── */
export default function RefundPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <div style={{ background: "#04080F", minHeight: "100vh", color: "#F0F4FF" }}>
      <Navbar />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "130px 24px 96px" }}>

        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <span style={{
            display: "inline-block", padding: "5px 16px", borderRadius: "100px",
            background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.2)",
            color: "#00D4AA", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px",
          }}>
            {ru ? "Правовой документ" : "Legal Document"}
          </span>
          <h1 style={{
            fontSize: "clamp(28px,4vw,46px)", fontWeight: 900,
            letterSpacing: "-0.025em", marginBottom: "14px", lineHeight: 1.1,
          }}>
            {ru ? "Политика возврата средств" : "Refund Policy"}
          </h1>
          <p style={{ color: "#606880", fontSize: "13px", lineHeight: 1.7 }}>
            {ru
              ? "Последнее обновление: апрель 2026 · ProbCapital LLC · Делавэр, США · Рег. №10541343"
              : "Last updated: April 2026 · ProbCapital LLC · Delaware, USA · File #10541343"}
          </p>
        </div>

        {/* Entity block */}
        <div style={{
          background: "linear-gradient(135deg, rgba(0,212,170,0.05) 0%, rgba(0,150,255,0.03) 100%)",
          border: "1px solid rgba(0,212,170,0.15)", borderRadius: "16px",
          padding: "24px 28px", marginBottom: "36px",
        }}>
          <div style={{ fontSize: "11px", color: "#00D4AA", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            {ru ? "Юридическое лицо, предоставляющее услугу" : "Service Provider — Legal Entity"}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
            {[
              { l: ru ? "Компания" : "Company", v: "ProbCapital LLC" },
              { l: ru ? "Штат регистрации" : "State", v: "Delaware, USA" },
              { l: ru ? "Регистрационный №" : "File Number", v: "#10541343" },
              { l: ru ? "Юридический адрес" : "Address", v: "8 The Green, Suite B, Dover, DE 19901" },
            ].map(item => (
              <div key={item.l}>
                <div style={{ fontSize: "10px", color: "#5A6278", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>{item.l}</div>
                <div style={{ fontSize: "13px", color: "#D0D8F0", fontWeight: 600 }}>{item.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key summary boxes */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "48px" }}>
          <InfoBox icon="⚡">
            <strong style={{ color: "#E0E6F8" }}>
              {ru ? "Услуга считается полностью оказанной " : "The service is fully rendered "}
            </strong>
            {ru
              ? "с момента первого размещения ордера или первого использования учётных данных доступа к платформе. После этого оценочный взнос не подлежит возврату."
              : "upon placement of the first trade or first use of platform access credentials. After that point, the evaluation fee becomes non-refundable."}
          </InfoBox>
          <InfoBox icon="🕐">
            <strong style={{ color: "#E0E6F8" }}>
              {ru ? "14-дневный период охлаждения: " : "14-day cooling-off period: "}
            </strong>
            {ru
              ? "если вы не разместили ни одного ордера и не использовали учётные данные, вы вправе запросить полный возврат в течение 14 календарных дней с даты покупки."
              : "if no trades have been placed and credentials have not been used, you may request a full refund within 14 calendar days of the purchase date."}
          </InfoBox>
          <InfoBox icon="💳">
            <strong style={{ color: "#E0E6F8" }}>
              {ru ? "Метод возврата: " : "Refund method: "}
            </strong>
            {ru
              ? "все одобренные возвраты производятся исключительно на исходное платёжное средство, использованное при оформлении заказа."
              : "all approved refunds are issued exclusively to the original payment method used at the time of purchase. No alternative disbursement methods are available."}
          </InfoBox>
        </div>

        {/* Main sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

          <SectionBlock title={ru ? "1. Область применения и определение услуги" : "1. Scope and Service Definition"}>
            {ru ? (
              <p>
                Настоящая Политика возврата средств регулирует все платежи, осуществлённые в пользу <strong style={{ color: "#E0E6F8" }}>ProbCapital LLC</strong> (далее — «Компания»), зарегистрированной в штате Делавэр, США (регистрационный номер: 10541343), юридический адрес: 8 The Green, Suite B, Dover, DE 19901.
                <br /><br />
                Приобретая доступ на платформе ProbCapital, вы приобретаете <strong style={{ color: "#E0E6F8" }}>программное обеспечение и услугу по оценке торговых навыков</strong> («Услуга по оценке навыков»). Данная услуга включает доступ к проприетарной программной среде симуляции, аналитическим инструментам, данным о производительности и панели управления для оценки. Мы не являемся брокером, инвестиционным советником или финансовым посредником.
              </p>
            ) : (
              <p>
                This Refund Policy governs all payments made to <strong style={{ color: "#E0E6F8" }}>ProbCapital LLC</strong> (the "Company"), a Limited Liability Company registered in the State of Delaware, USA (File Number: 10541343), with a registered address at 8 The Green, Suite B, Dover, DE 19901.
                <br /><br />
                By purchasing access on the ProbCapital platform, you are purchasing a <strong style={{ color: "#E0E6F8" }}>Skill Evaluation Software and Service</strong> (the "Skill Assessment Service"). This service comprises access to a proprietary software simulation environment, analytical tooling, performance data, and an evaluation management dashboard. The Company is not a broker, investment advisor, or financial intermediary.
              </p>
            )}
          </SectionBlock>

          <SectionBlock title={ru ? "2. Момент полного оказания услуги" : "2. Service Delivery & Full Rendering"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "14px" }}>
                  В соответствии с законодательством о защите прав потребителей и соглашениями с платёжными процессорами Компания подтверждает, что <strong style={{ color: "#E0E6F8" }}>Услуга по оценке навыков считается полностью оказанной</strong> при наступлении первого из следующих событий:
                </p>
                <Ul items={[
                  "первое размещение ордера в программной среде симуляции оценки; или",
                  "первое использование или применение учётных данных доступа к платформе.",
                ]} />
                <p style={{ marginTop: "14px" }}>
                  После наступления любого из указанных событий услуга считается полностью оказанной, а оценочный взнос становится <strong style={{ color: "#E0E6F8" }}>не подлежащим возврату</strong>. Данное положение соответствует стандартной практике в отношении цифровых услуг и программного обеспечения, где оказание услуги начинается немедленно после начала использования.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "14px" }}>
                  In accordance with consumer protection regulations and payment processor agreements, the Company confirms that the <strong style={{ color: "#E0E6F8" }}>Skill Assessment Service is fully rendered</strong> upon whichever of the following events occurs first:
                </p>
                <Ul items={[
                  "placement of the first order within the evaluation software simulation environment; or",
                  "first use or application of platform access credentials.",
                ]} />
                <p style={{ marginTop: "14px" }}>
                  Once either event occurs, the service is deemed fully delivered and the evaluation fee becomes <strong style={{ color: "#E0E6F8" }}>non-refundable</strong>. This is consistent with standard practice for digital services and software, where delivery commences immediately upon use.
                </p>
              </>
            )}
          </SectionBlock>

          <SectionBlock title={ru ? "3. 14-дневный период охлаждения (не начата оценка)" : "3. 14-Day Cooling-Off Period (Evaluation Not Commenced)"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "14px" }}>
                  В соответствии с международным законодательством о защите прав потребителей (включая Директиву ЕС о правах потребителей 2011/83/EU и соответствующие национальные нормы) Компания предоставляет <strong style={{ color: "#E0E6F8" }}>14-дневный период охлаждения</strong> при соблюдении следующих условий:
                </p>
                <Ul items={[
                  "с даты покупки прошло не более 14 календарных дней;",
                  "вы не разместили ни одного ордера в среде оценки;",
                  "учётные данные доступа к платформе не были использованы;",
                  "ваш аккаунт не нарушал Условия использования или Торговые правила.",
                ]} />
                <p style={{ marginTop: "14px" }}>
                  При соблюдении всех вышеуказанных условий вы вправе запросить полный возврат уплаченного оценочного взноса, направив запрос на адрес <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", textDecoration: "none" }}>support@probcapital.com</a> с указанием зарегистрированного email и идентификатора транзакции.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "14px" }}>
                  In compliance with international consumer protection law — including EU Consumer Rights Directive 2011/83/EU and applicable national equivalents — the Company provides a <strong style={{ color: "#E0E6F8" }}>14-calendar-day cooling-off period</strong>, subject to all of the following conditions being met:
                </p>
                <Ul items={[
                  "no more than 14 calendar days have elapsed since the date of purchase;",
                  "no orders have been placed within the evaluation environment;",
                  "platform access credentials have not been used or activated;",
                  "the account is not in breach of the Terms of Service or Trading Rules.",
                ]} />
                <p style={{ marginTop: "14px" }}>
                  Where all conditions above are satisfied, you are entitled to request a full refund of the evaluation fee paid by contacting <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", textDecoration: "none" }}>support@probcapital.com</a> with your registered email address and transaction ID.
                </p>
              </>
            )}
          </SectionBlock>

          <SectionBlock title={ru ? "4. Иные основания для возврата средств" : "4. Additional Eligible Refund Circumstances"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "14px" }}>Помимо 14-дневного периода охлаждения, полный возврат может быть произведён в следующих случаях:</p>
                <Ul items={[
                  "Технический сбой: подтверждённый сбой платформы Компании лишил вас возможности получить доступ к среде оценки в течение 48 часов с момента покупки, и проблема не была устранена в разумные сроки.",
                  "Задвоенный платёж: двойное списание произошло вследствие ошибки платёжной системы.",
                  "Иные обязательные права потребителей: применимое законодательство вашей юрисдикции предоставляет права, которые не могут быть ограничены настоящей Политикой.",
                ]} />
                <p style={{ marginTop: "14px" }}>
                  Для подачи заявки на возврат по данным основаниям свяжитесь с нами по адресу <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", textDecoration: "none" }}>support@probcapital.com</a> в течение 7 дней с момента наступления соответствующего события, предоставив подтверждающие документы.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "14px" }}>In addition to the cooling-off period, a full refund may be approved in the following circumstances:</p>
                <Ul items={[
                  "Technical failure: a verified Company platform fault prevented access to the evaluation environment within 48 hours of purchase, and was not resolved within a reasonable timeframe.",
                  "Duplicate charge: a double payment was processed due to a payment system error.",
                  "Mandatory statutory rights: applicable law in your jurisdiction confers rights that cannot be excluded by this Policy.",
                ]} />
                <p style={{ marginTop: "14px" }}>
                  To submit a refund request under these grounds, contact <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", textDecoration: "none" }}>support@probcapital.com</a> within 7 days of the relevant event, providing supporting documentation.
                </p>
              </>
            )}
          </SectionBlock>

          <SectionBlock title={ru ? "5. Возврат взноса при первой выплате" : "5. Evaluation Fee Return on First Payout"}>
            {ru ? (
              <p>
                В соответствии с условиями программы оценки ProbCapital полный оценочный взнос зачисляется обратно специалисту совместно с его первой одобренной выплатой по результатам оценки при условии: (а) успешного прохождения всех обязательных этапов оценки; (б) соответствия запроса на выплату применимому минимальному порогу; (в) отсутствия нарушений правил по аккаунту.
                <br /><br />
                <strong style={{ color: "#E0E6F8" }}>Данный зачёт не является возвратом в юридическом смысле</strong> — это договорная скидка, основанная на результатах работы в соответствии с программой оценки навыков.
              </p>
            ) : (
              <p>
                Under ProbCapital's Evaluation Program terms, the full evaluation fee is credited back to the professional alongside their first approved performance-based payout, provided: (a) all required evaluation phases have been successfully completed; (b) the payout request meets the applicable minimum threshold; (c) the account has no outstanding rule violations.
                <br /><br />
                <strong style={{ color: "#E0E6F8" }}>This credit is not a refund in the legal sense</strong> — it is a contractual performance-based rebate issued under the Skill Assessment program terms.
              </p>
            )}
          </SectionBlock>

          <SectionBlock title={ru ? "6. Случаи, когда возврат не производится" : "6. Non-Refundable Circumstances"}>
            {ru ? (
              <Ul items={[
                "недостижение целевого показателя прибыли или нарушение правил управления рисками в ходе оценки;",
                "добровольный отказ от прохождения оценки после использования учётных данных или размещения первого ордера;",
                "закрытие аккаунта вследствие нарушения Условий использования, Торговых правил или Политики ПОД/ФТ;",
                "изменение решения после начала использования Услуги по оценке навыков;",
                "бездействие в рамках любых применимых временных ограничений;",
                "рыночные условия, ошибки, связанные с MT4/MT5 или иными сторонними провайдерами, или проблемы с интернет-соединением на стороне клиента.",
              ]} />
            ) : (
              <Ul items={[
                "failure to meet profit targets or breach of risk management rules during the evaluation;",
                "voluntary discontinuation of the evaluation after credentials have been used or first trade placed;",
                "account termination due to violation of Terms of Service, Trading Rules, or AML Policy;",
                "change of mind after use of the Skill Assessment Service has commenced;",
                "inactivity within any applicable time limits;",
                "market conditions, errors attributable to MT4/MT5 or other third-party providers, or connectivity issues on the client's side.",
              ]} />
            )}
          </SectionBlock>

          <SectionBlock title={ru ? "7. Метод и сроки возврата" : "7. Refund Method & Timeline"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "14px" }}>
                  Все одобренные возвраты производятся <strong style={{ color: "#E0E6F8" }}>исключительно на исходное платёжное средство</strong>, использованное при оформлении заказа (банковская карта, цифровой кошелёк или иной метод оплаты). Альтернативные способы выплаты возврата недоступны.
                </p>
                <Ul items={[
                  "Срок обработки: 5–10 рабочих дней с момента одобрения заявки.",
                  "Административные сборы за одобренные возвраты не взимаются.",
                  "Если срок зачисления превышает 10 рабочих дней, обратитесь к своему банку или платёжному оператору — средства могут находиться в обработке на их стороне.",
                ]} />
              </>
            ) : (
              <>
                <p style={{ marginBottom: "14px" }}>
                  All approved refunds are issued <strong style={{ color: "#E0E6F8" }}>exclusively to the original payment method</strong> used at the time of purchase (credit/debit card, digital wallet, or other payment instrument). No alternative disbursement methods are available.
                </p>
                <Ul items={[
                  "Processing timeline: 5–10 business days from the date of approval.",
                  "No administrative fees are charged for approved refunds.",
                  "If the credit has not appeared after 10 business days, contact your bank or payment provider — the funds may be in processing on their end.",
                ]} />
              </>
            )}
          </SectionBlock>

          <SectionBlock title={ru ? "8. Политика в отношении чарджбэков" : "8. Chargeback Policy"}>
            <WarnBox>
              {ru
                ? "Инициирование чарджбэка или платёжного спора через эмитента карты или платёжный процессор без предварительного письменного обращения в службу поддержки ProbCapital является нарушением настоящих Условий. Компания оставляет за собой право навсегда заблокировать соответствующий аккаунт и передать информацию в соответствующие службы предотвращения мошенничества. При наличии обоснованного спора — сначала напишите на support@probcapital.com."
                : "Initiating a chargeback or payment dispute through your card issuer or payment processor without first contacting ProbCapital support in writing constitutes a breach of these Terms. The Company reserves the right to permanently suspend the associated account and report the matter to relevant fraud prevention services. If you have a legitimate dispute — contact support@probcapital.com first."}
            </WarnBox>
          </SectionBlock>

          <SectionBlock title={ru ? "9. Права потребителей" : "9. Consumer Rights"}>
            {ru
              ? "Ничто в настоящей Политике не ограничивает и не исключает ваших неотчуждаемых прав потребителя по применимому законодательству. Если вы являетесь потребителем в юрисдикции, предоставляющей специальные права на отмену или возврат средств за цифровые услуги или программное обеспечение, эти права действуют в той мере, в которой они не могут быть ограничены договором."
              : "Nothing in this Policy limits or excludes your statutory consumer rights under applicable law. If you are a consumer in a jurisdiction that affords specific cancellation or refund rights for digital services or software products, those rights apply to the extent they cannot be waived or excluded by contract."}
          </SectionBlock>

          <SectionBlock title={ru ? "10. Обращения по вопросам возврата" : "10. Refund Requests & Contact"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "14px" }}>Все запросы о возврате средств и биллинговые обращения направляйте на:</p>
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px", padding: "20px 24px", marginBottom: "14px",
                }}>
                  <div style={{ marginBottom: "6px" }}>📧 <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", fontWeight: 600, textDecoration: "none" }}>support@probcapital.com</a></div>
                  <div style={{ fontSize: "13px", color: "#6A7090" }}>ProbCapital LLC · 8 The Green, Suite B · Dover, DE 19901 · USA</div>
                </div>
                <p>В запросе укажите: зарегистрированный email, идентификатор транзакции/заказа, описание ситуации. Мы стремимся отвечать на все обращения в течение <strong style={{ color: "#E0E6F8" }}>2 рабочих дней</strong>.</p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "14px" }}>All refund requests and billing inquiries should be directed to:</p>
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px", padding: "20px 24px", marginBottom: "14px",
                }}>
                  <div style={{ marginBottom: "6px" }}>📧 <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", fontWeight: 600, textDecoration: "none" }}>support@probcapital.com</a></div>
                  <div style={{ fontSize: "13px", color: "#6A7090" }}>ProbCapital LLC · 8 The Green, Suite B · Dover, DE 19901 · USA</div>
                </div>
                <p>Please include your registered email address, transaction/order ID, and a clear description of your request. We aim to respond to all refund inquiries within <strong style={{ color: "#E0E6F8" }}>2 business days</strong>.</p>
              </>
            )}
          </SectionBlock>

        </div>

        {/* Footer links */}
        <div style={{
          marginTop: "48px", padding: "20px 24px", borderRadius: "14px",
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
          display: "flex", flexWrap: "wrap", gap: "6px", fontSize: "13px", color: "#5A6278",
        }}>
          <span>{ru ? "Связанные документы:" : "Related documents:"}</span>
          {[
            { href: "/terms", label: ru ? "Условия использования" : "Terms of Service" },
            { href: "/privacy", label: ru ? "Конфиденциальность" : "Privacy Policy" },
            { href: "/risk", label: ru ? "Раскрытие рисков" : "Risk Disclosure" },
          ].map((l, i, arr) => (
            <span key={l.href}>
              <a href={l.href} style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 500 }}>{l.label}</a>
              {i < arr.length - 1 && <span style={{ marginLeft: "6px", color: "#2A3040" }}>·</span>}
            </span>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
}
