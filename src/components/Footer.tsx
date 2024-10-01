import Tooltip from "./Tooltip";
import GithubLink from "./GithubLink";
import LinkedInLink from "./LinkedInLink";
import CodeIcon from "./CodeIcon";
import { myPorfolioRepo } from "../data/links";

const Footer = () => {
  return (
    <div className="header-footer-container1 footer-container1">
      <div className="header-footer-container2">
        <div className="header-footer-container3 footer-container3">
          <div className="flex justify-between text-slate-700 dark:text-slate-200">
            <div>Created by Sami</div>
            <div className="flex space-x-3">
              <LinkedInLink />
              <GithubLink />
              <Tooltip content="Website code" position="top-end">
                <a
                  href={myPorfolioRepo}
                  className="flex items-center space-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CodeIcon
                    className="text-slate-400 dark:text-slate-400 hover:text-slate-600"
                    size="24"
                  />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
