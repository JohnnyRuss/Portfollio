import React from "react";

import { ProjectContainer } from "./styles/project.styled";
import ProjectExpandedDetails from "./ProjectExpandedDetails";
import ProjectActions from "./ProjectActions";

import {AppType} from "../../interface/interface.types"
interface ProjectType {
  expandedId: string;
  setExpandedId: React.Dispatch<React.SetStateAction<string>>;
  app: AppType
}

const Project: React.FC<ProjectType> = ({ app, expandedId, setExpandedId }) => {
  return (
    <ProjectContainer expanded={app.id === expandedId ? true : false}>
      <figure className="portfollio-item__fig">
        <img src={app.fig} alt={app.title} loading="lazy" />
      </figure>
      <div className="portfollio-item__details">
        <ProjectActions
          demo={app.demo}
          git={app.git}
          id={app.id}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
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
