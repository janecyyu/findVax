import React from "react";
import Button from "./Buttons";

export default function ApptCard(props) {
  return (
    <div className="appt">
      <h3>{props.props.properties.name}</h3>{" "}
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
    </div>
  );
}
