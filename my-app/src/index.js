import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Disclaimer from "./components/Disclaimer";
import "./index.css";
import About from "./pages/About";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Header></Header>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <div className="share" style={{ margin: "1rem" }}>
        2021 © VaxBay
      </div>
      <Disclaimer />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
