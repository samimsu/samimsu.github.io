import { createContext, useEffect, useState } from "react";
import { THEMES } from "../constants";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({
  isLightMode: localStorage.theme === THEMES.LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isLightMode, setIsLightMode] = useState(
    localStorage.theme === THEMES.LIGHT
  );

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
    if (localStorage.theme === THEMES.LIGHT) {
      localStorage.theme = THEMES.DARK;
      document.documentElement.classList.add(THEMES.DARK);
    } else {
      localStorage.theme = THEMES.LIGHT;
      document.documentElement.classList.remove(THEMES.DARK);
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === THEMES.DARK ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsLightMode(false);
      localStorage.theme = THEMES.DARK;
      document.documentElement.classList.add(THEMES.DARK);
    } else {
      setIsLightMode(true);
      localStorage.theme = THEMES.LIGHT;
      document.documentElement.classList.remove(THEMES.DARK);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
