import "./diaTiempo.css";
import TrDia from "../tr/trDia";

const formatHora = (unixTime) => {
  const fecha = new Date(unixTime * 1000);
  const horas = fecha.getHours();
  const minutos = "0" + fecha.getMinutes();
  const seg = "0" + fecha.getSeconds();
  return `${horas}:${minutos.substr(-2)}:${seg.substr(-2)}`;
};

function DiaTiempo({ h2, diaTiempo }) {
  return (
    <div className="meteo_actual">
      <h2 className="meteo_h2">{h2}</h2>
      <table>
        <tbody>
          <TrDia
            td1="Hora Actual"
            td2={diaTiempo !== undefined ? formatHora(diaTiempo.dt) : null}
            id={1}
          />
          <TrDia
            td1="Temperatura Actual"
            td2={
              diaTiempo !== undefined ? `${diaTiempo.temp.toFixed(1)}º ` : null
            }
            id={2}
          />
          <TrDia
            td1="Sensacion Termica Actual"
            td2={
              diaTiempo !== undefined
                ? `${diaTiempo.feels_like.toFixed(1)}º `
                : null
            }
            id={1}
          />
          <TrDia
            td1="Humedad Actual"
            td2={diaTiempo !== undefined ? `${diaTiempo.humidity}% ` : null}
            id={3}
          />
          <TrDia
            td1="Velocidad Viento"
            td2={
              diaTiempo !== undefined ? `${diaTiempo.wind_speed} m/s ` : null
            }
            id={4}
          />
          {diaTiempo !== undefined && diaTiempo.snow ? (
            <TrDia td1="Nieve" td2={`${diaTiempo.snow} mm `} id={5} />
          ) : null}
        </tbody>
      </table>
      {diaTiempo !== undefined ? (
        <img
          alt={diaTiempo.weather[0].description}
          src={`http://openweathermap.org/img/wn/${diaTiempo.weather[0].icon}@2x.png`}
        />
      ) : null}
    </div>
  );
}
export default DiaTiempo;
