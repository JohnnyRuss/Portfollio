import styled from "styled-components";
import { media } from "../../styles/media.styles";
import { sectionHeading, sectionBox } from "../../styles/helpers.styled";

export const BioContainer = styled.section`
  ${sectionBox};

  ${media.mobileLg`
    margin-top:0rem; 
  `}

  .bio__heading {
    ${sectionHeading("center")};
  }

  .bio__box {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.tablet`
    flex-direction:row;
  `}
  }

  .bio-fugures__box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  .bio__fig {
    width: 8rem;
    aspect-ratio: 1/1;

    ${media.mobileLg`
      width:16rem;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .bio__details {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bio__text {
    line-height: 1.7;
    letter-spacing: 1px;
    text-align: center;
    color:${({theme})=>theme.color.gray};

    ${media.tablet`
      text-align:start;
    `}
  }
`;
