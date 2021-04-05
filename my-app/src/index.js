import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Bar from "./components/Bar";
import "./index.css";
import About from "./pages/About";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Bar />
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
