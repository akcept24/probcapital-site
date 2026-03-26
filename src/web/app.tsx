import { Route, Switch } from "wouter";
import Index from "./pages/index";
import { LangProvider } from "./i18n/LangContext";

function App() {
  return (
    <LangProvider>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </LangProvider>
  );
}

export default App;
