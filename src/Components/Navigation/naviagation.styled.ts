import styled from "styled-components";
import { media } from "../../styles/media.styles";

export const NavContainer = styled.nav`
  position: sticky;
  z-index: 99;
  top: 0;
  background: ${({ theme }) => theme.color.black};
  box-shadow: 0px 4px 15px rgba(200, 200, 200, 0.2);
  padding: 3rem 2rem;
  display: flex;
  align-items: color-interpolation-filters;
  gap: 0.75rem;
  color: ${({ theme }) => theme.color.gray};

  .lng-btn {
    margin-right: auto;
    transition: all 0.2s;

    :hover {
      color: ${({ theme }) => theme.color.orange};
    }
  }

  .nav-list {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;

    ${media.mobileLg`
      gap:2rem;
    `}
  }

  .nav-list--item a {
    transition: all 0.2s;

    :hover {
      color: ${({ theme }) => theme.color.orange};
    }
  }
`;
