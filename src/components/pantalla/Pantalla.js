import "./pantalla.css";
function Pantalla({ className, value }) {
  return (
    <label type="text" className={className}>
      {value}
    </label>
  );
}
export default Pantalla;
