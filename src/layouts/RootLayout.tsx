import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { useBannerContext } from "../hooks/useBannerContext";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  const { showBanner, closeBanner } = useBannerContext();

  return (
    <div className="flex flex-col h-full overflow-clip">
      {showBanner && <Banner close={closeBanner} />}
      <Header />
      <div className="flex-1 min-h-[500px]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
