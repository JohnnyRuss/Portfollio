import styled, { keyframes } from "styled-components";
import { media } from "../../styles/media.styles";

const run_gradient = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const IntroContainer = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.utils.container};
  min-height: 45vw;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  ${media.mobileLg`
    flex-direction:row;
  `}

  .intro-details {
    order: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    ${media.mobileLg`
      order:1;
    `}

    .person-name {
      font-size: ${({ theme }) => theme.fontSize["h-3"]};
      letter-spacing: 2px;
      text-transform: capitalize;
      color: ${({ theme }) => theme.color.darkOrange};
      text-shadow: 1px 1px 1px red, 2px 1px 2px orange;

      ${({ theme }) => media.tablet`
        font-size: ${theme.fontSize["h-1"]};s
      `};
    }

    .person-proffesion {
      font-size: ${({ theme }) => theme.fontSize["h-2"]};
      letter-spacing: 2.5px;
      background: linear-gradient(to right top, #fc300a 40%, #ffb40a 120%);
      background-size: 400% 300%;
      animation: ${run_gradient} 2s linear infinite;
      background-clip: text;
      -moz-background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;

      ${({ theme }) => media.tablet`
        font-size: ${theme.fontSize["h-1"]};
      `}
    }
  }

  .intro-fig {
    flex: 1;
    order: 1;

    ${media.mobileLg`
      order:2;
    `}

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
