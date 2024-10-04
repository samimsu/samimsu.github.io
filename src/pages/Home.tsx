import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import RootLayout from "../layouts/RootLayout";
import samiImage from "../assets/sami.jpeg";
import samiCV from "../assets/sami-cv.pdf";

const Home = () => {
  return (
    <RootLayout>
      <div className="relative max-w-4xl mx-auto pt-20 sm:pt-24 lg:pt-32 flex flex-col space-y-6 items-center">
        <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-20 items-center animate-slidein opacity-0 [--slidein-delay:300ms]">
          <div className="">
            <h1 className="flex flex-col text-slate-900 font-medium text-4xl sm:text-5xl lg:text-6xl text-center dark:text-slate-200 z-20">
              <span className="text-lg">Hey👋 I'm </span>
              <span className="mb-2">Sami</span>
              <span className="bard-hello pb-4 text-2xl sm:text-3xl lg:text-4xl">
                Web Developer
              </span>
            </h1>
            <div className="flex space-x-2 justify-center">
              <Link to="/portfolio">
                <ButtonPrimary>Portfolio</ButtonPrimary>
              </Link>
              <a href={samiCV} target="_blank" rel="noopener noreferrer">
                <ButtonSecondary>Resume</ButtonSecondary>
              </a>
            </div>
          </div>

          <div className="max-w-48 aspect-square">
            <img
              src={samiImage}
              className="object-cover object-left w-full h-full rounded-full border-2 border-black dark:border-slate-100 min-w-48 min-h-48"
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Home;
