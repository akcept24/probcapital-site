import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

const sectionsEn = [
  {
    title: "1. Data Controller",
    text: `Probcapital LLC ("Company", "we", "us") is a Limited Liability Company registered in the State of Delaware, USA (File #10541343), with registered address at 8 The Green, Suite B, Dover, DE 19901. The Company is the data controller responsible for the processing of your personal data collected through probcapital.com and associated services. For all privacy-related inquiries, please contact: privacy@probcapital.com.`,
  },
  {
    title: "2. Personal Data We Collect",
    text: `We collect and process the following categories of personal data: (a) Identity data: full name, date of birth, nationality, government-issued identification document; (b) Contact data: email address, phone number, country of residence; (c) Financial data: payment method details, transaction history, payout information; (d) Technical data: IP address, browser type, operating system, device identifiers, cookies and similar tracking technologies; (e) Usage data: pages visited, features used, session duration, click-through patterns; (f) Trading data: all trading activity, account performance metrics, evaluation results.`,
  },
  {
    title: "3. Legal Basis for Processing",
    text: `We process your personal data on the following legal bases: (a) Performance of a contract — processing necessary to provide the Service, process payments, and facilitate payouts; (b) Legal obligation — processing required by applicable AML/CFT, tax, and regulatory laws; (c) Legitimate interests — improving our services, preventing fraud, and ensuring platform security; (d) Consent — for marketing communications, where such consent is required by applicable law. You may withdraw consent at any time without affecting the lawfulness of prior processing.`,
  },
  {
    title: "4. How We Use Your Data",
    text: `Your personal data is used for the following purposes: (a) creating and maintaining your account; (b) processing evaluation fees and performance-based compensation; (c) verifying your identity in compliance with KYC/AML requirements; (d) providing customer support and responding to inquiries; (e) detecting, preventing, and investigating fraud and rule violations; (f) sending service-related communications, including policy updates and payout notifications; (g) analysing platform usage to improve functionality and user experience; (h) complying with applicable legal and regulatory obligations.`,
  },
  {
    title: "5. Data Sharing and Third Parties",
    text: `We do not sell, rent, or trade your personal data to third parties for marketing purposes. We may share your data with: (a) payment processors and financial institutions for transaction processing, including Stripe where enabled (see Section 13 for the full sub-processor list); (b) identity verification (KYC) service providers; (c) cloud hosting and infrastructure providers operating under strict data processing agreements; (d) regulatory, law enforcement, or governmental authorities when required by law or to protect our legal rights; (e) professional advisers including lawyers, auditors, and accountants under obligations of confidentiality. All third-party processors are contractually bound to handle your data in accordance with applicable data protection laws.`,
  },
  {
    title: "6. International Data Transfers",
    text: `Your data may be transferred to and processed in countries outside your jurisdiction. Where such transfers occur, we ensure appropriate safeguards are in place, including standard contractual clauses approved by relevant data protection authorities, or reliance on adequacy decisions where applicable.`,
  },
  {
    title: "7. Data Retention",
    text: `We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, including: (a) account data — for the duration of the account and 5 years thereafter; (b) financial and transaction data — 7 years in accordance with applicable financial record-keeping obligations; (c) identity verification data — as required by AML/CFT regulations; (d) technical and usage data — up to 24 months. Upon expiry of the applicable retention period, data is securely deleted or anonymised.`,
  },
  {
    title: "8. Your Rights",
    text: `Subject to applicable law, you have the following rights regarding your personal data: (a) Right of access — to obtain a copy of the personal data we hold about you; (b) Right to rectification — to correct inaccurate or incomplete data; (c) Right to erasure — to request deletion of your data where no legitimate basis exists for continued processing; (d) Right to restriction — to restrict processing in certain circumstances; (e) Right to data portability — to receive your data in a structured, machine-readable format; (f) Right to object — to object to processing based on legitimate interests; (g) Right to withdraw consent — where processing is based on consent. To exercise any of these rights, contact privacy@probcapital.com. We will respond within 30 days.`,
  },
  {
    title: "9. Cookies",
    text: `We use cookies and similar technologies to operate and improve the Service. Strictly necessary cookies are required for the website to function and cannot be disabled. Analytical and performance cookies help us understand how users interact with the platform; these are only set with your consent where required by applicable law, and may be disabled at any time via your browser settings or our cookie preferences panel. We do not use third-party advertising or behavioural tracking cookies. For users in the EU/EEA/UK, we obtain consent before placing non-essential cookies.`,
  },
  {
    title: "10. Security",
    text: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. These include TLS/SSL encryption for data in transit, access controls, regular security assessments, and staff confidentiality obligations. No method of transmission over the internet is 100% secure; however, we are committed to maintaining industry-standard protections.`,
  },
  {
    title: "11. Changes to This Policy",
    text: `We may update this Privacy Policy periodically. Material changes will be communicated to registered users via email or a prominent notice on the website. The updated policy will indicate the date of the most recent revision. Continued use of the Service after changes take effect constitutes acceptance.`,
  },
  {
    title: "12. Contact",
    text: `For privacy-related questions, data subject requests, or complaints, contact our Data Protection Officer at: privacy@probcapital.com`,
  },
  {
    title: "13. Third-Party Sub-Processors",
    text: `The following third-party service providers may process your personal data on our behalf under data processing agreements. This list may be updated as our service providers change.

— Stripe, Inc. (USA): payment processing and card data tokenisation. Privacy Policy: stripe.com/privacy
— [KYC Provider — TBD]: identity verification and document authentication.
— [Hosting Provider — TBD]: cloud infrastructure and data storage.
— [Analytics Provider — TBD]: platform usage analytics (privacy-preserving, no cross-site tracking).

Where any sub-processor is located outside your jurisdiction, appropriate safeguards (including standard contractual clauses) are in place. For an up-to-date list, contact privacy@probcapital.com.`,
  },
  {
    title: "14. California Privacy Rights (CCPA/CPRA)",
    text: `If you are a California resident, you have the following additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):

(a) Right to Know: you may request disclosure of the categories and specific pieces of personal information we have collected about you, the categories of sources, our business purposes, and the categories of third parties with whom we share data.

(b) Right to Delete: you may request deletion of your personal information, subject to certain exceptions.

(c) Right to Correct: you may request correction of inaccurate personal information we hold about you.

(d) Right to Opt Out of Sale or Sharing: we do not sell or share your personal information for cross-context behavioural advertising as defined by the CPRA.

(e) Right to Limit Use of Sensitive Personal Information: we only use sensitive personal information (such as identity documents) to the extent necessary to provide the Service and comply with legal obligations.

(f) Right to Non-Discrimination: we will not discriminate against you for exercising any of your CCPA/CPRA rights.

To exercise your California privacy rights, contact: privacy@probcapital.com. We will respond to verifiable requests within 45 days as required by law.`,
  }
];

const sectionsRu = [
  {
    title: "1. Оператор персональных данных",
    text: `Probcapital LLC («Компания», «мы», «нас») — общество с ограниченной ответственностью, зарегистрированное в штате Делавэр, США (регистрационный номер: 10541343), юридический адрес: 8 The Green, Suite B, Dover, DE 19901. Компания является оператором персональных данных, ответственным за их обработку, осуществляемую через сайт probcapital.com и связанные сервисы. По всем вопросам конфиденциальности обращайтесь: privacy@probcapital.com.`,
  },
  {
    title: "2. Персональные данные, которые мы собираем",
    text: `Мы собираем и обрабатываем следующие категории персональных данных: (а) Идентификационные данные: полное имя, дата рождения, гражданство, документ, удостоверяющий личность; (б) Контактные данные: адрес электронной почты, номер телефона, страна проживания; (в) Финансовые данные: реквизиты платёжного средства, история транзакций, информация о выплатах; (г) Технические данные: IP-адрес, тип браузера, операционная система, идентификаторы устройства, файлы cookie; (д) Данные об использовании: посещённые страницы, используемые функции, продолжительность сессий; (е) Торговые данные: вся торговая активность, показатели счёта, результаты оценки.`,
  },
  {
    title: "3. Правовые основания для обработки",
    text: `Мы обрабатываем ваши персональные данные на следующих правовых основаниях: (а) Исполнение договора — обработка, необходимая для предоставления Сервиса, обработки платежей и выплат; (б) Правовые обязательства — обработка, требуемая применимым законодательством в области ПОД/ФТ, налогового и регуляторного права; (в) Законные интересы — совершенствование наших сервисов, предотвращение мошенничества и обеспечение безопасности платформы; (г) Согласие — для маркетинговых коммуникаций, где это требуется применимым законодательством. Согласие может быть отозвано в любое время без ущерба для законности ранее осуществлённой обработки.`,
  },
  {
    title: "4. Цели использования данных",
    text: `Ваши персональные данные используются в следующих целях: (а) создание и ведение вашего аккаунта; (б) обработка оценочных взносов и выплат вознаграждения за результаты оценки; (в) верификация личности в соответствии с требованиями KYC/ПОД; (г) оказание поддержки и ответы на запросы; (д) выявление, предотвращение и расследование мошенничества и нарушений правил; (е) направление сервисных уведомлений, включая обновления политик и уведомления о выплатах; (ж) анализ использования платформы в целях улучшения функциональности; (з) соблюдение применимых правовых и регуляторных обязательств.`,
  },
  {
    title: "5. Передача данных третьим лицам",
    text: `Мы не продаём, не сдаём в аренду и не передаём ваши персональные данные третьим лицам в маркетинговых целях. Данные могут быть переданы: (а) платёжным системам и финансовым организациям для обработки транзакций (включая Stripe там, где это применимо — полный список субобработчиков в разделе 13); (б) провайдерам услуг верификации личности (KYC); (в) провайдерам облачной инфраструктуры, работающим в рамках соглашений об обработке данных; (г) регуляторным, правоохранительным или государственным органам по требованию закона; (д) профессиональным консультантам, включая юристов, аудиторов и бухгалтеров, обязанных соблюдать конфиденциальность.`,
  },
  {
    title: "6. Международная передача данных",
    text: `Ваши данные могут передаваться и обрабатываться в странах за пределами вашей юрисдикции. При такой передаче мы обеспечиваем наличие надлежащих гарантий, включая стандартные договорные положения, одобренные соответствующими органами по защите данных.`,
  },
  {
    title: "7. Сроки хранения данных",
    text: `Мы храним ваши персональные данные в течение срока, необходимого для достижения целей их сбора: (а) данные аккаунта — в течение срока действия аккаунта и 5 лет после его закрытия; (б) финансовые и транзакционные данные — 7 лет в соответствии с требованиями законодательства о финансовой отчётности; (в) данные верификации личности — в сроки, установленные законодательством ПОД/ФТ; (г) технические и пользовательские данные — до 24 месяцев. По истечении срока хранения данные надёжно удаляются или обезличиваются.`,
  },
  {
    title: "8. Ваши права",
    text: `В соответствии с применимым законодательством вы имеете следующие права в отношении своих персональных данных: (а) Право доступа — получить копию ваших персональных данных; (б) Право на исправление — исправить неточные или неполные данные; (в) Право на удаление — запросить удаление данных при отсутствии законных оснований для их обработки; (г) Право на ограничение — ограничить обработку в определённых случаях; (д) Право на переносимость — получить данные в структурированном машиночитаемом формате; (е) Право на возражение — возразить против обработки на основании законных интересов; (ж) Право отозвать согласие. Для реализации своих прав обращайтесь по адресу privacy@probcapital.com. Мы ответим в течение 30 дней.`,
  },
  {
    title: "9. Файлы cookie",
    text: `Мы используем файлы cookie и аналогичные технологии для работы и улучшения Сервиса. Строго необходимые cookie требуются для функционирования сайта и не могут быть отключены. Аналитические и технические cookie устанавливаются только с вашего согласия там, где это требуется применимым законодательством, и могут быть отключены в любой момент через настройки браузера или панель управления cookie. Сторонние рекламные или поведенческие cookie мы не используем. Для пользователей из ЕС/ЕЭЗ/Великобритании мы запрашиваем согласие перед установкой необязательных cookie.`,
  },
  {
    title: "10. Безопасность",
    text: `Мы применяем надлежащие технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, раскрытия, изменения или уничтожения. Меры включают шифрование TLS/SSL для данных при передаче, контроль доступа, регулярные проверки безопасности и обязательства персонала о конфиденциальности.`,
  },
  {
    title: "11. Изменения политики",
    text: `Мы можем периодически обновлять настоящую Политику конфиденциальности. О существенных изменениях зарегистрированные пользователи будут уведомлены по электронной почте или посредством заметного уведомления на сайте. Продолжение использования Сервиса после вступления изменений в силу означает их принятие.`,
  },
  {
    title: "12. Контакты",
    text: `По вопросам конфиденциальности, реализации прав субъектов данных или подаче жалоб обращайтесь к нашему ответственному за защиту данных: privacy@probcapital.com`,
  },
  {
    title: "13. Субобработчики персональных данных",
    text: `Следующие сторонние поставщики услуг могут обрабатывать ваши персональные данные от нашего имени в рамках соглашений об обработке данных. Список может обновляться по мере изменения состава провайдеров.

— Stripe, Inc. (США): обработка платежей и токенизация данных карт. Политика конфиденциальности: stripe.com/privacy
— [KYC-провайдер — уточняется]: верификация личности и аутентификация документов.
— [Хостинг-провайдер — уточняется]: облачная инфраструктура и хранение данных.
— [Аналитический провайдер — уточняется]: аналитика использования платформы (без межсайтового отслеживания).

В случае передачи данных субобработчикам за пределами вашей юрисдикции применяются надлежащие гарантии, включая стандартные договорные положения. Актуальный список — по запросу на privacy@probcapital.com.`,
  },
  {
    title: "14. Права жителей Калифорнии (CCPA/CPRA)",
    text: `Если вы являетесь жителем Калифорнии, вам предоставляются дополнительные права в соответствии с Законом о конфиденциальности потребителей Калифорнии (CCPA) и Законом о правах на конфиденциальность Калифорнии (CPRA):

(а) Право на получение информации: вы вправе запросить сведения о категориях и конкретных персональных данных, которые мы собрали о вас, источниках, целях обработки и третьих лицах, которым передаются данные.

(б) Право на удаление: вы вправе запросить удаление ваших персональных данных, за исключением случаев, предусмотренных законом.

(в) Право на исправление: вы вправе запросить исправление неточных персональных данных.

(г) Право на отказ от продажи или передачи данных: мы не продаём и не передаём ваши персональные данные в целях межконтекстной поведенческой рекламы по смыслу CPRA.

(д) Право на ограничение использования чувствительных данных: мы используем чувствительные персональные данные (например, удостоверения личности) только в той мере, в которой это необходимо для предоставления Сервиса и соблюдения правовых обязательств.

(е) Право на недискриминацию: мы не будем дискриминировать вас за реализацию прав по CCPA/CPRA.

Для реализации прав жителей Калифорнии обращайтесь: privacy@probcapital.com. Мы ответим на верифицированные запросы в течение 45 дней в соответствии с законодательством.`,
  }
];

export default function PrivacyPage() {
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
            {ru ? "Политика конфиденциальности" : "Privacy Policy"}
          </h1>
          <p style={{ color: "#555A72", fontSize: "14px" }}>{ru ? "Последнее обновление: апрель 2026" : "Last updated: April 2026"}</p>
        </div>

        {/* Entity block */}
        <div style={{
          background: "linear-gradient(135deg, rgba(0,212,170,0.05) 0%, rgba(0,150,255,0.03) 100%)",
          border: "1px solid rgba(0,212,170,0.15)", borderRadius: "16px",
          padding: "20px 24px", marginBottom: "40px",
        }}>
          <div style={{ fontSize: "10px", color: "#00D4AA", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
            {ru ? "Юридическое лицо — оператор данных" : "Legal Entity — Data Controller"}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "14px" }}>
            {[
              { l: ru ? "Компания" : "Company", v: "Probcapital LLC" },
              { l: ru ? "Штат" : "State", v: "Delaware, USA" },
              { l: ru ? "Рег. номер" : "File Number", v: "#10541343" },
              { l: ru ? "Юридический адрес" : "Registered Office", v: "8 The Green, Suite B, Dover, DE 19901" },
            ].map(item => (
              <div key={item.l}>
                <div style={{ fontSize: "10px", color: "#5A6278", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" }}>{item.l}</div>
                <div style={{ fontSize: "13px", color: "#D0D8F0", fontWeight: 600 }}>{item.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {sections.map((s) => {
            const isCCPA = s.title.startsWith("14.");
            return (
              <div key={s.title} id={isCCPA ? "ccpa" : undefined} style={{ borderLeft: "2px solid rgba(0,212,170,0.25)", paddingLeft: "20px" }}>
                <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#00D4AA", marginBottom: "10px" }}>{s.title}</h2>
                <p style={{ color: "#B0B8D1", fontSize: "15px", lineHeight: 1.85, margin: 0, whiteSpace: "pre-line" }}>{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
