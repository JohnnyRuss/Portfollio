import styled from "styled-components";
import { media } from "../../../styles/media.styles";
import { sectionHeading } from "../../../styles/helpers.styled";

export const DetailsContainer = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.color.gray};

  .contact__heading {
    ${sectionHeading("start")};
    margin-bottom: 0rem;

    ${media.mobileLg`
      margin-bottom:0rem;
    `}
  }

  .details__box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;

    ${media.mobileLg`
      align-items:flex-start;
    `}

    p {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 500;
    }

    p > span:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p > span:first-child svg {
      color: ${({ theme }) => theme.color.orange};
      font-size: ${({ theme }) => theme.fontSize["h-3"]};
    }

    p a {
      text-decoration: underline;
    }
  }
`;
