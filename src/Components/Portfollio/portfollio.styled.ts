import styled from "styled-components";
import { media } from "../../styles/media.styles";
import { sectionHeading, sectionBox } from "../../styles/helpers.styled";

export const PortfollioContainer = styled.section`
  ${sectionBox}
  padding-bottom: 5rem;
  min-height: 38rem;

  .portfolio__heading {
    ${sectionHeading("end")};
  }

  .apps-container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-auto-rows: 30rem;
    gap: 4rem;
  }

  .show-apps--btn {
    position: sticky;
    left: 50%;
    transform: translate(-50%, 50%);
    bottom: 3rem;
    padding: 1rem 2rem;
    height: max-content;
    width: max-content;
    text-transform: capitalize;
    border-radius: ${({ theme }) => theme.utils["rounded-lg"]};
    background: ${({ theme }) => theme.color.darkOrange};
    transition: all 0.2s;
    color: ${({theme})=>theme.color.lightGray};

    :hover {
      background: ${({ theme }) => theme.color.red};
    }
  }
`;

export const ProjectContainer = styled.div<{ expanded: boolean }>`
  position: relative;
  color: ${({ theme }) => theme.color.lightGray};

  .portfollio-item__fig {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  .portfollio-item__details {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: ${({ expanded }) => (expanded ? "0" : "85%")};
    background: ${({ theme }) => theme.color["black-tr"]};
    padding: 0.5rem;
    backdrop-filter: blur(2px);
    transition: all 0.25s linear;
    cursor: pointer;
  }

  .details__btn-box {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      padding: 0.5rem 1.5rem;
      border-radius: ${({ theme }) => theme.utils["rounded-lg"]};
      cursor: pointer;
      text-transform: capitalize;
      background: ${({ theme }) => theme.color.black};
      transition: all 0.2s ease-out;

      :hover {
        color: ${({ theme }) => theme.color.orange};
      }
    }
  }

  .details__expand-btn {
    margin-left: auto;
    transition: all 0.2s;

    :hover {
      color: ${({ theme }) => theme.color.orange};
    }
  }

  .details__expanded {
    display: ${({ expanded }) => (expanded ? "flex" : "none")};
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding: 0 0.5rem;
  }

  .expanded__item {
    display: grid;
    grid-template-columns: 10rem 1fr;
    align-items: start;
    column-gap: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.whiteFade};
    padding: 0.5rem 0;

    :last-child {
      border-bottom: none;
    }
  }

  .expanded-field--title {
    color: ${({ theme }) => theme.color.orange};
  }

  .expanded-main {
    text-transform: capitalize;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.xsm};
  }

  .expanded__techs {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    list-style: disc;
    padding-left: 1.4rem;

    li span {
      position: relative;
      left: -0.5rem;
    }

    li::marker {
      color: ${({ theme }) => theme.color.orange};
    }
  }
`;
