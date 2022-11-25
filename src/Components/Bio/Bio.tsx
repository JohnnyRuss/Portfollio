import React from "react";
import { useTranslation } from "react-i18next";
import { BioContainer } from "./bio.styled";
import bio from "../../lib/bio.json";

interface BioType {}

const Bio: React.FC<BioType> = (props) => {
  const { t } = useTranslation();

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
