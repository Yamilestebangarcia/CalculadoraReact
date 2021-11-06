import TrDias from "../tr/trDias";
import "./diasTiempo.css";
const formatHora = (unixTime) => {
  const fecha = new Date(unixTime * 1000);
  const horas = fecha.getHours();
  const minutos = "0" + fecha.getMinutes();
  const seg = "0" + fecha.getSeconds();
  return `${horas}:${minutos.substr(-2)}:${seg.substr(-2)}`;
};

function DiasTiempo({ h2, diaTiempo }) {
  return (
    <>
      <h2 className="meteo_h2">{h2}</h2>
      <p className="meteo_dias_hora">
        Hora Actualización:
        {diaTiempo !== undefined ? formatHora(diaTiempo[0].dt) : null}
      </p>

      <div className="Meteo_tabla">
        {diaTiempo !== undefined
          ? diaTiempo.map((dia, posicion) => {
              return (
                <TrDias
                  key={posicion + "tiempo7dias"}
                  diaData={dia}
                  posicion={posicion}
                  id={posicion}
                ></TrDias>
              );
            })
          : null}
      </div>
    </>
  );
}
export default DiasTiempo;
