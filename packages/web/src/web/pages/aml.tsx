import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

/* ─── Primitives ─── */
const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ paddingBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.055)" }}>
    <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#00D4AA", marginBottom: "12px", letterSpacing: "0.01em" }}>
      {title}
    </h2>
    <div style={{ color: "#B8BED6", fontSize: "15px", lineHeight: 1.9 }}>{children}</div>
  </div>
);

const Ul = ({ items }: { items: string[] }) => (
  <ul style={{ margin: "10px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
    {items.map((item, i) => (
      <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
        <span style={{
          flexShrink: 0, marginTop: "8px",
          width: "5px", height: "5px", borderRadius: "50%",
          background: "#00D4AA", boxShadow: "0 0 5px rgba(0,212,170,0.4)",
        }} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const InfoBox = ({ icon, label, children }: { icon: string; label: string; children: React.ReactNode }) => (
  <div style={{
    background: "linear-gradient(135deg, rgba(0,212,170,0.06) 0%, rgba(0,140,255,0.03) 100%)",
    border: "1px solid rgba(0,212,170,0.18)", borderRadius: "14px",
    padding: "20px 24px", marginBottom: "16px",
  }}>
    <div style={{ fontSize: "10px", color: "#00D4AA", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "10px" }}>
      {icon}&nbsp;&nbsp;{label}
    </div>
    <div style={{ color: "#C0C8E0", fontSize: "14px", lineHeight: 1.85 }}>{children}</div>
  </div>
);

const SanctionBadge = ({ name }: { name: string }) => (
  <span style={{
    display: "inline-block", padding: "4px 12px", borderRadius: "8px",
    background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.16)",
    color: "#00D4AA", fontSize: "12px", fontWeight: 700,
    letterSpacing: "0.04em", margin: "4px 4px 0 0",
  }}>{name}</span>
);

/* ─── Page ─── */
export default function AmlPage() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <div style={{ background: "#04080F", minHeight: "100vh", color: "#F0F4FF" }}>
      <Navbar />

      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "130px 24px 96px" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: "48px" }}>
          <span style={{
            display: "inline-block", padding: "5px 16px", borderRadius: "100px",
            background: "rgba(0,212,170,0.07)", border: "1px solid rgba(0,212,170,0.2)",
            color: "#00D4AA", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px",
          }}>
            {ru ? "Правовой документ" : "Legal Document"}
          </span>
          <h1 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 900, letterSpacing: "-0.025em", marginBottom: "14px", lineHeight: 1.1 }}>
            {ru ? "Политика ПОД/ФТ и KYC" : "AML / KYC Policy"}
          </h1>
          <p style={{ color: "#606880", fontSize: "13px", lineHeight: 1.7 }}>
            {ru
              ? "Последнее обновление: апрель 2026 · ProbCapital LLC · Делавэр, США · Рег. №10541343"
              : "Last updated: April 2026 · ProbCapital LLC · Delaware, USA · File #10541343"}
          </p>
        </div>

        {/* ── Entity card ── */}
        <div style={{
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px", padding: "22px 28px", marginBottom: "28px",
        }}>
          <div style={{ fontSize: "10px", color: "#5A6278", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            {ru ? "Составитель политики" : "Policy Issuing Entity"}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
            {[
              { l: ru ? "Компания" : "Legal Name", v: "ProbCapital LLC" },
              { l: ru ? "Штат" : "State of Formation", v: "Delaware, USA" },
              { l: ru ? "Рег. номер" : "File Number", v: "#10541343" },
              { l: ru ? "Адрес" : "Registered Address", v: "8 The Green, Suite B, Dover, DE 19901" },
            ].map(item => (
              <div key={item.l}>
                <div style={{ fontSize: "10px", color: "#4A5268", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>{item.l}</div>
                <div style={{ fontSize: "13px", color: "#D0D8F0", fontWeight: 600 }}>{item.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Key highlights ── */}
        <div style={{ marginBottom: "40px" }}>
          <InfoBox icon="🛡️" label={ru ? "KYC обязателен до выплат" : "KYC Required Before Any Payout"}>
            {ru
              ? "ProbCapital LLC требует полного прохождения верификации личности (KYC) от всех клиентов перед обработкой любых выплат. Верификация не может быть пропущена или отсрочена независимо от суммы или статуса в программе оценки."
              : "ProbCapital LLC requires complete Know Your Customer (KYC) identity verification from all clients before processing any payout of any amount. Verification cannot be bypassed or deferred regardless of payout amount or evaluation program status."}
          </InfoBox>
          <InfoBox icon="🔍" label={ru ? "Проверка санкционных списков" : "Sanctions List Screening"}>
            {ru
              ? "Все пользователи проверяются по санкционным спискам OFAC, ЕС, ООН и HM Treasury при регистрации и на постоянной основе. Любое совпадение влечёт немедленную блокировку аккаунта."
              : "All users are screened against OFAC, EU, UN, and HM Treasury sanctions lists at registration and on an ongoing basis. Any match results in immediate account suspension pending Compliance Officer review."}
          </InfoBox>
        </div>

        {/* ── Sections ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

          <S title={ru ? "1. Цели и область применения" : "1. Purpose and Scope"}>
            {ru ? (
              <p><strong style={{ color: "#E0E8FF" }}>ProbCapital LLC</strong> (далее — «Компания»), зарегистрированная в штате Делавэр, США (регистрационный номер: 10541343, юридический адрес: 8 The Green, Suite B, Dover, DE 19901), придерживается высочайших стандартов в области противодействия отмыванию денег (ПОД), финансированию терроризма (ФТ) и соблюдения санкционного законодательства. Настоящая Политика ПОД/ФТ и KYC («Политика») разработана в соответствии с федеральным законодательством США, включая Закон о банковской тайне (Bank Secrecy Act, BSA), применимыми правилами FinCEN, санкционными программами OFAC и законодательством штата Делавэр. Настоящая Политика распространяется на всех клиентов, сотрудников, подрядчиков и поставщиков услуг Компании.</p>
            ) : (
              <p><strong style={{ color: "#E0E8FF" }}>ProbCapital LLC</strong> (the "Company"), a Limited Liability Company registered in the State of Delaware, USA (File Number: 10541343; Registered Address: 8 The Green, Suite B, Dover, DE 19901), is committed to the highest standards of Anti-Money Laundering (AML), Counter-Terrorism Financing (CTF), and sanctions compliance. This AML/KYC Policy (the "Policy") is developed in accordance with applicable US federal law, including the Bank Secrecy Act (BSA), FinCEN regulations, OFAC sanctions programs, and the laws of the State of Delaware. This Policy applies to all clients, employees, contractors, and third-party service providers of the Company.</p>
            )}
          </S>

          <S title={ru ? "2. Нормативно-правовая база" : "2. Regulatory Framework"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "12px" }}>Настоящая Политика разработана в соответствии со следующими регуляторными стандартами:</p>
                <Ul items={[
                  "Закон о банковской тайне США (Bank Secrecy Act, 31 U.S.C. §§ 5311–5336);",
                  "Правила Сети по борьбе с финансовыми преступлениями (FinCEN) Министерства финансов США;",
                  "Санкционные программы Управления по контролю за иностранными активами (OFAC) Министерства финансов США;",
                  "Рекомендации Группы разработки финансовых мер борьбы с отмыванием денег (FATF);",
                  "Законодательство штата Делавэр о борьбе с финансовыми преступлениями;",
                  "Резолюции Совета Безопасности ООН по санкциям и финансированию терроризма.",
                ]} />
              </>
            ) : (
              <>
                <p style={{ marginBottom: "12px" }}>This Policy is developed in compliance with the following regulatory frameworks:</p>
                <Ul items={[
                  "US Bank Secrecy Act (BSA), 31 U.S.C. §§ 5311–5336;",
                  "US Department of the Treasury Financial Crimes Enforcement Network (FinCEN) regulations;",
                  "US Department of the Treasury Office of Foreign Assets Control (OFAC) sanctions programs;",
                  "Financial Action Task Force (FATF) Recommendations and Guidance;",
                  "State of Delaware financial crimes and commercial law;",
                  "UN Security Council resolutions on sanctions and terrorist financing.",
                ]} />
              </>
            )}
          </S>

          <S title={ru ? "3. Идентификация и верификация клиентов (KYC)" : "3. Know Your Customer (KYC) Requirements"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#E0E8FF" }}>ProbCapital LLC требует успешного прохождения верификации KYC от всех клиентов до обработки любых выплат.</strong> Это требование является обязательным, безусловным и не допускает исключений. Верификация включает следующие этапы:
                </p>
                <p style={{ margin: "14px 0 8px", fontWeight: 700, color: "#D0D8F0" }}>Стандартная проверка (Standard CDD):</p>
                <Ul items={[
                  "Действующий документ, удостоверяющий личность с фотографией, выданный государственным органом: паспорт, национальное удостоверение личности или водительское удостоверение;",
                  "Подтверждение адреса проживания, выданное не позднее 90 дней назад: квитанция об оплате коммунальных услуг, банковская выписка или официальное письмо государственного органа;",
                  "Подтверждение того, что платёжное средство, использованное для оплаты оценочного взноса, зарегистрировано на имя клиента.",
                ]} />
                <p style={{ margin: "14px 0 8px", fontWeight: 700, color: "#D0D8F0" }}>Расширенная проверка (Enhanced Due Diligence / EDD):</p>
                <Ul items={[
                  "Клиенты, являющиеся политически значимыми лицами (PEP) или их аффилированными лицами;",
                  "Клиенты из юрисдикций с повышенным риском согласно классификации FATF;",
                  "Транзакции или профили активности, вызывающие подозрение;",
                  "Запросы на выплаты, существенно превышающие типичный профиль клиента.",
                ]} />
              </>
            ) : (
              <>
                <p style={{ marginBottom: "10px" }}>
                  <strong style={{ color: "#E0E8FF" }}>ProbCapital LLC requires successful completion of KYC verification from all clients before processing any payout of any kind.</strong> This requirement is mandatory, unconditional, and admits no exceptions. Verification comprises the following components:
                </p>
                <p style={{ margin: "14px 0 8px", fontWeight: 700, color: "#D0D8F0" }}>Standard Customer Due Diligence (CDD):</p>
                <Ul items={[
                  "A current, government-issued photo identity document: passport, national identity card, or driver's license;",
                  "Proof of residential address issued within the preceding 90 days: utility bill, bank statement, or official government correspondence;",
                  "Confirmation that the payment instrument used for the evaluation fee is registered in the client's own name.",
                ]} />
                <p style={{ margin: "14px 0 8px", fontWeight: 700, color: "#D0D8F0" }}>Enhanced Due Diligence (EDD) — required for:</p>
                <Ul items={[
                  "Clients identified as Politically Exposed Persons (PEPs) or their close associates;",
                  "Clients from FATF-designated high-risk or non-cooperative jurisdictions;",
                  "Activity patterns or transaction profiles that trigger internal risk indicators;",
                  "Payout requests materially exceeding the client's established activity profile.",
                ]} />
              </>
            )}
          </S>

          <S title={ru ? "4. Проверка санкционных списков" : "4. Sanctions Screening"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "12px" }}>
                  Компания осуществляет проверку всех регистрируемых пользователей, платёжных реквизитов и бенефициаров по следующим санкционным спискам — при регистрации, при подаче заявки на верификацию KYC и на постоянной основе:
                </p>
                <div style={{ marginBottom: "16px" }}>
                  <SanctionBadge name="OFAC (США)" />
                  <SanctionBadge name="UN Security Council" />
                  <SanctionBadge name="EU Consolidated List" />
                  <SanctionBadge name="HM Treasury (UK)" />
                  <SanctionBadge name="FATF High-Risk Jurisdictions" />
                  <SanctionBadge name="FinCEN" />
                </div>
                <Ul items={[
                  "Любое совпадение с санкционным списком влечёт немедленную приостановку аккаунта и передачу дела Сотруднику по соблюдению требований.",
                  "Аккаунт остаётся заблокированным до завершения проверки и принятия решения Сотрудником по соблюдению требований.",
                  "При подтверждении совпадения Компания выполняет обязательства по отчётности перед соответствующими органами.",
                  "Все расходы, понесённые в связи с блокировкой аккаунта по причине санкционного совпадения, не компенсируются.",
                ]} />
              </>
            ) : (
              <>
                <p style={{ marginBottom: "12px" }}>
                  The Company screens all registering users, payment details, and beneficiaries against the following sanctions lists — at registration, at KYC submission, and on an ongoing basis:
                </p>
                <div style={{ marginBottom: "16px" }}>
                  <SanctionBadge name="OFAC (USA)" />
                  <SanctionBadge name="UN Security Council" />
                  <SanctionBadge name="EU Consolidated List" />
                  <SanctionBadge name="HM Treasury (UK)" />
                  <SanctionBadge name="FATF High-Risk Jurisdictions" />
                  <SanctionBadge name="FinCEN" />
                </div>
                <Ul items={[
                  "Any sanctions list match triggers immediate account suspension and escalation to the Compliance Officer.",
                  "The account remains suspended until the Compliance Officer has completed review and made a determination.",
                  "Where a match is confirmed, the Company fulfils all mandatory reporting obligations to relevant authorities.",
                  "Fees associated with a suspended account due to a sanctions match are not eligible for refund.",
                ]} />
              </>
            )}
          </S>

          <S title={ru ? "5. Запрещённые юрисдикции" : "5. Prohibited Jurisdictions"}>
            {ru ? (
              <p>Компания не оказывает услуги лицам, являющимся резидентами, гражданами или находящимся в юрисдикциях, находящихся под действием комплексных санкций США, ЕС или ООН, либо включённых в список FATF юрисдикций с высоким уровнем риска и юрисдикций, находящихся под усиленным мониторингом. Регистрация из запрещённых юрисдикций автоматически отклоняется. Аккаунты, выявленные как использующиеся из таких юрисдикций после регистрации, блокируются без предварительного уведомления и без возврата взносов. Компания оставляет за собой право обновлять перечень запрещённых юрисдикций в соответствии с изменениями санкционного законодательства.</p>
            ) : (
              <p>The Company does not provide services to individuals who are residents, nationals, or located in jurisdictions subject to comprehensive US, EU, or UN sanctions, or designated by FATF as high-risk or subject to enhanced monitoring. Registrations from prohibited jurisdictions are automatically declined. Accounts identified as operating from prohibited jurisdictions following registration are suspended without prior notice and without refund of fees paid. The Company reserves the right to update its list of prohibited jurisdictions in line with changes to applicable sanctions law.</p>
            )}
          </S>

          <S title={ru ? "6. Источник средств и платёжный контроль" : "6. Source of Funds and Payment Controls"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "10px" }}>К платёжным операциям применяются следующие требования:</p>
                <Ul items={[
                  "Оценочные взносы должны оплачиваться исключительно зарегистрированным клиентом с платёжных средств, оформленных на его имя.",
                  "Компания не принимает платежи от третьих лиц в пользу клиента ни при каких обстоятельствах.",
                  "Если источник средств не может быть верифицирован, Компания вправе отказать в проведении транзакции и вернуть средства на счёт отправителя.",
                  "Все выплаты производятся исключительно на верифицированный счёт клиента, совпадающий с его идентификационными данными KYC.",
                  "Выплаты наличными, криптовалютой или иными анонимными методами не осуществляются.",
                ]} />
              </>
            ) : (
              <>
                <p style={{ marginBottom: "10px" }}>The following controls apply to all payment operations:</p>
                <Ul items={[
                  "Evaluation fees must be paid exclusively by the registered client from payment instruments held in their own name.",
                  "The Company does not accept payments from third parties on behalf of a client under any circumstances.",
                  "Where source of funds cannot be verified to the Company's satisfaction, the Company may decline the transaction and return funds to their origin.",
                  "All payouts are issued exclusively to a verified account held in the client's name consistent with their KYC identity data.",
                  "Cash, anonymous, or unverified payment method payouts are not available.",
                ]} />
              </>
            )}
          </S>

          <S title={ru ? "7. Мониторинг транзакций" : "7. Transaction Monitoring"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "10px" }}>Компания применяет автоматизированные и ручные процедуры мониторинга для выявления необычной или подозрительной активности. Индикаторы повышенного риска включают:</p>
                <Ul items={[
                  "Платёжные паттерны, несоответствующие профилю клиента или заявленному источнику дохода;",
                  "Многократные неудачные попытки оплаты с различных источников;",
                  "Запросы на разбивку платежей с целью обхода пороговых значений отчётности;",
                  "Несоответствия между персональными данными, платёжными реквизитами и данными KYC;",
                  "Запросы на вывод средств на счета третьих лиц или не совпадающие с данными KYC;",
                  "Транзакции с лицами или организациями, связанными с юрисдикциями высокого риска.",
                ]} />
              </>
            ) : (
              <>
                <p style={{ marginBottom: "10px" }}>The Company employs automated and manual monitoring procedures to identify unusual or suspicious activity. Elevated risk indicators include:</p>
                <Ul items={[
                  "Payment patterns inconsistent with the client's profile or stated source of income;",
                  "Multiple failed payment attempts from different sources;",
                  "Requests to structure or split payments to avoid reporting thresholds;",
                  "Discrepancies between personal details, payment instrument data, and KYC documentation;",
                  "Payout requests to third-party accounts or accounts inconsistent with KYC identity;",
                  "Transactions involving counterparties associated with high-risk jurisdictions.",
                ]} />
              </>
            )}
          </S>

          <S title={ru ? "8. Обязательства по отчётности (SAR)" : "8. Suspicious Activity Reporting (SAR)"}>
            {ru ? (
              <p>Компания поддерживает внутренние процедуры эскалации и, где это требуется применимым законодательством, подачи Отчётов о подозрительной деятельности (SAR) или эквивалентных документов в FinCEN или соответствующие органы. Отчёты подаются без уведомления субъекта отчёта (tipping-off prohibition). Все сотрудники и подрядчики, имеющие доступ к операциям клиентов, обязаны незамедлительно сообщать о подозрительной активности Сотруднику по соблюдению требований. Неисполнение данного требования является дисциплинарным нарушением.</p>
            ) : (
              <p>The Company maintains internal escalation procedures and, where required under applicable law, files Suspicious Activity Reports (SARs) or equivalent disclosures with FinCEN or the relevant competent authority. Reports are filed without notifying the subject of the report (tipping-off prohibition). All personnel and contractors with access to client operations are required to escalate suspected suspicious activity to the Compliance Officer immediately. Failure to do so constitutes a disciplinary violation.</p>
            )}
          </S>

          <S title={ru ? "9. Хранение документации" : "9. Record Retention"}>
            {ru ? (
              <p>Компания хранит всю документацию KYC, записи о транзакциях, результаты проверки санкционных списков и сопутствующую переписку в течение <strong style={{ color: "#E0E8FF" }}>не менее 5 лет</strong> с даты последней транзакции или закрытия аккаунта, в соответствии с требованиями BSA и применимых норм FinCEN. Записи хранятся в защищённом виде с шифрованием AES-256 и предоставляются компетентным органам по законному запросу без задержки.</p>
            ) : (
              <p>The Company retains all KYC documentation, transaction records, sanctions screening results, and related correspondence for a minimum period of <strong style={{ color: "#E0E8FF" }}>five (5) years</strong> from the date of the last transaction or account closure, in accordance with BSA and applicable FinCEN record-keeping requirements. Records are maintained in secure, AES-256 encrypted storage and are made available to competent authorities upon lawful request without delay.</p>
            )}
          </S>

          <S title={ru ? "10. Обучение персонала" : "10. Staff Training and Awareness"}>
            {ru ? (
              <p>Все сотрудники и подрядчики, имеющие доступ к данным клиентов, платёжным операциям или системам KYC/комплаенс, проходят обязательное обучение по ПОД/ФТ при трудоустройстве и не реже одного раза в год в дальнейшем. Программа обучения охватывает: распознавание признаков отмывания денег и финансирования терроризма; применимые правовые обязательства согласно BSA, OFAC и FinCEN; внутренние процедуры отчётности; использование систем проверки санкционных списков; последствия несоблюдения требований, включая уголовную ответственность.</p>
            ) : (
              <p>All employees and contractors with access to client data, payment operations, or KYC/compliance systems receive mandatory AML/KYC training upon onboarding and at least annually thereafter. The training program covers: recognition of money laundering and terrorist financing indicators; applicable legal obligations under the BSA, OFAC, and FinCEN; internal reporting procedures; use of sanctions screening systems; and consequences of non-compliance including potential criminal liability.</p>
            )}
          </S>

          <S title={ru ? "11. Сотрудник по соблюдению требований" : "11. Compliance Officer"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "12px" }}>Компания назначила ответственного Сотрудника по соблюдению требований (Compliance Officer), в обязанности которого входит:</p>
                <Ul items={[
                  "Надзор за реализацией и соблюдением настоящей Политики;",
                  "Мониторинг изменений нормативно-правового регулирования в области ПОД/ФТ;",
                  "Проведение периодических внутренних проверок и аудитов;",
                  "Управление обязательствами по отчётности перед FinCEN и OFAC;",
                  "Рассмотрение случаев приостановки аккаунтов по санкционным основаниям.",
                ]} />
                <div style={{
                  marginTop: "16px", background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "16px 20px",
                }}>
                  <div style={{ fontSize: "12px", color: "#5A6278", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Контакт</div>
                  <a href="mailto:compliance@probcapital.com" style={{ color: "#00D4AA", fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>compliance@probcapital.com</a>
                  <div style={{ fontSize: "12px", color: "#4A5268", marginTop: "4px" }}>ProbCapital LLC · 8 The Green, Suite B · Dover, DE 19901 · USA</div>
                </div>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "12px" }}>The Company has appointed a designated Compliance Officer with the following responsibilities:</p>
                <Ul items={[
                  "Overseeing the implementation and enforcement of this Policy;",
                  "Monitoring regulatory developments in AML/KYC law;",
                  "Conducting periodic internal reviews and compliance audits;",
                  "Managing reporting obligations to FinCEN and OFAC;",
                  "Reviewing account suspensions arising from sanctions screening matches.",
                ]} />
                <div style={{
                  marginTop: "16px", background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px", padding: "16px 20px",
                }}>
                  <div style={{ fontSize: "12px", color: "#5A6278", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Contact</div>
                  <a href="mailto:compliance@probcapital.com" style={{ color: "#00D4AA", fontWeight: 600, textDecoration: "none", fontSize: "14px" }}>compliance@probcapital.com</a>
                  <div style={{ fontSize: "12px", color: "#4A5268", marginTop: "4px" }}>ProbCapital LLC · 8 The Green, Suite B · Dover, DE 19901 · USA</div>
                </div>
              </>
            )}
          </S>

          <S title={ru ? "12. Пересмотр политики" : "12. Policy Review and Updates"}>
            {ru ? (
              <p>Настоящая Политика пересматривается не реже одного раза в год или при существенных изменениях применимого законодательства либо операционных условий. Обновления утверждаются старшим руководством и незамедлительно доводятся до сведения всех соответствующих сотрудников и подрядчиков. Компания оставляет за собой право вносить изменения в настоящую Политику в любое время без предварительного уведомления клиентов, если это требуется для соответствия действующему законодательству.</p>
            ) : (
              <p>This Policy is reviewed at minimum annually and following any material change in applicable law or operational circumstances. Updates are approved by senior management and promptly communicated to all relevant employees and contractors. The Company reserves the right to amend this Policy at any time without advance client notice where required to maintain compliance with applicable law.</p>
            )}
          </S>

        </div>

        {/* Footer links */}
        <div style={{
          marginTop: "48px", padding: "20px 24px", borderRadius: "14px",
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
          display: "flex", flexWrap: "wrap", gap: "6px", fontSize: "13px", color: "#4A5268", lineHeight: 1.7,
        }}>
          <span>{ru ? "Связанные документы:" : "Related documents:"}</span>
          {[
            { href: "/terms", label: ru ? "Условия использования" : "Terms of Service" },
            { href: "/privacy", label: ru ? "Конфиденциальность" : "Privacy Policy" },
            { href: "/risk", label: ru ? "Раскрытие рисков" : "Risk Disclosure" },
            { href: "/refund", label: ru ? "Политика возврата" : "Refund Policy" },
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
