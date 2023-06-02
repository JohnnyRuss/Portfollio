import styled from "styled-components";
import { media } from "../../styles/media.styles";
import { sectionHeading, sectionBox } from "../../styles/helpers.styled";

export const SkillsContainer = styled.section`
  ${sectionBox};
  min-height: 11rem;

  .skills__heading {
    ${sectionHeading("start")};

    ${media.mobileLg`
      margin-left:6rem;
    `}
  }

  .skills__box {
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fill, minmax(10rem, max-content)); */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem 1.5rem;
  }

  .skill-item {
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .skill-item__fig {
    width: 100;
    height: 6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .skill-item__title {
    font-size: ${({ theme }) => theme.fontSize.xsm};
    color: ${({ theme }) => theme.color.gray};
  }
`;
