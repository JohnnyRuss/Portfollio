import styled, { keyframes } from "styled-components";
import { media } from "../../../styles/media.styles";

const fade_up = keyframes`
  0%{
    transform:scale(0.8);
    opacity:0;
  }
  50%{
    transform:scale(1.1);
    opacity:0.5;
  }
  100%{
    transform:scale(1);
    opacity:1;
  }
`;

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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

  .form__footer {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    flex-direction: column;

    ${media.mobileLg`
      flex-direction:row;
    `}
  }

  .success__msg {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.color.gray};
    animation: ${fade_up} 0.3s;
  }

  .send__email-btn {
    background: ${({ theme }) => theme.color.darkOrange};
    padding: 1rem 5rem;
    align-self: flex-start;
    border-radius: ${({ theme }) => theme.utils["rounded-md"]};
    width: 100%;
    transition: all 0.2s;
    color: ${({ theme }) => theme.color.lightGray};

    ${media.mobileLg`
      width:auto;
    `};

    :hover {
      background: ${({ theme }) => theme.color.red};
    }
  }
`;
