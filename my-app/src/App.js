import "./App.css";
import VaxGrid from "./components/VaxGrid";
import Intro from "./components/Intro";
import Iframe from "react-iframe";

function App() {
  return (
    <div className="App">
      <div>
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
        <div className="share">
          <Iframe
            src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.vaxbay.com%2F&layout=button&size=small&width=60&height=20&appId"
            width="60"
            height="20"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></Iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
