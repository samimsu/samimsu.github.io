import { useState } from "react";
import { Link } from "react-router-dom";
import navItems from "../data/navItems";
import ThemeToggleButton from "./ThemeToggleButton";
import LinkedInIcon from "./LinkedInIcon";
import GithubIcon from "./GithubIcon";

const MenuIcon = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon fab ${className}`}
      viewBox="0 0 448 512"
      fill="currentColor"
    >
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const renderSocialIcon = ({
    icon,
    link,
    className,
  }: {
    icon: JSX.Element;
    link: string;
    className: string;
  }) => {
    return (
      <a
        href={link}
        className={`ml-6 flex items-center text-slate-400 ${className}`}
      >
        {icon}
      </a>
    );
  };

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 sm:border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <Link
              to="/"
              className={`mr-3 flex-none overflow-hidden md:w-auto text-sm leading-6 font-semibold ${
                window.location.pathname === "/"
                  ? "text-sky-500 dark:text-sky-400"
                  : "text-slate-700 dark:text-slate-200"
              }  hover:text-sky-500 dark:hover:text-sky-400`}
            >
              Home
            </Link>
            <div className="relative flex items-center ml-auto">
              <nav className="hidden sm:flex text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  {navItems
                    .filter((item) => item.link !== "/")
                    .map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.link}
                          className={`${
                            window.location.pathname === item.link
                              ? "text-sky-500 dark:text-sky-400"
                              : ""
                          }hover:text-sky-500 dark:hover:text-sky-400`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
              <div className="flex items-center sm:border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <ThemeToggleButton />

                {renderSocialIcon({
                  icon: <LinkedInIcon className="fa-lg" />,
                  link: "https://linkedin.com/in/samimsu",
                  className: "hover:text-[#0077b5] dark:hover:text-[#0077b5]",
                })}

                {renderSocialIcon({
                  icon: <GithubIcon className="fa-lg" />,
                  link: "https://github.com/samimsu",
                  className: "hover:text-[#333] dark:hover:text-[#333]",
                })}
              </div>
              <nav className="flex sm:hidden items-center text-slate-400 ml-6">
                <button
                  className="flex text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 disabled:cursor-not-allowed disabled:hover:text-slate-400"
                  onClick={() => setShowMobileMenu((prev) => !prev)}
                >
                  <MenuIcon className="fa-lg" />
                </button>
                {showMobileMenu && (
                  <div
                    className="absolute w-full md:block md:w-auto top-6 top-[300px]_ right-0 max-w-52"
                    id="navbar-default"
                  >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      {navItems.map((item) => (
                        <li key={item.id}>
                          <Link
                            to={item.link}
                            className={`block py-2 px-3 ${
                              window.location.pathname === item.link
                                ? "text-white bg-blue-700 rounded"
                                : "text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                            }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
