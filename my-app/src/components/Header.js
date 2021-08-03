import React from "react";
import { Link } from "react-router-dom";

// Header includes Logo, a short description, and navigation

export default function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        VaxBay
      </Link>
      <p className="sub-title">A Vaccine Tracker in Bay Area, CA</p>
      <div className="menu">
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
