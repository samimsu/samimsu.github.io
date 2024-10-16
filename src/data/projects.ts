import { ProjectType } from "../types/types";
import technologies from "./technologies";
import chatGPTScrollerImg from "../assets/projects/chatgpt-scroller.png";
import mjAlkhooryImg from "../assets/projects/mj-alkhoory.png";
import simpleChatImg from "../assets/projects/simplechat.png";
import kanbanBoardsImg from "../assets/projects/kanban-boards.webp";
import {
  chatGPTScrollerRepo,
  chatGPTScrollerSite,
  kanbanBoardsRepo,
  mjAlKhoorySite,
  simpleChatRepo,
  simpleChatSite,
} from "./links";

const projects: ProjectType[] = [
  {
    id: 1,
    name: "ChatGPT Scroller",
    href: chatGPTScrollerSite,
    imageSrc: chatGPTScrollerImg,
    imageAlt: "ChatGPT Scroller screenshot",
    description: "A Chrome extension for navigating ChatGPT conversations",
    technologies: [technologies.javascript, technologies.webpack],
    code: chatGPTScrollerRepo,
  },
  {
    id: 2,
    name: "MJ Alkhoory Art",
    href: mjAlKhoorySite,
    imageSrc: mjAlkhooryImg,
    imageAlt: "MJ Alkhoory Art website screenshot",
    description: "An art portfolio website",
    technologies: [
      technologies.astro,
      technologies.preact,
      technologies.tailwind,
    ],
  },
  {
    id: 3,
    name: "SimpleChat",
    href: simpleChatSite,
    imageSrc: simpleChatImg,
    imageAlt: "SimpleChat website screenshot",
    description: "A minimalistic web chat application",
    technologies: [technologies.react, technologies.firebase],
    code: simpleChatRepo,
  },
  {
    id: 4,
    name: "Kanban Boards",
    imageSrc: kanbanBoardsImg,
    imageAlt: "Kanban Boards website screenshot",
    description: "A web app for convenient task management",
    technologies: [
      technologies.react,
      technologies.mui,
      technologies.mongoDB,
      technologies.express,
      technologies.nodejs,
    ],
    code: kanbanBoardsRepo,
  },
];

export default projects;
