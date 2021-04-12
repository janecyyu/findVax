import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        VaxBay
      </Link>
      <p className="sub-title">A Vaccine Tracker in Bay Area, CA</p>
    </div>
  );
}
