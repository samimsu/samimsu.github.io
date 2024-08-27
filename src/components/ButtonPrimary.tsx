interface ButtonPrimaryProps {
  children?: React.ReactNode;
  className?: string;
}

const ButtonPrimary = ({
  children = "Button",
  className = "",
  ...props
}: ButtonPrimaryProps) => {
  return (
    <button
      {...props}
      className={`w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-400 disabled:dark:bg-blue-500 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
