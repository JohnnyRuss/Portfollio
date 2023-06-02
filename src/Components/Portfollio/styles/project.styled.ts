import styled, { keyframes } from "styled-components";

const git_pop_up = keyframes`
  0%{
    top: calc(100% + 2.6rem);
  }
  100%{
    top: calc(100% + 1.3rem);
  }
`;

export const ProjectContainer = styled.div<{
  expanded: boolean;
  expandedGit: boolean;
}>`
  position: relative;
  color: ${({ theme }) => theme.color.lightGray};
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 25px 4px rgba(299, 299, 299, 0.2);

  .portfollio-item__fig {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 0.6rem;

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
    padding: 0.5rem;
    backdrop-filter: blur(2px);
    transition: all 0.25s linear;
    background: ${({ theme }) => theme.color["black-tr"]};
    cursor: pointer;
  }

  .details__btn-box {
    display: flex;
    align-items: center;
    gap: 2rem;

    .main-btn {
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

    .git-box {
      position: relative;

      .git-modal {
        position: absolute;
        animation: ${git_pop_up} 0.25s ease forwards;
        display: ${({ expandedGit }) => (expandedGit ? "flex" : "none")};
        flex-direction: column;
        gap: 0.5rem;
        background: ${({ theme }) => theme.color["black-tr"]};
        padding: 0.75rem 1rem;
        width: 12rem;
        border-radius: 0.5rem;
        text-transform: capitalize;

        a {
          transition: all 0.2s ease;

          :hover {
            color: ${({ theme }) => theme.color.orange};
          }
        }
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
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding: 0 0.5rem;
    height: ${({ expanded }) => (expanded ? "85%" : "0%")};
    transition: height 0.25s;
    overflow: hidden;
  }

  .expanded__item {
    display: grid;
    grid-template-columns: 10rem 1fr;
    align-items: start;
    column-gap: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.whiteFade};
    padding: 0.5rem 0;
    overflow: hidden;

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
    gap: 0.75rem;
    list-style: disc;
    padding-left: 1.4rem;
    max-height: 100%;
    overflow: auto;

    ::-webkit-scrollbar {
      display: none;
    }

    li span {
      position: relative;
      left: -0.5rem;
    }

    li::marker {
      color: ${({ theme }) => theme.color.orange};
    }
  }
`;
