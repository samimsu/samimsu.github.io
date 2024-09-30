import { TECHNOLOGIES } from "../constants";

type TechnologyNamesType = (typeof TECHNOLOGIES)[keyof typeof TECHNOLOGIES];

type TechnologyType = {
  id: number;
  name: TechnologyNamesType;
  imageSrc: {
    light: string;
    dark: string;
  };
  imageAlt: string;
};

export type TechnologiesType = {
  [key: string]: TechnologyType;
};

export type ProjectType = {
  id: number;
  name: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  technologies: TechnologyType[];
  code?: string;
};

export type ExperienceType = {
  id: number;
  company: string;
  location: string;
  duration: string;
  position: string;
  type?: string;
  link?: string;
  technologies?: TechnologyType[];
};

export type NavItemType = {
  id: number;
  title: string;
  link: string;
};
