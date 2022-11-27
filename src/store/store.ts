import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  BioType,
  AppType,
  SkillType,
  ContactType,
} from "../interface/interface.types";

import aps from "../utils/portfollio.json";
import bio from "../utils/bio.json";
import contact from "../utils/contact.json";
import skills from "../utils/skills.json";

interface StoreType {
  aps: AppType[];
  bio: BioType;
  skills: SkillType[];
  contact: ContactType;
  techs: string[];
  filteredApps: AppType[];
  filterKeyWords: string[];

  /// setters

  setFilter: (tech: string) => void;
}

const useStore = create<StoreType>()(
  devtools((set) => ({
    aps,
    bio,
    contact,
    skills,
    techs: Array.from(new Set(aps.flatMap((app) => app.techs))),
    filteredApps: [],
    filterKeyWords: [],

    /// setters

    setFilter: (tech: string) =>
      set((state) => {
        const keys = state.filterKeyWords.includes(tech)
          ? state.filterKeyWords.filter((key) => key !== tech)
          : [...state.filterKeyWords, tech];

        const filtered = state.aps.filter((app) =>
          app.techs.some((tech) => keys.includes(tech))
        );

        return { ...state, filteredApps: filtered, filterKeyWords: keys };
      }),
  }))
);

export default useStore;
