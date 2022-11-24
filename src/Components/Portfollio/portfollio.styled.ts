import styled from "styled-components";
import { media } from "../../styles/media.styles";

export const PortfollioContainer = styled.section`
  width: 100%;
  min-height:38rem;
  max-width: ${({ theme }) => theme.utils.container};
  margin: 0 auto;
  margin-top: 10rem;
  padding: 0 1rem;
  padding-bottom: 5rem;

  ${media.mobileLg`
    margin-top:14rem; 
  `}

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
    background: ${({ theme }) => theme.color.red};
  }
`;

export const ProjectContainer = styled.div<{ expanded: boolean }>`
  position: relative;

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
  }

  .expanded-field--title {
    color: ${({ theme }) => theme.color.orange};
  }

  .expanded-main {
    text-transform: capitalize;
    font-weight: 500;
  }
`;
