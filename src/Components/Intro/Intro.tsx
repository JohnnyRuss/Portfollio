import React from "react";
import { IntroContainer } from "./intro.styled";

interface IntroType {}

const Intro: React.FC<IntroType> = (props) => {
  return (
    <IntroContainer>
      <div className="intro-details">
        <h1 className="person-name">Joni Rusieshvili</h1>
        <h2 className="person-proffesion">Front-End Developer</h2>
      </div>
      <figure className="intro-fig">
        <img src="/assets/dev.png" alt="illustration developer" />
      </figure>
    </IntroContainer>
  );
};

export default Intro;
