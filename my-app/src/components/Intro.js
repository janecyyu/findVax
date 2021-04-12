import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import React from "react";

export default function Intro() {
  return (
    <div className="intro">
      <p>
        
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
      {/* <div>
        <FavoriteBorderIcon />
        <LocalFloristIcon />
        <InsertEmoticonIcon />
        <FavoriteIcon />
        <FavoriteBorderIcon />
      </div> */}
      {/* <p>
        {" "}
        <span style={{ fontWeight: "bold" }}>Checked Pharmacies:</span>{" "}
        Albertsons, CVS, Pharmaca, Rite Aid, Safeway, Walgreens, Walmart, Costco
      </p>
      <p>
        {" "}
        <span style={{ fontWeight: "bold" }}>Checked Areas:</span> San
        Francisco, San Mateo County, Santa Clara County,
        <br /> Contra Costa County, Alameda County
      </p> */}
      <p>
        <span style={{ fontWeight: "bold" }}>Note that:</span> Due to high
        demand, we cannot guarantee 100% the availabilities are up to date, but
        we try our best to give people the latest data! 🔥
      </p>
    </div>
  );
}
