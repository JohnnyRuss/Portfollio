import React, { useState } from "react";
import { NavContainer } from "./naviagation.styled";
import { useTranslation } from "react-i18next";

interface NavigationType {}

enum LNG {
  "ka" = "ka",
  "en" = "en",
  "ka-Show" = "GE",
  "EN-Show" = "EN",
}

const Navigation: React.FC<NavigationType> = (props) => {
  const { t, i18n } = useTranslation();

  const [currLng, setCurrLng] = useState({
    active: LNG.en,
    show: LNG["ka-Show"],
  });

  function handleLng() {
    if (currLng.active === LNG.en) {
      setCurrLng({ active: LNG.ka, show: LNG["EN-Show"] });
      i18n.changeLanguage(LNG.ka);
    } else if (currLng.active === LNG.ka) {
      setCurrLng({ active: LNG.en, show: LNG["ka-Show"] });
      i18n.changeLanguage(LNG.en);
    }
  }

  return (
    <NavContainer>
      <button onClick={handleLng} className="lng-btn">
        {currLng.show}
      </button>
      <ul className="nav-list">
        {["bio", "skills", "portfolio", "contact"].map((route) => (
          <li className="nav-list--item" key={route}>
            <a href={`#${route}`}>{t(`menu_${route}`)}</a>
          </li>
        ))}
      </ul>
    </NavContainer>
  );
};

export default Navigation;
