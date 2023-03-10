import create from "zustand";
import { devtools } from "zustand/middleware";

import {
  BioType,
  AppType,
  SkillType,
  ContactType,
} from "../interface/interface.types";

import aps from "../utils/portfollio.json";
import blacklist from "../utils/blacklist.json";
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
    aps: aps.filter((app) => !blacklist.projects.includes(app.slug)),
    techs: Array.from(new Set(aps.flatMap((app) => app.techs))),
    skills: skills.filter((skill) => !blacklist.techs.includes(skill.id)),
    bio,
    contact,
    filteredApps: [],
    filterKeyWords: [],

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
