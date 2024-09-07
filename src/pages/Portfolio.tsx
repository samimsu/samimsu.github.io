import { Fragment } from "react";
import RootLayout from "../layouts/RootLayout";
import { useThemeContext } from "../hooks/useThemeContext";
import projects from "../data/projects";
import { TECHNOLOGIES } from "../constants";
import Tooltip from "../components/Tooltip";
import Heading2 from "../components/Heading2";
import NewTabIcon from "../components/NewTabIcon";
import experiences from "../data/experiences";
import { ExperienceType } from "../types/types";

const Portfolio = () => {
  const { isLightMode } = useThemeContext();

  const renderExperienceSection = () => {
    const renderExperience = ({
      id,
      company,
      location,
      duration,
      position,
      type,
      link,
    }: ExperienceType) => {
      return (
        <div key={id}>
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="text-md">
              {link ? (
                <a href={link} className="hover:underline">
                  {company}
                </a>
              ) : (
                <>{company}</>
              )}
              , {location} {type && <i>({type})</i>}
            </div>
            <div className="text-sm">{duration}</div>
          </div>
          <div className="font-medium text-lg">{position}</div>
        </div>
      );
    };
    return (
      <div>
        <Heading2>Relevant Experience</Heading2>
        <div className="mx-auto max-w-xl mt-6 text-left space-y-3 primary-text-color">
          {experiences.map((experience) => renderExperience(experience))}
        </div>
      </div>
    );
  };

  const renderProjectsSection = () => {
    return (
      <div>
        <Heading2>Selected Projects</Heading2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col items-start space-y-1">
                <h3 className="text-sm text-gray-700 dark:text-gray-400">
                  <a
                    href={project.href}
                    className="flex items-center space-x-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-medium">{project.name} </span>
                    <NewTabIcon className="fa-sm" />
                  </a>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-200 pb-2 text-left">
                  {project.description}
                </p>
                {/* TECHNOLOGIES USED */}
                <div className="flex items-center h-10 space-x-2">
                  {project.technologies.map((technology) => (
                    <Fragment key={technology.id}>
                      <Tooltip content={technology.name}>
                        <div className="flex items-center h-10">
                          <img
                            src={
                              isLightMode
                                ? technology.imageSrc.light
                                : technology.imageSrc.dark
                            }
                            className={`object-contain w-full ${
                              technology.name === TECHNOLOGIES.TAILWIND_CSS
                                ? "h-4/6"
                                : "h-full"
                            }`}
                          />
                        </div>
                      </Tooltip>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <RootLayout>
      <div className="page-container space-y-16 animate-slidein opacity-0 [--slidein-delay:300ms]">
        {renderExperienceSection()}
        {renderProjectsSection()}
      </div>
    </RootLayout>
  );
};

export default Portfolio;
