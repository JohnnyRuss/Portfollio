import styled from "styled-components";
import { media } from "../../../styles/media.styles";

export const AppsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 38rem;
  gap: 4rem;
  justify-content: center;

  ${media.mobileLg`
    grid-template-columns: repeat(auto-fill, 33rem);
    justify-content:start;
  `}
`;
