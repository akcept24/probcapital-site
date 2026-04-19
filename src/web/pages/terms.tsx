import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

const sectionsEn = [
  {
    title: "1. Acceptance of Terms",
    text: `These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "Trader") and ProbCapital ("Company", "we", "us"). By accessing or using any part of the probcapital.com website or any associated services, you unconditionally agree to be bound by these Terms. If you do not agree to all provisions of these Terms, you must immediately cease using the Service.`,
  },
  {
    title: "2. Nature of the Service",
    text: `ProbCapital is a proprietary trading evaluation platform. The Company does not provide brokerage services, investment advice, or financial products regulated under applicable securities law. All trading accounts provided by ProbCapital are simulated environments. No real capital is deployed on financial markets on behalf of Users. Payouts to Traders are made by the Company from its own operational funds based solely on simulated trading performance metrics. Nothing in these Terms shall constitute an offer or solicitation to buy or sell any financial instrument.`,
  },
  {
    title: "3. Eligibility",
    text: `To use the Service you must: (a) be at least 18 years of age; (b) be a natural person — corporate or institutional participation is not permitted; (c) not be a resident of any jurisdiction where the Service is prohibited or restricted by applicable law; (d) not be subject to any international sanctions administered by the UN, EU, OFAC, or equivalent authorities. The Company reserves the right to terminate any account found to be in violation of eligibility requirements without prior notice or refund.`,
  },
  {
    title: "4. Account Registration",
    text: `You agree to provide accurate, current, and complete information during registration. You are solely responsible for maintaining the confidentiality of your login credentials. You must notify the Company immediately at support@probcapital.com upon any unauthorized access to your account. The Company shall not be liable for any loss arising from unauthorized use of your account due to your failure to safeguard credentials. Creation of multiple accounts by a single person is strictly prohibited and will result in permanent termination of all associated accounts.`,
  },
  {
    title: "5. Evaluation Fees and Refunds",
    text: `All evaluation fees are one-time payments and are non-refundable, except as expressly set out in this clause. The evaluation fee will be credited back to the Trader upon their first approved profit withdrawal from a funded account, provided that the withdrawal request meets the minimum threshold. Fees are not refunded in the event of account termination due to rule violations, fraud, or breach of these Terms. In jurisdictions where consumer protection legislation mandates a statutory right of withdrawal, such rights are hereby acknowledged in accordance with applicable law.`,
  },
  {
    title: "6. Funded Account and Profit Sharing",
    text: `Upon successfully passing all evaluation phases, the Trader will be granted access to a simulated funded account. The profit split applicable to your plan (Standard: 80%; Aggressive: 90%) represents the Trader's share of net simulated profits withdrawn from the funded account. Payouts are processed within 24 hours of an approved withdrawal request. The Company reserves the right to withhold or delay a payout pending completion of identity verification (KYC) or in cases of suspected rule violations.`,
  },
  {
    title: "7. Prohibited Activities",
    text: `The following activities are strictly prohibited and will result in immediate account termination without refund: (a) use of any form of arbitrage, latency exploitation, or tick scalping strategy; (b) copying, mirroring, or synchronizing trades between multiple ProbCapital accounts; (c) use of automated systems or Expert Advisors employing prohibited strategies as defined in the Trading Rules; (d) providing false identity information or using another person's identity during KYC; (e) engaging in any activity that constitutes market manipulation, money laundering, or fraud.`,
  },
  {
    title: "8. Intellectual Property",
    text: `All content on probcapital.com, including but not limited to text, graphics, logos, software, and platform design, is the exclusive intellectual property of ProbCapital and is protected by applicable copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without prior written consent from the Company.`,
  },
  {
    title: "9. Limitation of Liability",
    text: `To the maximum extent permitted by applicable law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of the Service. The Company's total aggregate liability to you for any claims arising under these Terms shall not exceed the total fees paid by you to the Company in the twelve (12) months preceding the claim. Nothing in this clause limits liability for fraud, gross negligence, or death and personal injury caused by the Company's negligence.`,
  },
  {
    title: "10. Governing Law and Dispute Resolution",
    text: `These Terms are governed by and construed in accordance with applicable commercial law. Any disputes arising out of or in connection with these Terms shall first be submitted to good-faith negotiation. If unresolved within 30 days, disputes shall be referred to binding arbitration. The Company and the User agree to attempt to resolve disputes amicably before initiating any formal legal proceedings.`,
  },
  {
    title: "11. Amendments",
    text: `The Company reserves the right to modify these Terms at any time. Material changes will be communicated to registered Users via email or a prominent notice on the website at least 14 days before taking effect. Your continued use of the Service after the effective date constitutes acceptance of the amended Terms. If you do not agree to the amended Terms, you must cease using the Service before the effective date.`,
  },
  {
    title: "12. Contact",
    text: `For any questions regarding these Terms, please contact us at: legal@probcapital.com`,
  },
];

const sectionsRu = [
  {
    title: "1. Принятие условий",
    text: `Настоящие Условия использования («Условия») являются юридически обязывающим соглашением между вами («Пользователь», «Трейдер») и ProbCapital («Компания», «мы», «нас»). Получая доступ к сайту probcapital.com или используя любые связанные с ним сервисы, вы безусловно соглашаетесь соблюдать настоящие Условия. Если вы не принимаете какие-либо положения настоящих Условий, вы обязаны немедленно прекратить использование Сервиса.`,
  },
  {
    title: "2. Характер сервиса",
    text: `ProbCapital является платформой для оценки трейдеров. Компания не предоставляет брокерские услуги, инвестиционные рекомендации или финансовые продукты, регулируемые законодательством о ценных бумагах. Все торговые счета, предоставляемые ProbCapital, являются имитационными. Реальный капитал на финансовых рынках от имени Пользователей не размещается. Выплаты Трейдерам производятся Компанией из собственных операционных средств исключительно на основании показателей имитационной торговли. Ничто в настоящих Условиях не является офертой или предложением купить или продать какой-либо финансовый инструмент.`,
  },
  {
    title: "3. Требования к пользователям",
    text: `Для использования Сервиса вы должны: (а) быть не моложе 18 лет; (б) являться физическим лицом — участие корпоративных и институциональных структур не допускается; (в) не являться резидентом юрисдикции, в которой использование Сервиса запрещено или ограничено применимым законодательством; (г) не быть включены в санкционные списки ООН, ЕС, OFAC или аналогичных органов. Компания оставляет за собой право прекратить действие аккаунта, нарушающего требования к пользователям, без предварительного уведомления и возврата средств.`,
  },
  {
    title: "4. Регистрация аккаунта",
    text: `Вы обязуетесь предоставлять достоверные, актуальные и полные данные при регистрации. Вы несёте единоличную ответственность за сохранение конфиденциальности своих учётных данных. В случае несанкционированного доступа к вашему аккаунту вы обязаны незамедлительно уведомить Компанию по адресу support@probcapital.com. Компания не несёт ответственности за убытки, возникшие вследствие несанкционированного использования вашего аккаунта из-за несоблюдения вами конфиденциальности учётных данных. Создание нескольких аккаунтов одним лицом строго запрещено и влечёт постоянную блокировку всех связанных аккаунтов.`,
  },
  {
    title: "5. Оплата и возврат средств",
    text: `Все оценочные взносы являются разовыми платежами и не подлежат возврату, за исключением случаев, прямо предусмотренных настоящим разделом. Оценочный взнос возвращается Трейдеру при первом одобренном выводе прибыли с финансируемого счёта при условии соответствия запроса минимальной сумме вывода. Взносы не возвращаются в случае прекращения аккаунта вследствие нарушения правил, мошенничества или нарушения настоящих Условий. В юрисдикциях, где законодательство о защите прав потребителей предусматривает право на отказ от договора, такое право признаётся в соответствии с применимым законодательством.`,
  },
  {
    title: "6. Финансируемый счёт и распределение прибыли",
    text: `После успешного прохождения всех фаз оценки Трейдер получает доступ к имитационному финансируемому счёту. Сплит прибыли, применяемый к вашему тарифу (Стандартный: 80%; Агрессивный: 90%), представляет долю Трейдера от чистой имитационной прибыли, выведенной с финансируемого счёта. Выплаты обрабатываются в течение 24 часов с момента одобрения запроса на вывод. Компания оставляет за собой право приостановить или задержать выплату до завершения верификации личности (KYC) или в случае подозрения в нарушении правил.`,
  },
  {
    title: "7. Запрещённые действия",
    text: `Следующие действия строго запрещены и влекут немедленное закрытие аккаунта без возврата средств: (а) использование арбитража, задержки котировок или скальпинга с использованием тиков; (б) копирование, отражение или синхронизация сделок между несколькими аккаунтами ProbCapital; (в) использование автоматических систем или советников, применяющих запрещённые стратегии, определённые в Правилах торговли; (г) предоставление ложных персональных данных или использование чужих данных при верификации; (д) любые действия, представляющие собой манипулирование рынком, отмывание денег или мошенничество.`,
  },
  {
    title: "8. Интеллектуальная собственность",
    text: `Весь контент на probcapital.com, включая, но не ограничиваясь текстами, графикой, логотипами, программным обеспечением и дизайном платформы, является исключительной интеллектуальной собственностью ProbCapital и охраняется применимым законодательством об авторских правах, товарных знаках и иных объектах интеллектуальной собственности. Воспроизведение, распространение, изменение или создание производных материалов без предварительного письменного согласия Компании запрещено.`,
  },
  {
    title: "9. Ограничение ответственности",
    text: `В максимальной степени, допускаемой применимым законодательством, Компания не несёт ответственности за какие-либо косвенные, случайные, специальные, последующие или штрафные убытки, включая, но не ограничиваясь упущенной выгодой, потерей данных или деловой репутации, возникшие в связи с использованием Сервиса. Совокупная ответственность Компании перед вами по любым претензиям в рамках настоящих Условий не превышает общей суммы взносов, уплаченных вами Компании за 12 месяцев, предшествующих предъявлению претензии. Ничто в настоящем разделе не ограничивает ответственность за мошенничество, грубую небрежность или причинение смерти и вреда здоровью.`,
  },
  {
    title: "10. Применимое право и разрешение споров",
    text: `Настоящие Условия регулируются и толкуются в соответствии с применимым коммерческим законодательством. Любые споры, возникающие из настоящих Условий или в связи с ними, подлежат урегулированию путём добросовестных переговоров. Если спор не урегулирован в течение 30 дней, он передаётся на рассмотрение обязательного арбитража. Стороны обязуются предпринять все усилия для досудебного урегулирования разногласий.`,
  },
  {
    title: "11. Изменение условий",
    text: `Компания оставляет за собой право вносить изменения в настоящие Условия в любое время. Об существенных изменениях зарегистрированные Пользователи будут уведомлены по электронной почте или посредством заметного уведомления на сайте не менее чем за 14 дней до вступления изменений в силу. Продолжение использования Сервиса после даты вступления изменений в силу означает принятие изменённых Условий. Если вы не согласны с изменёнными Условиями, вы обязаны прекратить использование Сервиса до даты их вступления в силу.`,
  },
  {
    title: "12. Контакты",
    text: `По вопросам, касающимся настоящих Условий, обращайтесь: legal@probcapital.com`,
  },
];

export default function TermsPage() {
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
            {ru ? "Условия использования" : "Terms of Service"}
          </h1>
          <p style={{ color: "#555A72", fontSize: "14px" }}>{ru ? "Последнее обновление: апрель 2026" : "Last updated: April 2026"}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {sections.map((s) => (
            <div key={s.title}>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#00D4AA", marginBottom: "10px" }}>{s.title}</h2>
              <p style={{ color: "#B0B8D1", fontSize: "15px", lineHeight: 1.85, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "48px", padding: "20px 24px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "#555A72", fontSize: "13px", lineHeight: 1.7 }}>
          {ru
            ? "Настоящие Условия составлены на русском и английском языках. В случае расхождений приоритет имеет английская версия."
            : "These Terms are available in English and Russian. In case of discrepancies, the English version shall prevail."}
        </div>
      </div>
      <Footer />
    </div>
  );
}
