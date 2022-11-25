import App from "./App";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import BaseTheme from "./styles/Theme.styles";
import { GlobalStyles } from "./styles/GlobalStyles";
import i18next from "./lib/i18next";
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={BaseTheme}>
    <GlobalStyles />
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </ThemeProvider>
);
