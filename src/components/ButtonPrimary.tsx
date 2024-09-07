import { ButtonHTMLAttributes } from "react";

interface ButtonPrimaryProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  className?: string;
}

const ButtonPrimary = ({
  children = "Button",
  className = "",
  ...props
}: ButtonPrimaryProps) => {
  const backgroundColors =
    "bg-sky-500 hover:bg-sky-600 dark:bg-sky-400 dark:hover:bg-sky-500 disabled:bg-sky-200 disabled:dark:bg-sky-300";
  const textColors = "text-white dark:text-slate-900";
  const ringStyles =
    "focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800";
  return (
    <button
      {...props}
      className={`w-fit focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed ${className} ${backgroundColors} ${textColors} ${ringStyles}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
