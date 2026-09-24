import { Route, Switch, Redirect } from "wouter";
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
import AboutPage from "./pages/about";
import PricingPage from "./pages/pricing";
import BlogPage from "./pages/blog";
import BlogArticlePage from "./pages/blog-article";
import LiveChat from "./components/LiveChat";
import { Provider } from "./components/provider";
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
          <Route path="/about" component={AboutPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/blog/prop-trading-makes-money">
            <Redirect to="/blog/prop-trading-vs-traditional-trading" />
          </Route>
          <Route path="/blog/:slug" component={BlogArticlePage} />
          <Route path="/blog" component={BlogPage} />
        </Switch>

        {/* Global support chat bubble — mounted once for every route so the
            contact page "Open Chat" button always has a listener. */}
        <LiveChat />
      </LangProvider>
    </Provider>
  );
}

export default App;
