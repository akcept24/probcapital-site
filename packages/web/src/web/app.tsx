import { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "wouter";
import LiveChat from "./components/LiveChat";
import { Provider } from "./components/provider";
import { LangProvider } from "./i18n/LangContext";

// Route-based code splitting: each page becomes its own chunk so the
// initial bundle stays lean (the blog article page alone pulls in
// react-markdown + remark/rehype, which most visitors never need).
const Index = lazy(() => import("./pages/index"));
const HelpPage = lazy(() => import("./pages/help"));
const ContactPage = lazy(() => import("./pages/contact"));
const RulesPage = lazy(() => import("./pages/rules"));
const PayoutsPage = lazy(() => import("./pages/payouts"));
const TermsPage = lazy(() => import("./pages/terms"));
const PrivacyPage = lazy(() => import("./pages/privacy"));
const RiskPage = lazy(() => import("./pages/risk"));
const AmlPage = lazy(() => import("./pages/aml"));
const RefundPage = lazy(() => import("./pages/refund"));
const AboutPage = lazy(() => import("./pages/about"));
const PricingPage = lazy(() => import("./pages/pricing"));
const BlogPage = lazy(() => import("./pages/blog"));
const BlogArticlePage = lazy(() => import("./pages/blog-article"));

function App() {
  return (
    <Provider>
      <LangProvider>
        <Suspense fallback={null}>
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
        </Suspense>

        {/* Global support chat bubble — mounted once for every route so the
            contact page "Open Chat" button always has a listener. */}
        <LiveChat />
      </LangProvider>
    </Provider>
  );
}

export default App;
