import wreckingBallCrane from "./assets/wrecking-ball-crane.svg";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center space-y-5">
      <img
        src={wreckingBallCrane}
        className="logo react"
        alt="React logo"
        width={200}
      />
      <h1 className="text-3xl font-medium flex text-[#f5939a]">
        Under Construction
      </h1>
    </div>
  );
}

export default App;
