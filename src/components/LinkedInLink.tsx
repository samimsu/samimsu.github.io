import { myLinkedinProfile } from "../data/links";
import LinkedInIcon from "./LinkedInIcon";

const LinkedInLink = () => {
  return (
    <a
      href={myLinkedinProfile}
      className={`flex items-center text-slate-400 hover:text-[#0077b5] dark:hover:text-[#0077b5]`}
    >
      <LinkedInIcon className="fa-lg" />
    </a>
  );
};

export default LinkedInLink;
