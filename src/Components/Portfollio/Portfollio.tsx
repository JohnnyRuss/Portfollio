import React, { useState } from "react";
import { PortfollioContainer } from "./portfollio.styled";
import apps from "../../lib/portfollio.json";
import Project from "./Project";

const Portfollio: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <PortfollioContainer>
      <div className="apps-container">
        {apps.slice(0, showAll ? apps.length : 4).map((app) => (
          <Project
            app={app}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
            key={app.id}
          />
        ))}
      </div>
      <button
        onClick={() => setShowAll((prev) => !prev)}
        className="show-apps--btn"
      >
    {showAll ?"hide apps":`show more (+${apps.length-4})`}
      </button>
    </PortfollioContainer>
  );
};

export default Portfollio;
