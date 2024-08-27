import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import RootLayout from "../layouts/RootLayout";

const Home = () => {
  return (
    <RootLayout>
      <div className="relative max-w-4xl mx-auto pt-20 sm:pt-24 lg:pt-32 flex flex-col space-y-6 items-center">
        <h1 className="text-slate-900 font-medium !leading-tight text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-slate-200 z-20">
          I'm a{" "}
          <span className="relative sm:after:underline-svg sm:dark:after:underline-svg-dark">
            <span className="relative z-10">Web Developer</span>
          </span>{" "}
          primarily based in the UAE
        </h1>
        <Link to="/portfolio">
          <ButtonPrimary>See my portfolio</ButtonPrimary>
        </Link>
      </div>
    </RootLayout>
  );
};

export default Home;
