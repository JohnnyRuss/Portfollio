import styled from "styled-components";
import { media } from "../../styles/media.styles";

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
      letter-spacing: 1.8px;

      ${({ theme }) => media.mobileLg`
        font-size: ${theme.fontSize["h-2"]};
      `}
    }

    .person-proffesion {
      font-size: ${({ theme }) => theme.fontSize["h-2"]};
      letter-spacing: 2.5px;

      ${({ theme }) => media.mobileLg`
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
