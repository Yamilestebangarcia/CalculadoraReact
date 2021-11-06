import "./trDias.css";

function TrDias({ diaData, posicion, id }) {
  const d = new Date();
  const sumarDias = (fecha, dias) => {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  };
  const dia = (fecha, dias) => {
    const Dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Virnes",
      "Sábado",
    ];
    const dia = sumarDias(fecha, dias);

    return Dias[dia.getDay()];
  };

  return (
    <table className="meteo_Dias_tabla">
      <tbody>
        <tr>
          <td className="meteo_dias_dia" colSpan="2">
            {dia(d, posicion + 1)}
          </td>
        </tr>
        <tr>
          <td> Temperatura</td>
          <td>
            <table>
              <tbody>
                <td>Mañana</td>
                <td>Tarde</td>
                <td>Noche</td>
                <tr>
                  <td>{diaData.temp.morn}º</td>
                  <td>{diaData.temp.day}º</td>
                  <td>{diaData.temp.night}º</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td> Sensacion Térmica</td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>Mañana</td>
                  <td>Tarde</td>
                  <td>Noche</td>
                </tr>
                <tr>
                  <td>{diaData.feels_like.morn}º</td>
                  <td>{diaData.feels_like.day}º</td>
                  <td>{diaData.feels_like.night}º</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>Humedad</td>
          <td>{diaData.humidity}%</td>
        </tr>
        <tr>
          <td>Velocidad Viento</td>
          <td>{diaData.wind_speed}m/s</td>
        </tr>
        {diaData.snow ? (
          <tr>
            <td>Nieve</td>
            <td>{diaData.snow}mm</td>
          </tr>
        ) : null}
        <tr>
          <td colSpan="2" className="mete_dias_img">
            <img
              alt={diaData.weather[0].description}
              src={`http://openweathermap.org/img/wn/${diaData.weather[0].icon}@2x.png`}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TrDias;
