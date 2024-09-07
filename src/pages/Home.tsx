import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import RootLayout from "../layouts/RootLayout";
import samiImage from "../assets/sami.jpeg";

const Home = () => {
  return (
    <RootLayout>
      <div className="relative max-w-4xl mx-auto pt-20 sm:pt-24 lg:pt-32 flex flex-col space-y-6 items-center">
        <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-20 items-center">
          <div>
            <h1 className="flex flex-col text-slate-900 font-medium text-4xl sm:text-5xl lg:text-6xl text-center dark:text-slate-200 z-20">
              <span className="text-lg">Hey👋 I'm </span>
              <span className="mb-2">Sami</span>
              <div className="bard-hello flex flex-col">
                <span className="pb-4 text-2xl sm:text-3xl lg:text-4xl">
                  Web Developer
                </span>
              </div>
            </h1>
            <Link to="/portfolio">
              <ButtonPrimary className="rounded-full !bg-sky-500 dark:!bg-sky-400  dark:!text-slate-900">
                My Portfolio
              </ButtonPrimary>
            </Link>
          </div>

          <div className="max-w-48 aspect-square">
            <img
              src={samiImage}
              className="object-cover object-left w-full h-full rounded-full border-2 border-black dark:border-slate-100"
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Home;
