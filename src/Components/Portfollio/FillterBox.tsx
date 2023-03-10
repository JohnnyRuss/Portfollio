import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import useStore from "../../store/store";

const FillterBox: React.FC = () => {
  const { t } = useTranslation();

  const techs = useStore((state) => state.techs);
  const setFilter = useStore((state) => state.setFilter);
  const filterKeyWords = useStore((state) => state.filterKeyWords);

  const [activeFilterBox, setActiveFilterBox] = useState(false);

  return (
    <div className={`filter-container ${activeFilterBox && "active"}`}>
      <button
        className="filter__main-btn"
        onClick={() => setActiveFilterBox((prev) => !prev)}
      >
        {t("filter_btn")}
      </button>
      {activeFilterBox && (
        <ul className="filter__techs-list">
          {techs.sort().map((tech) => (
            <li
              className="filter__techs-list--item"
              key={`filter-tech--${tech}`}
              onClick={() => setFilter(tech)}
            >
              <span
                className={`filter__techs-list--item__checkbox ${
                  filterKeyWords.includes(tech) ? "checked" : ""
                }`}
              ></span>
              <span className="filter__techs-list--item__title">{tech}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FillterBox;
