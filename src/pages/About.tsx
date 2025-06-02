import RootLayout from "../layouts/RootLayout";
import Heading2 from "../components/Heading2";

const About = () => {
  return (
    <RootLayout>
      <div className="page-container animate-slidein opacity-0 [--slidein-delay:300ms]">
        <div className="max-w-2xl mx-auto">
          <Heading2>About Me</Heading2>
          <div className="mt-6 space-y-4 text-left text-lg text-slate-700 dark:text-slate-400">
            <p>
              Hi I'm Sami, a Web Developer based in Pakistan. My technology of
              choice is React which I've been using for over 4 years now.
            </p>
            <p>
              I started off as a freelancer in 2019 building Discord chatbots
              for clients online. I moved on to work for Letswork as a Frontend
              Web Developer. My last job was a contract role as a Web Developer
              at Classadia where I also got the chance to work on the backend
              using NestJS.
            </p>
            <p>
              Apart from coding, I also enjoy journaling, reading books, playing
              football and playing chess.
            </p>
            <p>
              At the moment, I'm on the hunt for my next opportunity. I'm open
              to both part-time and full-time work. Feel free to reach out if
              you'd like to get in touch.
            </p>
          </div>
          <div className="mt-8 italic text-sm text-left text-slate-700 dark:text-slate-400">
            Updated: 2025-06-02
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default About;
