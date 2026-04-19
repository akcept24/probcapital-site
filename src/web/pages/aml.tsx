import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

const sectionsEn = [
  {
    title: "1. Purpose and Scope",
    text: `ProbCapital ("Company") is committed to the highest standards in combating money laundering, terrorist financing, and other financial crimes. This Anti-Money Laundering and Counter-Terrorism Financing Policy ("AML/CTF Policy") applies to all users, employees, contractors, and third-party service providers of the Company. Compliance with this Policy is mandatory for all parties engaged with ProbCapital.`,
  },
  {
    title: "2. Regulatory Framework",
    text: `This Policy has been developed in accordance with the recommendations of the Financial Action Task Force (FATF), applicable international AML/CTF standards, and relevant national legislation in the jurisdictions where the Company operates. The Company continuously monitors regulatory developments and updates this Policy accordingly.`,
  },
  {
    title: "3. Customer Due Diligence (CDD) and Know Your Customer (KYC)",
    text: `Prior to processing any payout, all Traders are required to complete identity verification. Standard CDD includes: (a) government-issued photo identification (passport, national identity card, or driver's licence); (b) proof of residential address issued within the last 3 months (utility bill, bank statement, or official government correspondence); (c) confirmation that funds used for evaluation fees are derived from legitimate sources. Enhanced Due Diligence (EDD) may be required for high-value transactions, high-risk jurisdictions, or where unusual activity is identified.`,
  },
  {
    title: "4. Source of Funds",
    text: `Evaluation fees must be paid exclusively by the registered Trader using payment methods held in their own name. The Company does not accept payments from third parties on behalf of a Trader. Where the source of funds cannot be verified to the Company's satisfaction, the Company reserves the right to refuse the transaction and return funds to their origin. Payouts will only be made to accounts or wallets verified as belonging to the Trader.`,
  },
  {
    title: "5. Prohibited Jurisdictions",
    text: `The Company does not provide services to individuals who are residents, nationals, or located in jurisdictions subject to comprehensive international sanctions or that appear on FATF's list of high-risk and non-cooperative jurisdictions. This includes, but is not limited to, countries designated by OFAC, the European Union, and the United Nations Security Council. Registration from prohibited jurisdictions will be declined, and any accounts identified as operating from such jurisdictions will be terminated without refund.`,
  },
  {
    title: "6. Transaction Monitoring",
    text: `The Company employs automated and manual transaction monitoring procedures to identify unusual or suspicious activity. Indicators of suspicious activity may include: atypical payment patterns inconsistent with the Trader's profile, multiple failed payment attempts, requests to split transactions to avoid reporting thresholds, inconsistencies between stated identity and payment details, and withdrawal requests to unverified third-party accounts.`,
  },
  {
    title: "7. Reporting Obligations",
    text: `The Company maintains internal procedures for the escalation and reporting of suspicious activity to the relevant authorities in accordance with applicable law. Where applicable law mandates the filing of a Suspicious Activity Report (SAR) or equivalent, the Company will do so without notifying the subject of the report (tipping-off prohibition). Employees and contractors who identify suspicious activity must report it immediately to the Company's Compliance Officer.`,
  },
  {
    title: "8. Record Keeping",
    text: `The Company retains all KYC documentation, transaction records, and related correspondence for a minimum period of 5 years from the date of the last transaction or account closure, whichever is later. Records are maintained securely and made available to relevant authorities upon lawful request.`,
  },
  {
    title: "9. Employee Training",
    text: `All personnel with access to customer data or financial operations receive mandatory AML/CTF training upon onboarding and at regular intervals thereafter. Training covers the recognition of suspicious activity, applicable legal obligations, internal reporting procedures, and the consequences of non-compliance.`,
  },
  {
    title: "10. Sanctions Screening",
    text: `The Company screens all registered users and payment details against applicable international sanctions lists, including those maintained by OFAC, the EU, HM Treasury, and the UN Security Council, at the time of registration and on an ongoing basis. Any match will result in immediate account suspension and referral to the Compliance Officer for further review and reporting.`,
  },
  {
    title: "11. Compliance Officer",
    text: `The Company has appointed a designated Compliance Officer responsible for overseeing the implementation of this Policy, monitoring regulatory changes, managing reporting obligations, and conducting periodic internal audits. For AML-related inquiries, contact: compliance@probcapital.com`,
  },
  {
    title: "12. Policy Review",
    text: `This Policy is reviewed at least annually or following any material regulatory changes. Updates are approved by senior management and communicated to all relevant parties. The Company reserves the right to amend this Policy at any time in response to changes in applicable law or business practices.`,
  },
];

const sectionsRu = [
  {
    title: "1. Цели и область применения",
    text: `ProbCapital («Компания») придерживается высочайших стандартов в области противодействия отмыванию денег, финансированию терроризма и иным финансовым преступлениям. Настоящая Политика противодействия отмыванию денег и финансированию терроризма («Политика ПОД/ФТ») распространяется на всех пользователей, сотрудников, подрядчиков и сторонних поставщиков услуг Компании. Соблюдение настоящей Политики обязательно для всех сторон, взаимодействующих с ProbCapital.`,
  },
  {
    title: "2. Нормативно-правовая база",
    text: `Настоящая Политика разработана в соответствии с рекомендациями Группы разработки финансовых мер борьбы с отмыванием денег (FATF), применимыми международными стандартами ПОД/ФТ и соответствующим национальным законодательством юрисдикций, в которых осуществляет деятельность Компания. Компания непрерывно отслеживает изменения в регуляторной среде и своевременно обновляет настоящую Политику.`,
  },
  {
    title: "3. Надлежащая проверка клиентов (KYC)",
    text: `До обработки любой выплаты все Трейдеры обязаны пройти верификацию личности. Стандартная проверка включает: (а) документ, удостоверяющий личность с фотографией (паспорт, национальное удостоверение личности или водительское удостоверение); (б) подтверждение адреса проживания, выданное не позднее 3 месяцев назад (квитанция об оплате коммунальных услуг, банковская выписка или официальная корреспонденция государственных органов); (в) подтверждение того, что средства, использованные для оплаты оценочных взносов, получены из законных источников. В отношении крупных транзакций, клиентов из юрисдикций высокого риска или при выявлении необычной активности может применяться расширенная проверка.`,
  },
  {
    title: "4. Источник средств",
    text: `Оценочные взносы должны оплачиваться исключительно зарегистрированным Трейдером с использованием платёжных средств, оформленных на его имя. Компания не принимает платежи от третьих лиц в пользу Трейдера. В случае если источник средств не может быть верифицирован в соответствии с требованиями Компании, она оставляет за собой право отказать в проведении транзакции и вернуть средства на счёт отправителя. Выплаты осуществляются исключительно на счета или кошельки, верифицированные как принадлежащие Трейдеру.`,
  },
  {
    title: "5. Запрещённые юрисдикции",
    text: `Компания не оказывает услуги лицам, являющимся резидентами, гражданами или находящимся в юрисдикциях, находящихся под действием комплексных международных санкций или включённых в список FATF юрисдикций с высоким уровнем риска. Это включает, в частности, страны, определённые OFAC, Европейским союзом и Советом Безопасности ООН. Регистрация из запрещённых юрисдикций будет отклонена, а аккаунты, выявленные как использующиеся из таких юрисдикций, будут заблокированы без возврата средств.`,
  },
  {
    title: "6. Мониторинг транзакций",
    text: `Компания применяет автоматические и ручные процедуры мониторинга транзакций для выявления необычной или подозрительной активности. Индикаторы подозрительной деятельности могут включать: нетипичные платёжные паттерны, несоответствующие профилю Трейдера, множественные неудачные попытки оплаты, запросы на разбивку транзакций во избежание пороговых значений отчётности, несоответствия между заявленными персональными данными и платёжными реквизитами, запросы на вывод средств на непроверенные счета третьих лиц.`,
  },
  {
    title: "7. Обязательства по отчётности",
    text: `Компания поддерживает внутренние процедуры эскалации и передачи информации о подозрительной деятельности соответствующим органам в соответствии с применимым законодательством. При наличии законодательного обязательства о подаче Отчёта о подозрительной деятельности (SAR) или его аналога Компания исполняет его без уведомления субъекта отчёта (запрет на разглашение). Сотрудники и подрядчики, выявившие подозрительную активность, обязаны незамедлительно сообщить об этом Сотруднику по соблюдению требований.`,
  },
  {
    title: "8. Хранение записей",
    text: `Компания хранит всю документацию KYC, записи о транзакциях и связанную переписку в течение минимум 5 лет с даты последней транзакции или закрытия аккаунта, в зависимости от того, что наступит позднее. Записи хранятся в надёжном виде и предоставляются соответствующим органам по законному требованию.`,
  },
  {
    title: "9. Обучение персонала",
    text: `Все сотрудники, имеющие доступ к данным клиентов или финансовым операциям, проходят обязательное обучение по ПОД/ФТ при трудоустройстве и на регулярной основе в дальнейшем. Обучение охватывает распознавание подозрительной активности, применимые правовые обязательства, внутренние процедуры отчётности и последствия несоблюдения требований.`,
  },
  {
    title: "10. Проверка санкционных списков",
    text: `Компания проверяет всех зарегистрированных пользователей и платёжные реквизиты по применимым международным санкционным спискам, включая списки OFAC, ЕС, HM Treasury и Совета Безопасности ООН, при регистрации и на постоянной основе. Любое совпадение влечёт немедленную приостановку аккаунта и передачу дела Сотруднику по соблюдению требований для дальнейшей проверки и отчётности.`,
  },
  {
    title: "11. Сотрудник по соблюдению требований",
    text: `Компания назначила ответственного Сотрудника по соблюдению требований, осуществляющего надзор за реализацией настоящей Политики, мониторинг регуляторных изменений, управление обязательствами по отчётности и проведение периодических внутренних аудитов. По вопросам ПОД обращайтесь: compliance@probcapital.com`,
  },
  {
    title: "12. Пересмотр политики",
    text: `Настоящая Политика пересматривается не реже одного раза в год или при существенных изменениях нормативно-правового регулирования. Обновления утверждаются руководством и доводятся до сведения всех соответствующих сторон. Компания оставляет за собой право вносить изменения в настоящую Политику в любое время в ответ на изменения применимого законодательства или деловой практики.`,
  },
];

export default function AmlPage() {
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
            {ru ? "Политика ПОД/ФТ" : "AML / CTF Policy"}
          </h1>
          <p style={{ color: "#555A72", fontSize: "14px" }}>{ru ? "Последнее обновление: апрель 2026" : "Last updated: April 2026"}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {sections.map((s) => (
            <div key={s.title} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "24px" }}>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#00D4AA", marginBottom: "10px" }}>{s.title}</h2>
              <p style={{ color: "#B0B8D1", fontSize: "15px", lineHeight: 1.85, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "32px", padding: "18px 24px", borderRadius: "14px", background: "rgba(0,212,170,0.06)", border: "1px solid rgba(0,212,170,0.2)", color: "#8A8FA8", fontSize: "13px" }}>
          {ru ? "По вопросам ПОД/ФТ: " : "AML/CTF inquiries: "}
          <a href="mailto:compliance@probcapital.com" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>compliance@probcapital.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
