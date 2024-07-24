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
  href: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  technologies: TechnologyType[];
};
