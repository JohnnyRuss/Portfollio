import React from "react";

interface ProjectExpandedDetailsType {
  title: string;
  description: string;
  techs: string[];
}

const ProjectExpandedDetails: React.FC<ProjectExpandedDetailsType> = ({
  title,
  description,
  techs,
}) => {
  return (
    <div className="details__expanded">
      <p>
        <span className="expanded-field--title">Title: </span>
        <span className="expanded-main">{title}</span>
      </p>
      {description && (
        <p>
          <span className="expanded-field--title">Description: </span>
          <span>{description}</span>
        </p>
      )}
      <p>
        <span className="expanded-field--title">Techs: </span>
        {techs.map((tech, i, arr) => (
          <span className="expanded-main" key={tech}>{`${tech}${
            i === arr.length - 1 ? "." : ", "
          }`}</span>
        ))}
      </p>
    </div>
  );
};

export default ProjectExpandedDetails;
