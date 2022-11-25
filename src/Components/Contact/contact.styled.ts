import styled from "styled-components";
import { media } from "../../styles/media.styles";
import { sectionHeading, sectionBox } from "../../styles/helpers.styled";

export const ContactContainer = styled.section`
  ${sectionBox};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 3rem;

  ${media.mobileLg`
    flex-direction:row;
  `};

  .contact__details {
    flex: 1;
    color:${({theme})=>theme.color.gray};
  }

  .contact__heading {
    ${sectionHeading("start")};
    margin-bottom: 0rem;

    ${media.mobileLg`
      margin-bottom:0rem;
    `}
  }

  .details__box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;

    ${media.mobileLg`
      align-items:flex-start;
    `}

    p {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 500;
    }

    p > span:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p > span:first-child svg {
      color: ${({ theme }) => theme.color.orange};
      font-size: ${({ theme }) => theme.fontSize["h-3"]};
    }

    p a {
      text-decoration: underline;
    }
  }

  .contact__form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .inp__field {
    padding: 1rem;
    color: ${({ theme }) => theme.color.black};
    border-radius: ${({ theme }) => theme.utils["rounded-md"]};

    :focus {
      outline: 2px solid ${({ theme }) => theme.color.orange};
    }
  }

  .inp__input {
    height: 4rem;
  }

  .inp__input-text {
    resize: none;
    height: 12rem;
  }

  .send__email-btn {
    background: ${({ theme }) => theme.color.darkOrange};
    padding: 1rem 5rem;
    align-self: flex-start;
    border-radius: ${({ theme }) => theme.utils["rounded-md"]};
    width: 100%;
    transition: all 0.2s;
    color:${({theme})=>theme.color.lightGray};

    ${media.mobileLg`
      width:auto;
    `};

    :hover {
      background: ${({ theme }) => theme.color.red};
    }
  }
`;
