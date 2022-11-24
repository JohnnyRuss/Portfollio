import React from "react";

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
  return (
    <div className="details__btn-box">
      <a href={demo} target="_blank">
        See Demo
      </a>
      <a href={git} target="_blank">
        git
      </a>
      <button
        onClick={() => setExpandedId(id === expandedId ? "" : id)}
        className="details__expand-btn"
      >
        Show Details
      </button>
    </div>
  );
};

export default ProjectActions;
