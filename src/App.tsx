import wreckingBallCrane from "./assets/wrecking-ball-crane.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex flex-col justify-center items-center space-y-5 grow">
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
    </div>
  );
}

export default App;
