import TwitterIcon from "@material-ui/icons/Twitter";
import Iframe from "react-iframe";
import "./App.css";
import Intro from "./components/Intro";
import VaxGrid from "./components/VaxGrid";
import ApptGrid from "./components/ApptGrid";

function App() {
  return (
    <div className="App">
      <div>
        <Intro />
        {/* <VaxGrid /> */}
        <ApptGrid />
        <p>
          Otherwise, you can also check:{" "}
          <a
            href="https://healthy.kaiserpermanente.org/northern-california/health-wellness/coronavirus-information/covid-vaccine"
            target="_blank"
            rel="noreferrer"
          >
            Kaiser
          </a>
          ,{" "}
          <a
            href="https://www.sutterhealth.org/pamf/for-patients/health-alerts/covid-19-vaccine"
            target="_blank"
            rel="noreferrer"
          >
            Sutter Health
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
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></Iframe>
          <a
            class="twitter-timeline"
            href="https://twitter.com/VaxBay?ref_src=twsrc%5Etfw"
            style={{
              background: "rgb(29, 161, 242)",
              color: "white",
              fontFamily: "Helvetica Neue",
              height: "20px",
              borderRadius: "3px",
              fontSize: "0.1rem",
              width: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TwitterIcon />
            @VaxBay
          </a>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </div>
  );
}

export default App;
