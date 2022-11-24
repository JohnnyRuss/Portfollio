import { css } from "styled-components";

export const media = {
  mobile: (...args) => css`
    @media (min-width: 17.5em) {
      //280px
      ${css(...args)}
    }
  `,
  mobileLg: (...args) => css`
    @media (min-width: 42.5em) {
      //680px
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 60em) {
      //960px
      ${css(...args)}
    }
  `,
  desktopSm: (...args) => css`
    @media (min-width: 80em) {
      //1280px
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 92.5em) {
      //1480px
      ${css(...args)}
    }
  `,
  desktopLg: (...args) => css`
    @media (min-width: 120em) {
      //1920px
      ${css(...args)}
    }
  `,
};
