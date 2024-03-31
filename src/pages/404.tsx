import RootLayout from "../layouts/RootLayout";
import detonator from "../assets/detonator.svg";

const Page404 = () => {
  return (
    <RootLayout>
      <div className="flex flex-col justify-center items-center space-y-5 grow">
        <img
          src={detonator}
          className="logo react"
          alt="React logo"
          width={200}
        />
        <h1 className="text-3xl font-medium flex text-[#f5939a]">
          Page Not Found
        </h1>
      </div>
    </RootLayout>
  );
};

export default Page404;
