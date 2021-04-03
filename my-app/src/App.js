import "./App.css";
import VaxGrid from "./components/VaxGrid";
import Bar from "./components/Bar";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <div>
        <Bar />
        <Intro />
        <VaxGrid />
      </div>
    </div>
  );
}

export default App;
