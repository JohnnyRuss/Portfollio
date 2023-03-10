import React from "react";
import { useTranslation } from "react-i18next";

interface ProjectActionsType {
  demo: string;
  git: string;
  id: string;
  gitBack: string | undefined;
  expandedId: string;
  setExpandedId: React.Dispatch<React.SetStateAction<string>>;
  expandedGitModal: string;
  setExpandedGitModal: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectActions: React.FC<ProjectActionsType> = ({
  demo,
  git,
  gitBack,
  expandedId,
  id,
  setExpandedId,
  setExpandedGitModal,
  expandedGitModal,
}) => {
  const { t } = useTranslation();

  return (
    <div className="details__btn-box">
      <a href={demo} target="_blank" rel="noreferrer" className="main-btn">
        {t("project_demo_btn")}
      </a>

      <div className="git-box">
        {gitBack && (
          <button
            onClick={() =>
              setExpandedGitModal(id === expandedGitModal ? "" : id)
            }
            className="main-btn"
          >
            git
          </button>
        )}
        {!gitBack && (
          <a href={git} target="_blank" rel="noreferrer" className="main-btn">
            Git
          </a>
        )}
        {gitBack && (
          <div className="git-modal">
            <a
              href={git}
              target="_blank"
              rel="noreferrer"
              onClick={() => setExpandedGitModal("")}
            >
              front-end
            </a>
            <a
              href={gitBack}
              target="_blank"
              rel="noreferrer"
              onClick={() => setExpandedGitModal("")}
            >
              back-end
            </a>
          </div>
        )}
      </div>

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
