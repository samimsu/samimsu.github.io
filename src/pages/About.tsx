import RootLayout from "../layouts/RootLayout";
import Heading2 from "../components/Heading2";
import { myChessProfile } from "../data/links";

const About = () => {
  return (
    <RootLayout>
      <div className="page-container animate-slidein opacity-0 [--slidein-delay:300ms]">
        <div className="max-w-2xl mx-auto">
          <Heading2>About Me</Heading2>
          <div className="mt-6 space-y-4 text-left text-lg text-slate-700 dark:text-slate-400">
            <p>
              Hi, I'm Sami, a Web Developer currently based in Pakistan. With
              over 2 years of professional experience in software engineering, I
              specialise in front end development using React.
            </p>
            <p>
              I started off as a freelancer in 2019 building chatbots for
              clients online. I moved on to work for Letswork as a Frontend Web
              Developer. My last job was a contract role as a Web Developer at
              Classadia where I also got the chance to work on the backend using
              NestJS.
            </p>
            <p>
              Apart from coding, I also enjoy journaling, playing football,
              reading books and playing chess (
              <a
                href={myChessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                challenge me
              </a>
              ).
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default About;
