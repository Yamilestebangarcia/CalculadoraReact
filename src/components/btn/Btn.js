import "./btn.css";
function Btn({ value, className, ObtenerValor }) {
  return (
    <>
      <input
        type="button"
        value={value}
        className={className}
        onClick={(e) => ObtenerValor(e.target.value)}
      />
    </>
  );
}
export default Btn;
