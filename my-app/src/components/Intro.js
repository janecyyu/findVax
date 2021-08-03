import React from "react";

// This component is a introduction of the app, VaxBay with: intro, checked pharmacies, checked counties and note

export default function Intro() {
  return (
    <div className="intro">
      <p>
        <span style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}>
          VaxBay
        </span>{" "}
        is a COVID-19 vaccines appointments tracker, and the data is as up to
        date as possible. Refresh the page as needed. We understand how hard it
        is to find an open appointment close to us, and how crazy it is that
        people have to open tons of webpages and refresh them all the time.
        Hopefully, this project can help our neighbors in the bay area find the
        closest vaccine appointments to us. 
      </p>
      <p>
        {" "}
        <span style={{ fontWeight: "bold" }}>Checked Pharmacies:</span> CVS,
        Pharmaca, Rite Aid, Safeway, Walgreens, Walmart, Costco
      </p>
      <p>
        {" "}
        <span style={{ fontWeight: "bold" }}>Checked Counties:</span> San
        Francisco, San Mateo, Santa Clara, Alameda, Contra Costa
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Note that:</span> Due to high
        demand, we cannot guarantee 100% the availabilities are up to date, but
        we try our best to give people the latest data! 🔥
      </p>
    </div>
  );
}
