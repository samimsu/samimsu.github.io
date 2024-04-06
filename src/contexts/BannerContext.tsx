import React, { createContext, useState } from "react";

type BannerProviderProps = {
  children: React.ReactNode;
};

export const BannerContext = createContext({
  showBanner: true,
  closeBanner: () => {},
});

export const BannerProvider = ({ children }: BannerProviderProps) => {
  const [showBanner, setShowBanner] = useState(true);

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <BannerContext.Provider value={{ showBanner, closeBanner }}>
      {children}
    </BannerContext.Provider>
  );
};
