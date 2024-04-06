import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useBannerContext } from "../hooks/useBannerContext";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  const { showBanner, closeBanner } = useBannerContext();

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900">
      <Header />
      {showBanner && <Banner close={closeBanner} />}
      {children}
    </div>
  );
};

export default RootLayout;
