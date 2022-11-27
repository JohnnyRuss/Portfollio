import styled from "styled-components";
import { sectionBox } from "../../../styles/helpers.styled";

export const PortfollioContainer = styled.section`
  ${sectionBox}
  padding-bottom: 5rem;
  min-height: 38rem;

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
    color: ${({ theme }) => theme.color.lightGray};

    :hover {
      background: ${({ theme }) => theme.color.red};
    }
  }
`;
