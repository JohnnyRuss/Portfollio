import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: FontSize;
    utils: Utils;
    breakpoints: BreakPoints;
    color: Colors;
  }

  interface FontSize {
    "h-1": "4rem";
    "h-2": "3rem";
    "h-3": "2.4rem";
    "h-4": "2rem";
    base: "1.6rem";
    sm: "1.4rem";
    xsm: "1.2rem";
  }

  interface Utils {
    container: "1480px";
    "rounded-lg": "3rem";
    "rounded-md": "1rem";
    "rounded-sm": "0.5rem";
  }

  interface BreakPoints {
    desktop: "92.5em"; //1480px
  }

  interface Colors {
    "black-tr": "rgba(0,0,0,0.8)";
    black: "#000";
    white: "#fff";
    orange: "#FFB40A";
    red: "#FC300A";
  }
}
