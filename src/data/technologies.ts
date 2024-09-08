import { TECHNOLOGIES } from "../constants";
import { TechnologiesType } from "../types/types";
import astroLightIcon from "../assets/technologies/astro-icon-light-gradient.png";
import astroDarkIcon from "../assets/technologies/astro-icon-dark.png";
import preactIcon from "../assets/technologies/preact.png";
import tailwindIcon from "../assets/technologies/tailwindcss-mark.svg";
import reactLightIcon from "../assets/technologies/react-light.svg";
import reactDarkIcon from "../assets/technologies/react-dark.svg";
import firebaseIcon from "../assets/technologies/firebase.svg";
import muiIcon from "../assets/technologies/mui.svg";
import mongoDBLightIcon from "../assets/technologies/mongodb-light.svg";
import mongoDBDarkIcon from "../assets/technologies/mongodb-dark.svg";
import expressIcon from "../assets/technologies/express.svg";
import nodejsIcon from "../assets/technologies/nodejs.svg";
import nextjsLightIcon from "../assets/technologies/nextjs-icon-light-background.svg";
import nextjsDarkIcon from "../assets/technologies/nextjs-icon-dark-background.svg";
import typescriptIcon from "../assets/technologies/typescript-icon.svg";
import nestjsIcon from "../assets/technologies/nestjs.svg";
import pythonIcon from "../assets/technologies/python.png";

const technologies: TechnologiesType = {
  astro: {
    id: 1,
    name: TECHNOLOGIES.ASTRO,
    imageSrc: { light: astroDarkIcon, dark: astroLightIcon },
    imageAlt: "Astro Icon",
  },
  preact: {
    id: 2,
    name: TECHNOLOGIES.PREACT,
    imageSrc: { light: preactIcon, dark: preactIcon },
    imageAlt: "Preact Icon",
  },
  tailwind: {
    id: 3,
    name: TECHNOLOGIES.TAILWIND_CSS,
    imageSrc: { light: tailwindIcon, dark: tailwindIcon },
    imageAlt: "Tailwind CSS Icon",
  },
  react: {
    id: 4,
    name: TECHNOLOGIES.REACT,
    imageSrc: { light: reactLightIcon, dark: reactDarkIcon },
    imageAlt: "React Icon",
  },
  firebase: {
    id: 5,
    name: TECHNOLOGIES.FIREBASE,
    imageSrc: { light: firebaseIcon, dark: firebaseIcon },
    imageAlt: "Firebase Icon",
  },
  mui: {
    id: 6,
    name: TECHNOLOGIES.MATERIAL_UI,
    imageSrc: { light: muiIcon, dark: muiIcon },
    imageAlt: "Material UI Icon",
  },
  mongoDB: {
    id: 7,
    name: TECHNOLOGIES.MONGO_DB,
    imageSrc: { light: mongoDBLightIcon, dark: mongoDBDarkIcon },
    imageAlt: "MongoDB Icon",
  },
  express: {
    id: 8,
    name: TECHNOLOGIES.EXPRESS,
    imageSrc: { light: expressIcon, dark: expressIcon },
    imageAlt: "Express Icon",
  },
  nodejs: {
    id: 9,
    name: TECHNOLOGIES.NODE_JS,
    imageSrc: { light: nodejsIcon, dark: nodejsIcon },
    imageAlt: "Node.js Icon",
  },
  nextjs: {
    id: 10,
    name: TECHNOLOGIES.NEXT_JS,
    imageSrc: { light: nextjsLightIcon, dark: nextjsDarkIcon },
    imageAlt: "Next.js Icon",
  },
  typescript: {
    id: 11,
    name: TECHNOLOGIES.TYPESCRIPT,
    imageSrc: { light: typescriptIcon, dark: typescriptIcon },
    imageAlt: "TypeScript Icon",
  },
  nestjs: {
    id: 12,
    name: TECHNOLOGIES.NEST_JS,
    imageSrc: { light: nestjsIcon, dark: nestjsIcon },
    imageAlt: "NestJS Icon",
  },
  python: {
    id: 13,
    name: TECHNOLOGIES.PYTHON,
    imageSrc: { light: pythonIcon, dark: pythonIcon },
    imageAlt: "Python Icon",
  },
};

export default technologies;
