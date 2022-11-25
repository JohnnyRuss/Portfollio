import React from "react";
import { ProjectContainer } from "./portfollio.styled";
import ProjectExpandedDetails from "./ProjectExpandedDetails";
import ProjectActions from "./ProjectActions";

interface ProjectType {
  expandedId: string;
  setExpandedId: React.Dispatch<React.SetStateAction<string>>;
  app: {
    id: string;
    title: string;
    fig: string;
    demo: string;
    git: string;
    techs: string[];
    description: string;
    featured: boolean;
    slug: string;
  };
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
