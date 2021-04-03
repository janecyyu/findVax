import "./App.css";
import VaxGrid from "./components/VaxGrid";
import Intro from "./components/Intro";

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
        <a
          name="fb_share"
          type="button_count"
          href="http://www.facebook.com/sharer.php?appId={YOUR APP ID}&link=<?php the_permalink() ?>"
          rel="nofollow"
        >
          Share
        </a>
        <script
          src="http://static.ak.fbcdn.net/connect.php/js/FB.Share"
          type="text/javascript"
        ></script>
      </div>
    </div>
  );
}

export default App;
