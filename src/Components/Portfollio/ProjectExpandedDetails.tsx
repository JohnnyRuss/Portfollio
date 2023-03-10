import React from "react";
import { useTranslation } from "react-i18next";

interface ProjectExpandedDetailsType {
  title: string;
  description: string;
  techs: string[];
  slug: string;
}

const ProjectExpandedDetails: React.FC<ProjectExpandedDetailsType> = ({
  title,
  description,
  techs,
  slug,
}) => {
  const { t } = useTranslation();

  return (
    <div className="details__expanded">
      <p className="expanded__item">
        <span className="expanded-field--title">{t("project_title")}</span>
        <span className="expanded-main">{title}</span>
      </p>
      {description && (
        <p className="expanded__item">
          <span className="expanded-field--title">
            {t("project_description")}
          </span>
          <span className="expanded-main">{t(`app_desc_${slug}`)}</span>
        </p>
      )}
      <div className="expanded__item">
        <span className="expanded-field--title">{t("project_techs")}</span>
        <ul className="expanded-main expanded__techs">
          {techs.map((tech, i) => (
            <li key={`tech-${tech}__${i}`}>
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectExpandedDetails;
