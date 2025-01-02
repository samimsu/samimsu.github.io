import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-full overflow-clip">
      <Header />
      <div className="flex-1 min-h-[500px]">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
