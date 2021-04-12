import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        VaxBay
      </Link>
      <p className="sub-title">A Vaccine Tracker in Bay Area, CA</p>
      <div className="menu">
        <a
          className="twitter"
          href="https://twitter.com/VaxBay?ref_src=twsrc%5Etfw"
        >
          <TwitterIcon style={{ color: "rgb(58, 154, 169)" }} />
        </a>
        <div className="about-container">
          <Link className="about" to="/">
            Home
          </Link>
          {" | "}
          <Link className="about" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
