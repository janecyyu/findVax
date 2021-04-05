import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import axios from "axios";
import React, { useEffect, useState } from "react";
import zipCodes from "../data/zipCodes";
import VaxCard from "./VaxCard";

export default function Vaxgrid() {
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.vaccinespotter.org/api/v0/states/CA.json")
      .then((res) => {
        let data = res.data.features;
        data = data.filter(
          (d) =>
            d.properties.appointments_available === true &&
            zipCodes.includes(parseInt(d.properties.postal_code))
        );
        setClinics(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid">
      <div className="available">Available:</div>
      <KeyboardArrowDownIcon />

      <div>
        {clinics.length > 0 ? (
          clinics.map((clinic, index) => {
            return <VaxCard key={index} clinic={clinic} />;
          })
        ) : (
          <p className="intro">
            So Sorry! There are no available appointments now, but don't worry!
            The data is updating every minute! Please refresh the page for few
            minutes later. Once there are any new release in bay area, will show
            on the page.
          </p>
        )}
      </div>
    </div>
  );
}
