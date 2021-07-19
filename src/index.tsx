import { render } from "solid-js/web";
import { ThemeProvider, createGlobalStyles } from "solid-styled-components";

import App from "./pages/App";
import "./styles/global.css";

const GlobalStyle = createGlobalStyles`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    primary: "#fcfcfd",
    secondary: "#9f9eba",
    main: "#0D3883",
    fieldBg: "#0e0558",
    fieldBorder: "#3b6efe",
    bg: "#090043",
    separator: "#201b61",
    copy: "rgba(255, 255, 255, 0.2)",
    currency: "rgb(107, 114, 128)",
  },
};

render(
  () => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  ),
  document.getElementById("root")
);
