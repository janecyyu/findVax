import React from "react";

export default function About() {
  return (
    <div className="intro">
      <h1>Hi 👋</h1>
      <p>
        {" "}
        This project is inspired by some volunteer developers like Nick, creator
        of <a href="https://www.vaccinespotter.org/">VaccineSpotter.org</a> and
        Huge from <a href="https://www.turbovax.info/">TurboVax</a> . I always
        want to something during the pandemic, and this is what I can do. I know
        this may not help people 100% get their appointments, but if some of you
        can successfully get your or your family's, friends', neighbors'
        covid-19 vaccines through here. I am very honored!
        <br />
        <br /> The past year was full of changes, but remember:{" "}
        <span style={{ color: "rgb(127, 15, 15)" }}>
          We are same, we are together, together, we're strong!
        </span>{" "}
      </p>
      <br />
      <h1>Source</h1>
      <p>
        <a href="https://www.vaccinespotter.org/">VaccineSpotter.org,</a>{" "}
        <a href="https://www.vaccinespotter.org/api/"> Very Beta API </a>
      </p>
      <br />
      <h1>Team</h1>
      <p>
        Jane Yu 👩‍💻, grad from bootcamp, hunting for her first web developer job!
      </p>
      <br />

      <h1>Contact</h1>
      <p>
        {" "}
        <a
          href="mailto:jane.cy.yu@gmail.com"
          style={{ textDecoration: "none", fontSize: "2rem" }}
        >
          📧
        </a>
        {"   "}
        come to say hi or share your "Got Vaccine" sticker!
      </p>
      <br />
    </div>
  );
}
