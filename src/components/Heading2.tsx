interface Heading2Props {
  children: React.ReactNode;
}

const Heading2 = ({ children }: Heading2Props) => {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-slate-700 dark:text-slate-400">
      {children}
    </h2>
  );
};

export default Heading2;
