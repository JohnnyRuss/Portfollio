import React from "react";
import useStore from "../../store/store";

import { IoIosArrowForward } from "react-icons/io";

interface FillterKeysType {
  keys: string[];
}

const FillterKeys: React.FC<FillterKeysType> = ({ keys }) => {
  const setFilter = useStore((state) => state.setFilter);

  return (
    <div className="filter-keys--list">
      {keys.map((tech) => (
        <div className="filter-keys--list__item" key={`filter-key-${tech}`}>
          <span onClick={() => setFilter(tech)}>{tech}</span>
          <IoIosArrowForward />
        </div>
      ))}
    </div>
  );
};

export default FillterKeys;
