import React from "react";
import Header from "../components/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;
