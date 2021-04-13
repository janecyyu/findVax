import React, { useEffect, useState } from "react";
import axios from "axios";
import zipCodes from "../data/zipCodes";
import ApptCard from "../components/ApptCard";

export default function ApptGrid() {
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
        console.log(data);
        setClinics(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div>
      {/* <div className="filter">
        <input
          id="ck1"
          type="checkbox"
          name="county"
          value="Santa Clara"
          onChange={handleChange}
        />
        <label>Santa Clara</label>{" "}
        <input
          id="ck2"
          type="checkbox"
          name="county"
          value="San Mateo"
          onChange={handleChange}
        />
        <label>San Mateo</label>
      </div> */}
      <div className="apptBox">
        {clinics.length > 0 ? (
          clinics.map((clinic) => {
            return <ApptCard props={clinic} />;
          })
        ) : (
          <p>
            We're Sorry! There are no available appointments now, come back
            later!
          </p>
        )}
      </div>
    </div>
  );
}
