import { myGithubProfile } from "../data/links";
import GithubIcon from "./GithubIcon";

const GithubLink = () => {
  return (
    <a
      href={myGithubProfile}
      className={`flex items-center text-slate-400 hover:text-[#333] dark:hover:text-[#333]`}
    >
      <GithubIcon className="fa-lg" />
    </a>
  );
};

export default GithubLink;
