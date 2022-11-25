import React, { useState } from "react";
import { PortfollioContainer } from "./portfollio.styled";
import apps from "../../lib/portfollio.json";
import Project from "./Project";
import { useTranslation } from "react-i18next";

const Portfollio: React.FC = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);

  function handleShowALL() {
    setShowAll((prev) => !prev);
    if (showAll)
      document
        .getElementById("portfolio")
        ?.scrollIntoView({ behavior: "auto" });
  }

  return (
    <PortfollioContainer id="portfolio">
      <p className="portfolio__heading">
        <span>portfolio</span>
      </p>
      <div className="apps-container">
        {apps.slice(0, showAll ? apps.length : 4).map((app) => (
          <Project
            app={app}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
            key={app.id}
          />
        ))}
      </div>
      <button onClick={handleShowALL} className="show-apps--btn">
        {t(showAll ? "apps_show_less_btn" : "apps_show_more_btn")}
        {!showAll && ` (+${apps.length - 4})`}
      </button>
    </PortfollioContainer>
  );
};

export default Portfollio;
