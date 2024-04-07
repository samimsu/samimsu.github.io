import SunSVG from "../assets/SunSVG";
import MoonSVG from "../assets/MoonSVG";
import { useThemeContext } from "../hooks/useThemeContext";

const ThemeToggleButton = () => {
  const { isLightMode, toggleTheme } = useThemeContext();

  return (
    <button
      className="text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 disabled:cursor-not-allowed disabled:hover:text-slate-400"
      onClick={toggleTheme}
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
