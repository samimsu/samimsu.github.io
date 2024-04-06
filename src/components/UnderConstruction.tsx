import wreckingBallCrane from "../assets/wrecking-ball-crane.svg";

const UnderConstruction = ({ title = "" }) => {
  const underConstruction = "Under Construction";
  return (
    <div className="flex flex-col justify-center items-center space-y-5 grow">
      <img src={wreckingBallCrane} width={200} alt="wrecking ball crane" />
      <h1 className="text-3xl font-medium flex text-[#f5939a]">
        {title ? `${title} - ${underConstruction}` : underConstruction}
      </h1>
    </div>
  );
};

export default UnderConstruction;
