import styled from "styled-components";
import { media } from "../../../styles/media.styles";
import { sectionHeading, sectionBox } from "../../../styles/helpers.styled";

export const ContactContainer = styled.section`
  ${sectionBox};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 3rem;

  ${media.mobileLg`
    flex-direction:row;
  `};
`;
