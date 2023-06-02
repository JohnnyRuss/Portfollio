import { css } from "styled-components";
import { media } from "./media.styles";

export function sectionHeading(align: string) {
  return css`
    font-size: ${({ theme }) => theme.fontSize["h-2"]};
    text-transform: uppercase;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: max-content;
      background: linear-gradient(
        to right bottom,
        ${({ theme }) => theme.color.orange},
        ${({ theme }) => theme.color.red}
      );
      background-clip: text;
      -moz-background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    ${media.mobileLg`
      justify-content:${align};
      margin-bottom:5rem;
    `}
  `;
}

export const sectionBox = css`
  width: 100%;
  max-width: ${({ theme }) => theme.utils.container};
  margin: 0 auto;
  padding: 0 1rem;
  padding-top: 10rem;

  ${media.mobileLg`
    margin-top:14rem; 
  `}
`;

export const scrollBar = css`
  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: ${({ theme }) =>
      `linear-gradient(70deg, ${theme.color.red} 35%, ${theme.color.orange} 80%)`};
  }

  ::-webkit-scrollbar-track {
    border-radius: 1rem;
    background: ${({ theme }) => theme.color.grayishBlue};
  }
`;
