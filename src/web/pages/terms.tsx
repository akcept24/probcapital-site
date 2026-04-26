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

const DisclaimerBox = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: "linear-gradient(135deg, rgba(0,212,170,0.07) 0%, rgba(0,140,255,0.04) 100%)",
    border: "1px solid rgba(0,212,170,0.22)", borderRadius: "16px",
    padding: "24px 28px", marginBottom: "40px",
  }}>
    <div style={{ fontSize: "10px", color: "#00D4AA", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
      ⚖️ &nbsp;Important Legal Notice
    </div>
    <div style={{ color: "#C0C8E0", fontSize: "14px", lineHeight: 1.85 }}>{children}</div>
  </div>
);

const WarnBox = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    background: "rgba(255,160,60,0.05)", border: "1px solid rgba(255,160,60,0.18)",
    borderRadius: "12px", padding: "16px 20px", marginTop: "12px",
    color: "#C8BEA8", fontSize: "13.5px", lineHeight: 1.8,
  }}>⚠️ &nbsp;{children}</div>
);

/* ─── Page ─── */
export default function TermsPage() {
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
            {ru ? "Условия использования" : "Terms of Service"}
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
            {ru ? "Сторона соглашения" : "Contracting Entity"}
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

        {/* ── Legal Disclaimer Box ── */}
        {!ru ? (
          <DisclaimerBox>
            <strong style={{ color: "#E0E8FF" }}>ProbCapital LLC is a technology company that provides Proprietary Trading Skill Evaluation and Educational Simulation software.</strong> The Company is <strong style={{ color: "#E0E8FF" }}>NOT a broker-dealer, NOT a registered investment adviser, NOT an investment firm, and does NOT manage, hold, or control client funds of any kind.</strong> All evaluation environments are software simulations. No real capital is deployed on any financial market on behalf of users. Nothing contained in these Terms of Service, on the Company's website, or within the platform constitutes investment advice, a solicitation, or an offer to buy or sell any financial instrument or security.
          </DisclaimerBox>
        ) : (
          <DisclaimerBox>
            <strong style={{ color: "#E0E8FF" }}>ProbCapital LLC — технологическая компания, предоставляющая программное обеспечение для оценки торговых навыков и образовательного симулятора торговли.</strong> Компания <strong style={{ color: "#E0E8FF" }}>НЕ является брокером-дилером, НЕ является зарегистрированным инвестиционным советником, НЕ является инвестиционной фирмой и НЕ управляет, не хранит и не контролирует клиентские средства любого рода.</strong> Все оценочные среды являются программными симуляциями. Реальный капитал на финансовых рынках от имени пользователей не размещается. Ничто в настоящих Условиях, на сайте Компании или в платформе не является инвестиционной консультацией, предложением или призывом к покупке или продаже каких-либо финансовых инструментов или ценных бумаг.
          </DisclaimerBox>
        )}

        {/* ── Sections ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

          <S title={ru ? "1. Принятие условий" : "1. Acceptance of Terms"}>
            {ru ? (
              <p>Настоящие Условия использования («Условия») представляют собой юридически обязывающее соглашение между вами («Пользователь», «Клиент») и <strong style={{ color: "#E0E8FF" }}>ProbCapital LLC</strong>, компанией с ограниченной ответственностью, зарегистрированной в штате Делавэр (регистрационный номер: 10541343). Используя веб-сайт probcapital.com, приложение или любой сервис Компании, вы подтверждаете, что прочитали, поняли и безусловно принимаете настоящие Условия. Если вы не согласны с каким-либо положением, вы обязаны немедленно прекратить использование сервиса.</p>
            ) : (
              <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "Client") and <strong style={{ color: "#E0E8FF" }}>ProbCapital LLC</strong>, a Limited Liability Company organized under the laws of the State of Delaware (File Number: 10541343). By accessing or using the probcapital.com website, application, or any service offered by the Company, you confirm that you have read, understood, and unconditionally agree to be bound by these Terms. If you do not agree with any provision herein, you must immediately discontinue use of the Service.</p>
            )}
          </S>

          <S title={ru ? "2. Определение сервиса" : "2. Nature and Definition of the Service"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "12px" }}>ProbCapital предоставляет <strong style={{ color: "#E0E8FF" }}>проприетарное программное обеспечение для оценки торговых навыков и образовательного симулятора торговли</strong> («Сервис»). Сервис включает:</p>
                <Ul items={[
                  "Доступ к программной симулированной торговой среде для оценки торговых навыков;",
                  "Инструменты анализа производительности и метрик торговых стратегий;",
                  "Интерактивную панель управления процессом оценки;",
                  "Образовательные материалы и симуляционные сценарии.",
                ]} />
                <p style={{ marginTop: "12px" }}>Компания <strong style={{ color: "#E0E8FF" }}>не является</strong> брокером, дилером, инвестиционным советником, управляющей компанией или финансовым посредником. Все торговые среды являются исключительно программными симуляциями. Компания не управляет реальными активами пользователей и не размещает реальный капитал на финансовых рынках.</p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "12px" }}>ProbCapital provides a <strong style={{ color: "#E0E8FF" }}>Proprietary Trading Skill Evaluation and Educational Simulation</strong> service ("Service"). The Service comprises:</p>
                <Ul items={[
                  "Access to a proprietary software-based simulated trading environment for skill evaluation purposes;",
                  "Performance analysis and trading strategy metrics tooling;",
                  "An interactive evaluation process management dashboard;",
                  "Educational resources and simulation scenario modules.",
                ]} />
                <p style={{ marginTop: "12px" }}>The Company is <strong style={{ color: "#E0E8FF" }}>NOT</strong> a broker-dealer, investment adviser, fund manager, or financial intermediary of any kind. All trading environments are software simulations only. The Company does not manage real user assets, does not deploy real capital on financial markets, and does not offer any form of investment product or financial service regulated under applicable securities law.</p>
              </>
            )}
          </S>

          <S title={ru ? "3. Требования к пользователям" : "3. Eligibility Requirements"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "10px" }}>Для использования Сервиса вы должны соответствовать всем следующим требованиям:</p>
                <Ul items={[
                  "Возраст: не моложе 18 лет на дату регистрации;",
                  "Физическое лицо: регистрация доступна только физическим лицам. Корпоративная или институциональная регистрация не допускается;",
                  "Юрисдикция: использование Сервиса не должно нарушать законодательство вашей юрисдикции;",
                  "Санкции: вы не должны быть включены в санкционные списки ООН, OFAC (США), ЕС или эквивалентных органов;",
                  "Один аккаунт: каждому физическому лицу разрешён только один аккаунт.",
                ]} />
                <p style={{ marginTop: "12px" }}>Компания оставляет за собой право проверять соответствие требованиям и прекращать действие аккаунтов при нарушении без предварительного уведомления.</p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "10px" }}>To access and use the Service, you must satisfy all of the following eligibility requirements:</p>
                <Ul items={[
                  "Age: you must be at least 18 years of age at the time of registration;",
                  "Natural person: registration is available to natural persons only. Corporate, institutional, or multi-party registrations are not permitted;",
                  "Jurisdiction: your use of the Service must not violate the laws or regulations of your jurisdiction of residence;",
                  "Sanctions: you must not be listed on any sanctions list administered by the UN, OFAC (USA), EU, or equivalent authorities;",
                  "Single account: each individual is permitted one account only.",
                ]} />
                <p style={{ marginTop: "12px" }}>The Company reserves the right to verify eligibility at any time and to terminate accounts found to be in violation, without prior notice.</p>
              </>
            )}
          </S>

          <S title={ru ? "4. Регистрация и безопасность аккаунта" : "4. Account Registration and Security"}>
            {ru ? (
              <p>Вы обязуетесь предоставлять достоверные, актуальные и полные сведения при регистрации и поддерживать их актуальность. Вы несёте единоличную ответственность за сохранность своих учётных данных. О любом несанкционированном доступе к аккаунту вы обязаны незамедлительно уведомить Компанию по адресу <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", textDecoration: "none" }}>support@probcapital.com</a>. Компания не несёт ответственности за убытки, возникшие вследствие несоблюдения вами конфиденциальности учётных данных. Создание нескольких аккаунтов одним лицом строго запрещено и влечёт немедленную блокировку всех связанных аккаунтов.</p>
            ) : (
              <p>You agree to provide accurate, current, and complete information during registration and to keep such information updated. You are solely responsible for maintaining the confidentiality of your login credentials and for all activity occurring under your account. You must notify the Company immediately at <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", textDecoration: "none" }}>support@probcapital.com</a> upon any suspected unauthorized access. The Company shall not be liable for any loss arising from unauthorized use of your account resulting from your failure to safeguard credentials. Creation of multiple accounts by a single individual is strictly prohibited and will result in immediate permanent termination of all associated accounts without refund.</p>
            )}
          </S>

          <S title={ru ? "5. Оплата и возврат средств" : "5. Fees and Payments"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "12px" }}>Оплата оценочного взноса предоставляет доступ к программному обеспечению для оценки торговых навыков на один процесс оценки. К оплате применяются следующие условия:</p>
                <Ul items={[
                  "Все оценочные взносы взимаются в полном объёме в момент покупки.",
                  "Взносы не подлежат возврату после начала использования Сервиса (первый ордер или первое применение учётных данных).",
                  "14-дневный период охлаждения применяется при условии, что Сервис не был использован — подробнее в Политике возврата средств.",
                  "Все транзакции обрабатываются авторизованными сторонними платёжными процессорами. Компания не хранит данные платёжных карт.",
                  "Оценочный взнос зачисляется обратно клиенту при первой одобренной выплате по результатам оценки согласно условиям программы.",
                ]} />
                <p style={{ marginTop: "12px" }}>Полные условия возврата изложены в нашей <a href="/refund" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>Политике возврата средств</a>, которая является неотъемлемой частью настоящих Условий.</p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "12px" }}>Payment of an evaluation fee grants access to the Skill Evaluation Software for one evaluation session. The following terms apply to all fees and payments:</p>
                <Ul items={[
                  "All evaluation fees are charged in full at the time of purchase.",
                  "Fees are non-refundable once the Service has been accessed (first trade placed or credentials first used).",
                  "A 14-day cooling-off period applies where the Service has not been used — see the Refund Policy for full details.",
                  "All transactions are processed by authorized third-party payment processors. The Company does not store card payment data.",
                  "The evaluation fee is credited back to the client upon their first approved performance-based payout under the evaluation program terms.",
                ]} />
                <p style={{ marginTop: "12px" }}>Full refund terms are set out in our <a href="/refund" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>Refund Policy</a>, which is incorporated by reference into these Terms and forms part of this agreement.</p>
              </>
            )}
          </S>

          <S title={ru ? "6. Программа оценки навыков" : "6. Skill Evaluation Program"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "12px" }}>Программа оценки навыков ProbCapital — это структурированный процесс анализа торговой дисциплины и управления рисками в симулированной среде. После успешного прохождения всех этапов оценки клиент может получить доступ к расширенной симулированной торговой среде с условиями выплат, основанных на показателях производительности.</p>
                <WarnBox>Выплаты по результатам производительности производятся ProbCapital LLC из собственных операционных средств. Они не являются инвестиционной прибылью, доходностью ценных бумаг или какими-либо гарантированными доходами. Прошлые результаты оценки не гарантируют будущих выплат.</WarnBox>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "12px" }}>The ProbCapital Skill Evaluation Program is a structured process for assessing trading discipline and risk management within a software simulation environment. Upon successful completion of all required evaluation phases, a client may gain access to an expanded simulation environment with performance-based payout terms.</p>
                <WarnBox>Performance-based payouts are made by ProbCapital LLC from its own operating funds. They do not constitute investment returns, securities income, or any form of guaranteed earnings. Past evaluation performance does not guarantee future payouts.</WarnBox>
              </>
            )}
          </S>

          <S title={ru ? "7. Запрещённые виды деятельности" : "7. Prohibited Activities"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "10px" }}>Следующие действия строго запрещены и влекут немедленное закрытие аккаунта без возврата средств:</p>
                <Ul items={[
                  "Арбитраж, эксплуатация задержки котировок, тик-скальпинг или иные стратегии, использующие технические несовершенства платформы;",
                  "Копирование, отражение или синхронизация сделок между несколькими аккаунтами ProbCapital;",
                  "Использование автоматизированных систем или советников, применяющих запрещённые стратегии согласно Торговым правилам;",
                  "Предоставление ложных персональных данных, использование чужих данных или обход верификации личности;",
                  "Любые действия, представляющие собой манипулирование, мошенничество, отмывание денег или нарушение санкций;",
                  "Передача, продажа или предоставление доступа к аккаунту третьим лицам.",
                ]} />
              </>
            ) : (
              <>
                <p style={{ marginBottom: "10px" }}>The following activities are strictly prohibited and will result in immediate account termination without refund:</p>
                <Ul items={[
                  "Arbitrage, latency exploitation, tick-scalping, or any strategy that exploits platform technical imperfections;",
                  "Copying, mirroring, or synchronizing trades across multiple ProbCapital accounts;",
                  "Use of automated systems or Expert Advisors employing strategies prohibited under the Trading Rules;",
                  "Providing false identity information, using another person's identity, or circumventing identity verification;",
                  "Any activity constituting market manipulation, fraud, money laundering, or sanctions evasion;",
                  "Transferring, selling, or granting third-party access to any account.",
                ]} />
              </>
            )}
          </S>

          <S title={ru ? "8. Интеллектуальная собственность" : "8. Intellectual Property"}>
            {ru ? (
              <p>Весь контент, программное обеспечение, алгоритмы, торговые марки, логотипы, дизайн и материалы, доступные на сайте probcapital.com и в платформе ProbCapital, являются исключительной собственностью ProbCapital LLC и защищены действующим законодательством США и международным законодательством об интеллектуальной собственности. Вам предоставляется ограниченная, непередаваемая, отзывная лицензия на использование Сервиса исключительно в личных некоммерческих целях. Любое воспроизведение, распространение, изменение или создание производных материалов без предварительного письменного согласия Компании строго запрещено.</p>
            ) : (
              <p>All content, software, algorithms, trademarks, logos, design elements, and materials available on probcapital.com and within the ProbCapital platform are the exclusive property of ProbCapital LLC and are protected under applicable US and international intellectual property law. You are granted a limited, non-transferable, revocable license to use the Service solely for your own personal, non-commercial evaluation purposes. Any reproduction, distribution, modification, or creation of derivative works without the prior written consent of the Company is strictly prohibited.</p>
            )}
          </S>

          <S title={ru ? "9. Отказ от гарантий" : "9. Disclaimer of Warranties"}>
            {ru ? (
              <p>Сервис предоставляется на условиях «как есть» и «по мере доступности» без каких-либо явных или подразумеваемых гарантий, включая, но не ограничиваясь гарантиями товарной пригодности, соответствия определённым целям, ненарушения прав третьих лиц или непрерывности работы. <strong style={{ color: "#E0E8FF" }}>Компания не гарантирует какого-либо финансового результата от использования Сервиса.</strong> Использование Сервиса осуществляется исключительно на ваш риск.</p>
            ) : (
              <p>The Service is provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted operation. <strong style={{ color: "#E0E8FF" }}>The Company makes no guarantee of any financial outcome from use of the Service.</strong> Your use of the Service is entirely at your own risk.</p>
            )}
          </S>

          <S title={ru ? "10. Ограничение ответственности" : "10. Limitation of Liability"}>
            {ru ? (
              <p>В максимальной степени, допускаемой применимым законодательством, ProbCapital LLC не несёт ответственности за косвенные, случайные, специальные, последующие или штрафные убытки, включая упущенную выгоду, потерю данных или деловой репутации. Совокупная ответственность Компании перед вами не может превышать общей суммы взносов, уплаченных вами за 12 месяцев, предшествующих предъявлению претензии. Данное ограничение не применяется в случаях умысла, грубой халатности или причинения вреда здоровью по вине Компании.</p>
            ) : (
              <p>To the maximum extent permitted by applicable law, ProbCapital LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of the Service. The Company's total aggregate liability to you for any claims arising under these Terms shall not exceed the total fees paid by you to the Company in the twelve (12) months immediately preceding the claim. Nothing herein limits liability for intentional misconduct, gross negligence, or personal injury caused by the Company's fault.</p>
            )}
          </S>

          <S title={ru ? "11. Применимое право и разрешение споров" : "11. Governing Law and Dispute Resolution"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "12px" }}>Настоящие Условия регулируются и толкуются <strong style={{ color: "#E0E8FF" }}>в соответствии с законодательством штата Делавэр, США</strong>, без учёта коллизионных норм.</p>
                <Ul items={[
                  "Все споры, возникающие из настоящих Условий или в связи с ними, подлежат урегулированию путём добросовестных переговоров в течение 30 дней с момента получения письменного уведомления.",
                  "Если спор не урегулирован в переговорном порядке, он передаётся на рассмотрение обязательного арбитража в соответствии с правилами Американской арбитражной ассоциации (AAA).",
                  "Арбитражное разбирательство проводится в штате Делавэр, США, либо в онлайн-формате по согласованию сторон.",
                  "Стороны отказываются от права на коллективный иск в объёме, допустимом применимым законодательством.",
                ]} />
              </>
            ) : (
              <>
                <p style={{ marginBottom: "12px" }}>These Terms shall be governed by and construed in accordance with <strong style={{ color: "#E0E8FF" }}>the laws of the State of Delaware, United States of America</strong>, without regard to its conflict of law provisions.</p>
                <Ul items={[
                  "Any dispute arising out of or in connection with these Terms shall first be subject to good-faith negotiation for a period of thirty (30) days following written notice.",
                  "If unresolved through negotiation, disputes shall be submitted to binding arbitration under the rules of the American Arbitration Association (AAA).",
                  "Arbitration shall be seated in the State of Delaware, USA, or conducted remotely by mutual agreement.",
                  "Each party waives any right to a class action lawsuit to the extent permitted by applicable law.",
                ]} />
              </>
            )}
          </S>

          <S title={ru ? "12. Конфиденциальность" : "12. Privacy"}>
            {ru ? (
              <p>Сбор, использование и хранение ваших персональных данных регулируются нашей <a href="/privacy" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>Политикой конфиденциальности</a>, которая является неотъемлемой частью настоящих Условий. Используя Сервис, вы соглашаетесь с обработкой ваших данных в соответствии с Политикой конфиденциальности.</p>
            ) : (
              <p>The collection, use, and storage of your personal data is governed by our <a href="/privacy" style={{ color: "#00D4AA", textDecoration: "none", fontWeight: 600 }}>Privacy Policy</a>, which is incorporated by reference into these Terms and forms part of this agreement. By using the Service, you consent to the processing of your personal data as described in the Privacy Policy.</p>
            )}
          </S>

          <S title={ru ? "13. Изменение условий" : "13. Amendments to Terms"}>
            {ru ? (
              <p>Компания оставляет за собой право вносить изменения в настоящие Условия в любое время. Об существенных изменениях зарегистрированные пользователи будут уведомлены по электронной почте или посредством заметного уведомления на сайте не менее чем за <strong style={{ color: "#E0E8FF" }}>14 календарных дней</strong> до вступления изменений в силу. Продолжение использования Сервиса после даты вступления изменений в силу означает принятие обновлённых Условий. Если вы не согласны с изменёнными Условиями, вы обязаны прекратить использование Сервиса до даты их вступления в силу.</p>
            ) : (
              <p>The Company reserves the right to modify these Terms at any time. Material changes will be communicated to registered users via email or a prominent notice on the website at least <strong style={{ color: "#E0E8FF" }}>14 calendar days</strong> prior to the effective date. Your continued use of the Service after the effective date of any amendment constitutes your acceptance of the updated Terms. If you do not agree to the amended Terms, you must discontinue use of the Service before the effective date.</p>
            )}
          </S>

          <S title={ru ? "14. Делимость положений" : "14. Severability"}>
            {ru ? (
              <p>Если какое-либо положение настоящих Условий будет признано судом или компетентным органом недействительным, незаконным или неисполнимым, такое положение считается исключённым в минимально необходимой мере, а остальные положения Условий сохраняют полную юридическую силу.</p>
            ) : (
              <p>If any provision of these Terms is found by a court or competent authority to be invalid, unlawful, or unenforceable, such provision shall be deemed severed to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.</p>
            )}
          </S>

          <S title={ru ? "15. Контакты" : "15. Contact Information"}>
            {ru ? (
              <>
                <p style={{ marginBottom: "14px" }}>По вопросам, касающимся настоящих Условий, обращайтесь:</p>
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px", padding: "20px 24px",
                }}>
                  <div style={{ marginBottom: "6px" }}>⚖️ <a href="mailto:legal@probcapital.com" style={{ color: "#00D4AA", fontWeight: 600, textDecoration: "none" }}>legal@probcapital.com</a></div>
                  <div style={{ marginBottom: "6px" }}>📧 <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", fontWeight: 600, textDecoration: "none" }}>support@probcapital.com</a></div>
                  <div style={{ fontSize: "13px", color: "#5A6278", marginTop: "8px" }}>ProbCapital LLC · 8 The Green, Suite B · Dover, DE 19901 · USA</div>
                </div>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "14px" }}>For any questions or notices relating to these Terms, please contact:</p>
                <div style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px", padding: "20px 24px",
                }}>
                  <div style={{ marginBottom: "6px" }}>⚖️ <a href="mailto:legal@probcapital.com" style={{ color: "#00D4AA", fontWeight: 600, textDecoration: "none" }}>legal@probcapital.com</a></div>
                  <div style={{ marginBottom: "6px" }}>📧 <a href="mailto:support@probcapital.com" style={{ color: "#00D4AA", fontWeight: 600, textDecoration: "none" }}>support@probcapital.com</a></div>
                  <div style={{ fontSize: "13px", color: "#5A6278", marginTop: "8px" }}>ProbCapital LLC · 8 The Green, Suite B · Dover, DE 19901 · USA</div>
                </div>
              </>
            )}
          </S>

        </div>

        {/* Footer note */}
        <div style={{
          marginTop: "48px", padding: "20px 24px", borderRadius: "14px",
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
          fontSize: "13px", color: "#4A5268", lineHeight: 1.7,
        }}>
          {ru
            ? "Настоящие Условия составлены на английском и русском языках. В случае каких-либо расхождений английская версия имеет приоритет. Дата вступления в силу: апрель 2026."
            : "These Terms are available in English and Russian. In the event of any discrepancy, the English language version shall prevail. Effective date: April 2026."}

          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
            <span>{ru ? "Связанные документы:" : "Related documents:"}</span>
            {[
              { href: "/refund", label: ru ? "Политика возврата" : "Refund Policy" },
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

      </div>
      <Footer />
    </div>
  );
}
