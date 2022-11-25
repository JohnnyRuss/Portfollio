import { DefaultTheme } from "styled-components";

const BaseTheme: DefaultTheme = {
  fontSize: {
    "h-1": "4rem",
    "h-2": "3rem",
    "h-3": "2.4rem",
    "h-4": "2rem",
    base: "1.6rem",
    sm: "1.4rem",
    xsm: "1.2rem",
  },

  color: {
    "black-tr": "rgba(0,0,0,0.8)",
    black: "#000",
    white: "#fff",
    whiteFade: "rgba(299,299,299,0.7)",
    orange: "#FFB40A",
    darkOrange: "#F97203",
    red: "#FC300A",
    gray: "#A6A6A6",
    grayishBlue: "#5F6673",
    lightGray: "#E5E5E5",
  },

  utils: {
    container: "1480px",
    "rounded-lg": "3rem",
    "rounded-md": "1rem",
    "rounded-sm": "0.5rem",
  },

  breakpoints: {
    desktop: "92.5em",
  },
};

export default BaseTheme;
