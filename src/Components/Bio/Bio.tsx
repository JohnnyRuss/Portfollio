import React from "react";

import useStore from "../../store/store";

import { useTranslation } from "react-i18next";
import { BioContainer } from "./bio.styled";

const Bio: React.FC = () => {
  const { t } = useTranslation();
  const bio = useStore((state) => state.bio);

  return (
    <BioContainer id="bio">
      <p className="bio__heading">
        <span>bio</span>
      </p>
      <div className="bio__box">
        <div className="bio-fugures__box">
          {bio.fig.map((fig) => (
            <figure className="bio__fig" key={fig}>
              <img src={fig} alt={fig} />
            </figure>
          ))}
        </div>
        <div className="bio__details">
          <p className="bio__text">{t("bio")}</p>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
