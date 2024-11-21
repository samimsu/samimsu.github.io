import RootLayout from "../layouts/RootLayout";
import { useThemeContext } from "../hooks/useThemeContext";
import Heading2 from "../components/Heading2";
import { myChessProfile, myLinkedinProfile } from "../data/links";
import technologies from "../data/technologies";
import ChessPawnIcon from "../components/ChessPawnIcon";
import PakistanFlagIcon from "../components/PakistanFlagIcon";
import DiscordIcon from "../components/DiscordIcon";

const About = () => {
  const { isLightMode } = useThemeContext();

  return (
    <RootLayout>
      <div className="page-container animate-slidein opacity-0 [--slidein-delay:300ms]">
        <div className="max-w-2xl mx-auto">
          <Heading2>About Me</Heading2>
          <div className="mt-6 space-y-4 text-left text-lg text-slate-700 dark:text-slate-400">
            <p>
              Hi 👋 I'm Sami, a 💻 Web Developer currently based in{" "}
              <span className="inline-flex items-center mr-1">
                <PakistanFlagIcon />
              </span>
              Pakistan. With years of professional experience in software
              engineering, I specialise in front end development using{" "}
              <span className="inline-flex items-center mr-1 h-3">
                <img
                  src={
                    isLightMode
                      ? technologies.react.imageSrc.light
                      : technologies.react.imageSrc.dark
                  }
                  className={`object-contain w-full h-full`}
                />
              </span>
              React.
            </p>
            <p>
              I started off as a freelancer in 2019 building{" "}
              <span className="inline-flex items-center mr-1">
                <DiscordIcon />
              </span>
              Discord chatbots for clients online. I moved on to work for
              Letswork as a Frontend Web Developer. My last job was a contract
              role as a Web Developer at Classadia where I also got the chance
              to work on the backend using{" "}
              <span className="inline-flex items-center mr-1 h-3">
                <img
                  src={
                    isLightMode
                      ? technologies.nestjs.imageSrc.light
                      : technologies.nestjs.imageSrc.dark
                  }
                  className={`object-contain w-full h-full`}
                />
              </span>
              NestJS.
            </p>
            <p>
              Apart from coding, I also enjoy 📓 journaling, reading 📖 books,
              playing ⚽ football and playing{" "}
              <a
                href={myChessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <span className="inline-flex items-center mr-1">
                  <ChessPawnIcon />
                </span>
                chess
              </a>
              .
            </p>
            <p>
              At the moment, I'm on the hunt for my next opportunity. Feel free
              to{" "}
              <a
                href={myLinkedinProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                reach out
              </a>{" "}
              if you'd like to get in touch.
            </p>
          </div>
          <div className="mt-8 italic text-sm text-left text-slate-700 dark:text-slate-400">
            Updated: 2024-11-22
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default About;
