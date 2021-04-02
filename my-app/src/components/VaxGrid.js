import React, { useState, useEffect } from "react";
import axios from "axios";
import zipCodes from "../recources/zipCodes";
// const zipCodes = [
//   93635,
//   94022,
//   94024,
//   94028,
//   94035,
//   94040,
//   94041,
//   94043,
//   94085,
//   94086,
//   94087,
//   94089,
//   94301,
//   94303,
//   94304,
//   94305,
//   94306,
//   94550,
//   95002,
//   95008,
//   95013,
//   95014,
//   95020,
//   95023,
//   95030,
//   95032,
//   95033,
//   95035,
//   95037,
//   95046,
//   95050,
//   95051,
//   95053,
//   95054,
//   95070,
//   95101,
//   95110,
//   95111,
//   95112,
//   95113,
//   95116,
//   95117,
//   95118,
//   95119,
//   95120,
//   95121,
//   94023,
//   94039,
//   94042,
//   94088,
//   94302,
//   94309,
//   95009,
//   95011,
//   95015,
//   95021,
//   95026,
//   95031,
//   95036,
//   95038,
//   95042,
//   95044,
//   95052,
//   95055,
//   95056,
//   95071,
//   95103,
//   95106,
//   95108,
//   95109,
//   95115,
//   95122,
//   95123,
//   95124,
//   95125,
//   95126,
//   95127,
//   95128,
//   95129,
//   95130,
//   95131,
//   95132,
//   95133,
//   95134,
//   95135,
//   95136,
//   95138,
//   95139,
//   95140,
//   95141,
//   95148,
//   95150,
//   95151,
//   95152,
//   95153,
//   95154,
//   95155,
//   95156,
//   95157,
//   95158,
//   95159,
//   95160,
//   95161,
//   95164,
//   95170,
//   95172,
//   95173,
//   95190,
//   95191,
//   95192,
//   95193,
//   95194,
//   95196,
// ];

// async function getData() {
//   try {
//     let res = await axios({
//       url: "https://www.vaccinespotter.org/api/v0/states/CA.json",
//       method: "get",
//     });
//     if (res.status == 200) {
//       // test for status you want, etc
//       let data = res.data.features;
//       data = data.filter(
//         (d) =>
//           d.properties.appointments_available === true &&
//           zipCodes.includes(parseInt(d.properties.postal_code))
//       );
//       return data;
//     }
//     // Don't forget to return something
//     return res.data;
//   } catch (err) {
//     console.error(err);
//   }
// }

export default function Vaxgrid() {
  const [clinics, setClinics] = useState();
  useEffect(async () => {
    await axios
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
        {/* {clinics.map((clinic) => (
          <h2>{clinic.properties.name}</h2>
        ))} */}
      </div>
    </div>
  );
}
