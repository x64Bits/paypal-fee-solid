import { ThemeProvider } from "solid-styled-components";

const theme = {
  colors: {
    primary: "#fcfcfd",
    secondary: "#9f9eba",
    main: "#0D3883",
    "field-bg": "#0e0558",
    "field-border": "#3b6efe",
    bg: "#090043",
    separator: "#201b61",
    copy: "rgba(255, 255, 255, 0.2)",
  },
};

export default function ThemeWrapper({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
