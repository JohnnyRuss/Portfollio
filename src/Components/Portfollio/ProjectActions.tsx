import React from "react";
import { useTranslation } from "react-i18next";

interface ProjectActionsType {
  demo: string;
  git: string;
  expandedId: string;
  id: string;
  setExpandedId: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectActions: React.FC<ProjectActionsType> = ({
  demo,
  git,
  expandedId,
  id,
  setExpandedId,
}) => {
  const { t } = useTranslation();

  return (
    <div className="details__btn-box">
      <a href={demo} target="_blank">
       {t("project_demo_btn")}
      </a>
      <a href={git} target="_blank">
        git
      </a>
      <button
        onClick={() => setExpandedId(id === expandedId ? "" : id)}
        className="details__expand-btn"
      >
       {t("project_info_btn")}
      </button>
    </div>
  );
};

export default ProjectActions;
