import { onMount, Switch } from "solid-js";
import { Router, MatchRoute, historyIntegration } from "@rturnq/solid-router";

import Home from "./home";
import Settings from "./settings";
import { Container } from "./styles";
import { createMemoryHistory } from "history";

function App() {
  const history = createMemoryHistory();

  onMount(() => {
    const percentage = localStorage.getItem("percentage");
    if (!percentage) {
      localStorage.setItem("percentage", String(5.4));
    }
  });

  return (
    <Container>
      <Router integration={historyIntegration(history)}>
        <Switch fallback={<h1>404</h1>}>
          <MatchRoute end>
            <Home />
          </MatchRoute>
          <MatchRoute path="settings">
            <Settings />
          </MatchRoute>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
