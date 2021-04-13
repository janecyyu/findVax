import React from "react";
import Button from "./Buttons";

export default function ApptCard(props) {
  let time =
    props.props.properties.appointments_last_fetched.slice(0, 10) +
    " " +
    props.props.properties.appointments_last_fetched.slice(11, 19) +
    "+0000";

  var a = time.split(/[^0-9]/);
  var d = new Date(a[0], a[1] - 1, a[2], a[3], a[4] - 420, a[5]);
  return (
    <div className="appt">
      <h3>{props.props.properties.provider_brand_name}</h3>{" "}
      <p className="address">
        {props.props.properties.address}
        {", "}
        {props.props.properties.city} {props.props.properties.postal_code}
      </p>
      <a
        style={{ cursor: "pointer", textDecoration: "none" }}
        href={props.props.properties.url}
        target="_blank"
        rel="noreferrer"
      >
        <Button />
      </a>
      <p className="update-time">
        {" "}
        Last updated on
        <br /> {d.toString().slice(0, 21)} PDT
      </p>
    </div>
  );
}
