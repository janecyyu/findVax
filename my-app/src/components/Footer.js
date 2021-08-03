import React from 'react'

export default function Footer() {
    return (
        <div>
        <p>
          Otherwise, you can also check:{" "}
          <a
            href="https://healthy.kaiserpermanente.org/northern-california/health-wellness/coronavirus-information/covid-vaccine"
            target="_blank"
            rel="noreferrer"
          >
            Kaiser
          </a>
          ,{" "}
          <a
            href="https://www.sutterhealth.org/pamf/for-patients/health-alerts/covid-19-vaccine"
            target="_blank"
            rel="noreferrer"
          >
            Sutter Health
          </a>
          ,{" "}
          <a href="https://stanfordhealthcare.org/discover/covid-19-resource-center.html">
            Stanford Healthcare
          </a>
        </p>
        <p>
          {" "}
          Join wait list: <a href="https://hidrb.com/">Dr.B,</a>{" "}
          <a href="https://extravaccinenotifier.com/get-a-vaccine/">
            Vaccine Notifier
          </a>
        </p>
        <div className="share" style={{ margin: "1rem" }}>
        2021 © VaxBay
        </div>
      </div>
    )
}
