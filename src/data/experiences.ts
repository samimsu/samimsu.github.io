import { ExperienceType } from "../types/types";
import technologies from "./technologies";

const experiences: ExperienceType[] = [
  {
    id: 1,
    company: "Classadia",
    location: "Remote",
    duration: "Jan 2024 – Jul 2024",
    position: "Full Stack Web Developer",
    type: "contract",
    link: "https://www.classadia.com/",
    technologies: [
      technologies.react,
      technologies.nestjs,
      technologies.typescript,
    ],
  },
  {
    id: 2,
    company: "Letswork",
    location: "Dubai",
    duration: "Apr 2022 – Sep 2023",
    position: "Frontend Web Developer",
    link: "https://letswork.io/",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.tailwind,
      technologies.mui,
      technologies.typescript,
    ],
  },
  {
    id: 3,
    company: "Freelance",
    location: "Remote",
    duration: "May 2019 – Nov 2021",
    position: "Chatbot Developer",
    type: "part-time",
    technologies: [technologies.nodejs, technologies.python],
  },
];

export default experiences;
