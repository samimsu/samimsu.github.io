import SunSVG from "../assets/SunSVG";
import MoonSVG from "../assets/MoonSVG";
import { THEMES } from "../constants";
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const [isLightMode, setIsLightMode] = useState(
    localStorage.theme === THEMES.LIGHT
  );

  const handleThemeToggle = () => {
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
    if (localStorage.theme === THEMES.DARK) {
      setIsLightMode(false);
    } else {
      setIsLightMode(true);
    }
  }, []);

  return (
    <button
      className="text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 disabled:cursor-not-allowed disabled:hover:text-slate-400"
      onClick={handleThemeToggle}
    >
      {(isLightMode && (
        <span>
          <SunSVG />
        </span>
      )) || (
        <span>
          <MoonSVG />
        </span>
      )}
    </button>
  );
};

export default ThemeToggleButton;
