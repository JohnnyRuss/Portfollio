export interface AppType {
  id: string;
  title: string;
  slug: string;
  fig: string;
  demo: string;
  git: string;
  gitBack?: string;
  techs: string[];
  description: string;
  featured: boolean;
}

export interface BioType {
  bio: string;
  fig: string[];
}

export interface ContactType {
  mobile: string;
  email: string;
  facebook: string;
  location: string;
}

export interface SkillType {
  id: string;
  title: string;
  logo: string;
}
