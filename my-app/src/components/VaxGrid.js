import React, { useState, useEffect } from "react";
import axios from "axios";
import zipCodes from "../recources/zipCodes";
import VaxCard from "./VaxCard";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

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

  console.log(clinics);

  return (
    <div className="grid">
      <div className="available">Available:</div>
      <KeyboardArrowDownIcon />

      <div>
        {clinics.map((clinic, index) => {
          return <VaxCard key={index} clinic={clinic} />;
        })}
      </div>
    </div>
  );
}
