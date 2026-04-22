import { Route, Switch } from "wouter";
import Index from "./pages/index";
import HelpPage from "./pages/help";
import ContactPage from "./pages/contact";
import RulesPage from "./pages/rules";
import PayoutsPage from "./pages/payouts";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";
import RiskPage from "./pages/risk";
import AmlPage from "./pages/aml";
import RefundPage from "./pages/refund";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";
import { LangProvider } from "./i18n/LangContext";

function App() {
  return (
    <Provider>
      <LangProvider>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/help" component={HelpPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/rules" component={RulesPage} />
          <Route path="/payouts" component={PayoutsPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/risk" component={RiskPage} />
          <Route path="/aml" component={AmlPage} />
          <Route path="/refund" component={RefundPage} />
        </Switch>
        {import.meta.env.DEV && <AgentFeedback />}
        {<RunableBadge />}
      </LangProvider>
    </Provider>
  );
}

export default App;
