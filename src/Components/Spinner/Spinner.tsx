import React from "react";
import styled, { keyframes } from "styled-components";
import { ImSpinner3 } from "react-icons/im";

const rotate = keyframes`
    100%{
      transform: rotate(360deg);
    }
`;

const Spin = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.color["black-tr"]};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: inline-block;
    width: 6rem;
    height: 6rem;
    aspect-ratio: 1/1;
    fill:${({ theme }) => theme.color.orange};
    animation: ${rotate} 1s linear infinite;
  }
`;

interface SpinnerType {}

const Spinner: React.FC<SpinnerType> = (props) => {
  return (
    <Spin>
      <ImSpinner3 />
    </Spin>
  );
};

export default Spinner;
