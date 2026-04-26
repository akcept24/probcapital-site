import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLang } from "../i18n/LangContext";

const sectionsEn = [
  {
    title: "1. Important Notice",
    text: `This Risk Disclosure Statement is provided by ProbCapital LLC ("Company"), a technology provider registered in Delaware, USA (File #10541343), to ensure that all Users understand the nature and extent of risks associated with simulated financial trading within our Skill Evaluation Software. Please read this document carefully before participating in any Evaluation Process or Educational Trading Simulation.`,
  },
  {
    title: "2. Nature of Trading Activities",
    text: `All trading accounts provided by ProbCapital are simulated environments using real-time market data. No actual financial instruments are purchased or sold on live markets on behalf of Traders. Past performance of simulated trading is not indicative of results that would have been achieved in live market conditions due to differences in execution, slippage, liquidity, and psychological factors.`,
  },
  {
    title: "3. Market Risk",
    text: `Financial markets are subject to continuous price fluctuations driven by economic data releases, central bank decisions, geopolitical events, corporate announcements, and changes in market sentiment. These movements can be rapid, substantial, and unpredictable. A position that appears profitable at one moment may become a significant loss within seconds. Traders must understand that no trading strategy carries a guaranteed outcome.`,
  },
  {
    title: "4. Leverage Risk",
    text: `The use of leverage amplifies both the potential for profit and the potential for loss. A relatively small adverse market movement can result in losses that exceed the initial investment. The higher the leverage applied (Standard plan: 1:100; Aggressive plan: 1:200), the greater the risk exposure per unit of capital. Traders should only employ leverage levels they fully understand and have experience managing.`,
  },
  {
    title: "5. Volatility and Liquidity Risk",
    text: `Certain instruments within the simulation environment, particularly exotic currency pairs and small-cap indices, may experience periods of extreme volatility or reduced liquidity in the underlying real-time data feeds. During such periods, spreads may widen significantly, simulated order execution may be delayed, and stop-loss orders may be executed at materially worse prices than intended (slippage).`,
  },
  {
    title: "6. Technology and Connectivity Risk",
    text: `Trading via electronic platforms is subject to risks including but not limited to: internet connectivity failures, hardware malfunctions, software errors, data feed interruptions, and server outages. In the event of a technical failure during an open position, the Trader bears the risk of any resulting profit or loss. ProbCapital shall not be liable for any losses attributable to technology failures outside of its direct control.`,
  },
  {
    title: "7. Psychological Risk",
    text: `Trading involves significant psychological demands. Emotional decision-making, overconfidence following a winning streak, and impulsive actions following losses are among the most common causes of poor trading outcomes. Traders are advised to develop and rigorously adhere to a pre-defined trading plan and risk management framework.`,
  },
  {
    title: "8. Regulatory and Legal Risk",
    text: `The regulatory environment governing financial trading differs across jurisdictions and is subject to change. Changes in tax laws, financial regulations, or the legal status of certain instruments could materially affect a Trader's activities or the Company's ability to operate in certain regions.`,
  },
  {
    title: "9. No Investment Advice",
    text: `Nothing on probcapital.com or in any communication from ProbCapital constitutes investment advice, financial advice, trading advice, or any other form of advice. The Company does not recommend any particular trading strategy. Any trading decisions made by the User are made solely at the User's own risk and discretion.`,
  },
  {
    title: "10. Acknowledgement",
    text: `By registering with ProbCapital LLC and participating in any Evaluation Process or Educational Trading Simulation, you acknowledge that you have read, understood, and accept the risks described in this disclosure. You confirm that you are participating voluntarily in a software simulation service and that your participation is appropriate given your knowledge and experience.`,
  },
];

const sectionsRu = [
  {
    title: "1. Важное уведомление",
    text: `Настоящее Заявление о раскрытии рисков предоставляется ProbCapital LLC («Компания»), поставщиком технологий, зарегистрированным в штате Делавэр, США (Рег. №10541343), с целью обеспечить полное понимание Пользователями характера и масштабов рисков, связанных с имитационной торговлей в рамках нашего программного обеспечения для оценки навыков. Пожалуйста, внимательно ознакомьтесь с настоящим документом перед участием в Процессе оценки или Образовательной симуляции торговли.`,
  },
  {
    title: "2. Характер торговой деятельности",
    text: `Все торговые счета, предоставляемые ProbCapital, являются имитационными средами с использованием данных рынка в режиме реального времени. Реальные финансовые инструменты от имени Трейдеров на живых рынках не покупаются и не продаются. Прошлые результаты имитационной торговли не свидетельствуют о результатах, которые были бы достигнуты в реальных рыночных условиях, ввиду различий в исполнении, проскальзывании, ликвидности и психологических факторах.`,
  },
  {
    title: "3. Рыночный риск",
    text: `Финансовые рынки подвержены постоянным колебаниям цен под влиянием публикаций экономических данных, решений центральных банков, геополитических событий, корпоративных новостей и изменений настроений участников рынка. Такие движения могут быть стремительными, существенными и непредсказуемыми. Позиция, представляющаяся прибыльной в один момент, может превратиться в значительный убыток в течение нескольких секунд. Трейдеры должны понимать, что ни одна торговая стратегия не гарантирует результата.`,
  },
  {
    title: "4. Риск кредитного плеча",
    text: `Использование кредитного плеча увеличивает как потенциальную прибыль, так и потенциальные убытки. Относительно небольшое неблагоприятное движение рынка может привести к убыткам, превышающим первоначальные вложения. Чем выше применяемое плечо (Стандартный план: 1:100; Агрессивный план: 1:200), тем больше подверженность риску на единицу капитала. Трейдерам следует использовать только те уровни плеча, которые они полностью понимают и умеют контролировать.`,
  },
  {
    title: "5. Риск волатильности и ликвидности",
    text: `Отдельные инструменты в рамках симулированной среды, в особенности экзотические валютные пары и индексы с малой капитализацией, могут переживать периоды экстремальной волатильности или сниженной ликвидности в базовых потоках данных в реальном времени. В такие периоды спреды могут существенно расшириться, исполнение ордеров в симуляции может задерживаться, а стоп-лосс ордера могут исполняться по значительно худшим ценам, чем предполагалось (проскальзывание).`,
  },
  {
    title: "6. Технологический риск и риск связи",
    text: `Торговля через электронные платформы подвержена рискам, включая, но не ограничиваясь: сбоями интернет-соединения, неисправностями оборудования, программными ошибками, перебоями в потоке данных и отказами серверов. В случае технического сбоя при открытой позиции Трейдер несёт риск возникших прибылей или убытков. ProbCapital не несёт ответственности за убытки, обусловленные технологическими сбоями вне прямого контроля Компании.`,
  },
  {
    title: "7. Психологический риск",
    text: `Торговля предъявляет высокие психологические требования. Принятие решений под влиянием эмоций, самонадеянность после серии выигрышных сделок и импульсивные действия после убытков являются одними из наиболее распространённых причин неудовлетворительных торговых результатов. Трейдерам рекомендуется разработать и строго соблюдать заранее определённый торговый план и систему управления рисками.`,
  },
  {
    title: "8. Регуляторный и правовой риск",
    text: `Нормативно-правовая среда, регулирующая финансовую торговлю, различается в разных юрисдикциях и может изменяться. Изменения в налоговом законодательстве, финансовом регулировании или правовом статусе отдельных инструментов могут существенно повлиять на деятельность Трейдера или способность Компании осуществлять деятельность в определённых регионах.`,
  },
  {
    title: "9. Отсутствие инвестиционных рекомендаций",
    text: `Ничто на сайте probcapital.com или в каких-либо сообщениях от ProbCapital не является инвестиционной, финансовой, торговой или иной консультацией. Компания не рекомендует какую-либо конкретную торговую стратегию. Любые торговые решения, принятые Пользователем, принимаются исключительно на его собственный риск и усмотрение.`,
  },
  {
    title: "10. Подтверждение",
    text: `Регистрируясь в ProbCapital LLC и участвуя в Процессе оценки или Образовательной симуляции торговли, вы подтверждаете, что ознакомились с настоящим раскрытием рисков, понимаете его содержание и принимаете описанные риски. Вы подтверждаете, что добровольно пользуетесь программным обеспечением для имитации торговли и что ваше участие соответствует вашим знаниям и опыту.`,
  },
];

export default function RiskPage() {
  const { lang } = useLang();
  const ru = lang === "ru";
  const sections = ru ? sectionsRu : sectionsEn;

  return (
    <div style={{ background: "#0F1117", minHeight: "100vh", color: "#F0F2FF" }}>
      <Navbar />
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "120px 24px 80px" }}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "100px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#FCA5A5", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
            {ru ? "Правовая информация" : "Legal"}
          </div>
          <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "12px" }}>
            {ru ? "Раскрытие рисков" : "Risk Disclosure"}
          </h1>
          <p style={{ color: "#555A72", fontSize: "14px" }}>{ru ? "Последнее обновление: апрель 2026" : "Last updated: April 2026"}</p>
        </div>

        <div style={{ background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "14px", padding: "20px 24px", marginBottom: "36px", display: "flex", gap: "14px" }}>
          <span style={{ fontSize: "20px", flexShrink: 0 }}>⚠️</span>
          <p style={{ color: "#FCA5A5", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
            {ru
              ? "Торговля финансовыми инструментами сопряжена с высоким уровнем риска. Убедитесь, что вы полностью понимаете все риски, прежде чем приступить к торговле."
              : "Trading financial instruments involves a high level of risk. Please ensure you fully understand all risks before engaging in any trading activity."}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {sections.map((s) => (
            <div key={s.title} style={{ background: "#1A1D27", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "24px" }}>
              <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#F0F2FF", marginBottom: "10px" }}>{s.title}</h2>
              <p style={{ color: "#B0B8D1", fontSize: "15px", lineHeight: 1.85, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
