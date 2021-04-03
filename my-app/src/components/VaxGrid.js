import React, { useState, useEffect } from "react";
import axios from "axios";
import zipCodes from "../recources/zipCodes";
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

  console.log(clinics);

  return (
    <div>
      <h1>Hi Vax</h1>
      <div>
        {clinics.map((clinic, index) => {
          //   <h2 key={index}>{clinic.properties.name}</h2>
          return <VaxCard key={index} clinic={clinic} />;
        })}
      </div>
    </div>
  );
}
