import { ButtonHTMLAttributes } from "react";

interface ButtonSecondaryProps
  extends React.DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  className?: string;
}

const ButtonSecondary = ({
  children = "Button",
  className = "",
  ...props
}: ButtonSecondaryProps) => {
  const backgroundColors = "bg-transparent dark:bg-transparent";
  const textColors =
    "text-slate-900 hover:text-sky-600 dark:text-white dark:hover:text-sky-500";
  const ringStyles = "ring-1";
  return (
    <button
      {...props}
      className={`w-fit focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed ${className} ${backgroundColors} ${textColors} ${ringStyles}`}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
