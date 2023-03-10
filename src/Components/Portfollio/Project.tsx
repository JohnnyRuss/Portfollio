import React from "react";

import { ProjectContainer } from "./styles/project.styled";
import ProjectExpandedDetails from "./ProjectExpandedDetails";
import ProjectActions from "./ProjectActions";

import { AppType } from "../../interface/interface.types";
interface ProjectType {
  expandedId: string;
  setExpandedId: React.Dispatch<React.SetStateAction<string>>;
  expandedGitModal: string;
  setExpandedGitModal: React.Dispatch<React.SetStateAction<string>>;
  app: AppType;
}

const Project: React.FC<ProjectType> = ({
  app,
  expandedId,
  setExpandedId,
  setExpandedGitModal,
  expandedGitModal,
}) => {
  return (
    <ProjectContainer
      expanded={app.id === expandedId ? true : false}
      expandedGit={app.id === expandedGitModal ? true : false}
    >
      <figure className="portfollio-item__fig">
        <img src={app.fig} alt={app.title} loading="lazy" />
      </figure>
      <div className="portfollio-item__details">
        <ProjectActions
          demo={app.demo}
          git={app.git}
          gitBack={app.gitBack}
          id={app.id}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
          setExpandedGitModal={setExpandedGitModal}
          expandedGitModal={expandedGitModal}
        />
        <ProjectExpandedDetails
          title={app.title}
          description={app.description}
          techs={app.techs}
          slug={app.slug}
        />
      </div>
    </ProjectContainer>
  );
};

export default Project;
