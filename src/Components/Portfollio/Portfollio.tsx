/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import useStore from "../../store/store";

import { PortfollioContainer } from "./styles/portfollio.styled";
import { HeadingContainer } from "./styles/headingContainer.styled";
import { AppsContainer } from "./styles/appsContainer.styled";

import FillterKeys from "./FillterKeys";
import Project from "./Project";
import FillterBox from "./FillterBox";

import { AppType } from "../../interface/interface.types";

const Portfollio: React.FC = () => {
  const aps = useStore((state) => state.aps);
  const filteredAps = useStore((state) => state.filteredApps);
  const filteredKeyWord = useStore((state) => state.filterKeyWords);

  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<string>("");
  const [expandedGitModal, setExpandedGitModal] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);

  const [dataToRender, setDataToRender] = useState<AppType[]>([]);

  function handleShowALL() {
    setShowAll((prev) => !prev);
    if (showAll)
      document
        .getElementById("portfolio")
        ?.scrollIntoView({ behavior: "auto" });
  }

  useEffect(() => {
    if (filteredAps[0]) {
      setShowAll(true);
      setDataToRender(filteredAps);
    } else {
      setShowAll(false);
      setDataToRender(aps);
    }
  }, [filteredKeyWord]);

  return (
    <PortfollioContainer id="portfolio">
      <HeadingContainer className="portfolio__heading-box">
        <p className="portfolio__heading">
          <span>portfolio</span>
        </p>
        <FillterBox />
        {filteredKeyWord[0] && <FillterKeys keys={filteredKeyWord} />}
      </HeadingContainer>
      <AppsContainer className="apps-container">
        {dataToRender.slice(0, showAll ? dataToRender.length : 4).map((app) => (
          <Project
            app={app}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
            setExpandedGitModal={setExpandedGitModal}
            expandedGitModal={expandedGitModal}
            key={app.id}
          />
        ))}
      </AppsContainer>
      <button onClick={handleShowALL} className="show-apps--btn">
        {t(showAll ? "apps_show_less_btn" : "apps_show_more_btn")}
        {!showAll && ` (+${dataToRender.length - 4})`}
      </button>
    </PortfollioContainer>
  );
};

export default Portfollio;
