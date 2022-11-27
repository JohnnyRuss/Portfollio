import React from "react";
import { useTranslation } from "react-i18next";
import { IntroContainer } from "./intro.styled";

const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IntroContainer>
      <div className="intro-details">
        <h1 className="person-name">{t("person_name")}</h1>
        <h2 className="person-proffesion">Front-End Developer</h2>
      </div>
      <figure className="intro-fig">
        <img
          src="/assets/dev.png"
          alt="illustration developer"
          loading="lazy"
        />
      </figure>
    </IntroContainer>
  );
};

export default Intro;
