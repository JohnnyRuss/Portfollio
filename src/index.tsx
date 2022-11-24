import App from "./App";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import BaseTheme from "./styles/Theme.styles";
import { GlobalStyles } from "./styles/GlobalStyles";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={BaseTheme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
