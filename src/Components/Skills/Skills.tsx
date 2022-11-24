import React from "react";
import { SkillsContainer } from "./skills.styled";
import skills from "../../lib/skills.json";

interface SkillsType {}

const Skills: React.FC<SkillsType> = (props) => {
  return (
    <SkillsContainer>
      {skills.map((sk) => (
        <div className="skill-item" key={sk.id}>
          <figure className="skill-item__fig">
            <img src={sk.logo} alt={sk.title} />
          </figure>
          <span className="skill-item__title">{sk.title}</span>
        </div>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
