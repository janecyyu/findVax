import "./App.css";
import VaxGrid from "./components/VaxGrid";
import Bar from "./components/Bar";
import Intro from "./components/Intro";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
          <p>
            {" "}
            Join wait list: <a href="https://hidrb.com/">Dr.B,</a>{" "}
            <a href="https://extravaccinenotifier.com/get-a-vaccine/">
              Vaccine Notifier
            </a>
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;
