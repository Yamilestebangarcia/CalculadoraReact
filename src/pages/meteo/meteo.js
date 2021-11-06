import { useEffect, useState } from "react";

import DiaTiempo from "../../components/diaTiempo/diaTiempo";
import DiasTiempo from "../../components/diaTiempo/diasTiempo";
function Meteo() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=37.25&lon=-3.25&exclude=minutely,hourly,alerts&units=metric&appid=0b5bcfa6cd8ec2f6e65b58caadb62653"
    )
      .then((res) => res.json(res))
      /*  .then((data) => {
        console.log("res", data);
        return data;
      }) */
      .then((data) => setdata(data))

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bodyMeteo">
      <DiaTiempo h2="Tiempo Actual" diaTiempo={data.current} />

      <DiasTiempo h2="Tiempo a 7 dias" diaTiempo={data.daily} />
    </div>
  );
}
export default Meteo;
