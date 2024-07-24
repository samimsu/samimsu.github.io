import { Fragment } from "react";
import RootLayout from "../layouts/RootLayout";
import { useThemeContext } from "../hooks/useThemeContext";
import projects from "../data/projects";
import { TECHNOLOGIES } from "../constants";
import Tooltip from "../components/Tooltip";
import Heading2 from "../components/Heading2";
import NewTabIcon from "../components/NewTabIcon";

const Portfolio = () => {
  const { isLightMode } = useThemeContext();

  const renderExperienceSection = () => {
    return (
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Heading2>Experience</Heading2>
        </div>
      </div>
    );
  };

  const renderProjectsSection = () => {
    return (
      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
                          {/* <button className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700">
                            Hover me
                          </button> */}
                        </Tooltip>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <RootLayout>
      {/* {renderExperienceSection()} */}
      {renderProjectsSection()}
    </RootLayout>
  );
};

export default Portfolio;
