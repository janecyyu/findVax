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
        <p>
          Otherwise, you can also check:{" "}
          <a
            href="https://healthy.kaiserpermanente.org/southern-california/health-wellness/coronavirus-information/covid-vaccine"
            target="_blank"
          >
            Kaiser
          </a>
          ,{" "}
          <a
            href="https://www.sutterhealth.org/pamf/for-patients/health-alerts/covid-19-vaccine"
            target="_blank"
          >
            Palo Alto Medical Foundation
          </a>
          ,{" "}
          <a href="https://stanfordhealthcare.org/discover/covid-19-resource-center.html">
            Stanford Healthcare
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
