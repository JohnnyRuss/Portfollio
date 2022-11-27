import styled, { keyframes } from "styled-components";
import { sectionHeading } from "../../../styles/helpers.styled";
import { media } from "../../../styles/media.styles";

const colapse_down = keyframes`
  0%{
    transform: translateY(-1rem);
  }
  100%{
    transform: translateY(0);
  }
`;

const fade = keyframes`
  0%{
   opacity:0;
    transform:scale(1.2);
  }
  100%{
   opacity:1;
   transform:scale(1);
  }
`;

export const HeadingContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, max-content);
  justify-content: center;
  padding: 0 1rem;

  ${media.mobileLg`
    grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    padding:0;
  `}

  .portfolio__heading {
    ${sectionHeading("end")};
    grid-row: 1;

    ${media.mobileLg`
      grid-column: 2;
    `}
  }

  .filter-keys--list {
    grid-row: 3;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-transform: capitalize;

    ${media.mobileLg`
      grid-column: span 2;
      grid-row: 2;
      margin: 2rem 0;
    `}
  }

  .filter-keys--list__item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: ${fade} 0.2s;
  }

  .filter-keys--list__item span {
    cursor: pointer;
    transition: all 0.2s;

    :hover {
      color: ${({ theme }) => theme.color.orange};
    }
  }

  .filter-keys--list__item:last-child svg {
    display: none;
  }

  .filter-container {
    grid-row: 2;
    position: relative;
    padding: 1rem;
    width: 100%;
    background: ${({ theme }) => theme.color.white};
    color: black;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);
    border-radius: ${({ theme }) => theme.utils["rounded-md"]};
    height: max-content;
    margin-bottom: 3rem;

    &.active {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    ${media.mobileLg`
      width: 22rem;
      grid-column: 1;
      grid-row: 1;
      margin-bottom: 0;
    `}
  }

  .filter__main-btn {
    padding: 0.5rem 0;
    width: 100%;
    text-transform: uppercase;
  }

  .filter__techs-list {
    position: absolute;
    z-index: 9;
    top: 100%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    text-transform: capitalize;
    border-bottom-left-radius: ${({ theme }) => theme.utils["rounded-md"]};
    border-bottom-right-radius: ${({ theme }) => theme.utils["rounded-md"]};
    padding: inherit;
    background: inherit;
    color: inherit;
    box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.5);
    animation: ${colapse_down} 0.2s;
  }

  .filter__techs-list--item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .filter__techs-list--item__checkbox {
    position: relative;
    min-width: 1.6rem;
    min-height: 1.6rem;
    display: inline-block;
    background: ${({ theme }) => theme.color.grayishBlue};
    border-radius: 100%;
    cursor: inherit;

    &.checked::after {
      content: "";
      display: none;
      position: absolute;
      z-index: 1;
      width: calc(1.6rem - 0.6rem);
      height: calc(1.6rem - 0.6rem);
      background: ${({ theme }) => theme.color.orange};
      border-radius: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .filter__techs-list--item__checkbox.checked::after {
    display: inline-block;
  }

  .filter__techs-list--item__title {
    width: 100%;
    cursor: inherit;
  }
`;
