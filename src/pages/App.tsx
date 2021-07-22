import { createSignal, onMount, Show, Switch } from "solid-js";
import {
  Router,
  pathIntegration,
  MatchRoute,
  historyIntegration,
} from "@rturnq/solid-router";

import Home from "./home";
import Settings from "./settings";
import { Container } from "./styles";
import Drawer from "@/components/Drawer";
import { createMemoryHistory } from "history";

function App() {
  const history = createMemoryHistory();
  const [openDrawer, setOpenDrawer] = createSignal(false);

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
            <Home onOpenDrawer={setOpenDrawer} />
          </MatchRoute>
          <MatchRoute path="settings">
            <Settings onOpenDrawer={setOpenDrawer} />
          </MatchRoute>
        </Switch>
        <Show when={openDrawer()}>
          <Drawer onClose={setOpenDrawer} />
        </Show>
      </Router>
    </Container>
  );
}

export default App;
