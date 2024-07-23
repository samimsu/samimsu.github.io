import { Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import LinkedInIcon from "./LinkedInIcon";
import GithubIcon from "./GithubIcon";

const Header = () => {
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
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <a
              className="mr-3 flex-none overflow-hidden md:w-auto text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400"
              href="/"
            >
              Home
            </a>
            <div className="relative hidden lg:flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                <ul className="flex space-x-8">
                  <li>
                    <Link
                      to="/portfolio"
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
