import styled from "styled-components";
import { media } from "../../../styles/media.styles";

export const AppsContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-auto-rows: 30rem;
  gap: 4rem;
  justify-items: center;

  ${media.mobileLg`
    justify-items:start;
  `}
`;
