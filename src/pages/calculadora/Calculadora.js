import React, { useState } from "react";

import "./Calculadora.css";
import Btn from "../../components/btn/Btn";
import Pantalla from "../../components/pantalla/Pantalla";

let err = false;
let operando1 = null;
let operacion = null;

const Borrar = (setValor) => {
  setValor("");
  operando1 = null;
  operacion = null;
  err = false;
};
const resultado = (valor, setValor) => {
  let valorDouble = parseFloat(valor);
  if (operando1 !== null) {
    if (operacion === "+") {
      operando1 = operando1 + valorDouble;
    } else if (operacion === "-") {
      operando1 = operando1 - valorDouble;
    } else if (operacion === "*") {
      operando1 = operando1 * valorDouble;
    } else if (operacion === "/") {
      if (valorDouble === 0) {
        err = true;
        setValor("no se puede dividir entre 0");
      } else {
        operando1 = operando1 / valorDouble;
      }
    }
    if (!err) {
      setValor(operando1);
    }
  } else {
    setValor("Err");
  }
  operacion = null;
};
const numero = (valor, valorClick, setValor) => {
  if (!err) {
    setValor(valor + valorClick);
  }
};
const operaciones = (valor, valorClick, setValor) => {
  if (!err) {
    let valorDouble;
    if (valor === "") {
      valorDouble = null;
    } else {
      valorDouble = parseFloat(valor);
    }

    setValor("");

    if (operando1 === null) {
      operando1 = valorDouble;
      operacion = valorClick;
    } else if (operacion === null) {
      operacion = valorClick;
    } else {
      console.log("opera");
      if (operacion === "+") {
        operando1 = operando1 + valorDouble;
      } else if (operacion === "-") {
        operando1 = operando1 - valorDouble;
      } else if (operacion === "*") {
        operando1 = operando1 * valorDouble;
      } else if (operacion === "/") {
        if (valorDouble === 0) {
          err = true;
          setValor("no se puede dividir entre 0");
        } else {
          operando1 = operando1 / valorDouble;
        }
      }
    }
  }
};

function Calculadora() {
  const [valor, setValor] = useState(" ");
  const ObtenerValor = (valorClick) => {
    switch (valorClick) {
      case "+":
      case "-":
      case "/":
      case "*":
        operaciones(valor, valorClick, setValor);
        break;
      case "=":
        resultado(valor, setValor);
        break;
      case "C":
        Borrar(setValor);
        break;
      default:
        numero(valor, valorClick, setValor);
        break;
    }
  };

  return (
    <div className="bodycal">
      <div className="calculadora">
        <Pantalla className={"pantalla"} value={valor}></Pantalla>
        <Btn value={"1"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"2"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"3"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"+"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"4"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"5"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"6"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"-"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"7"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"8"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"9"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"*"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"C"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn value={"0"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
        <Btn
          value={"="}
          ObtenerValor={ObtenerValor}
          className={"numero mas"}
        ></Btn>
        <Btn value={"/"} ObtenerValor={ObtenerValor} className={"numero"}></Btn>
      </div>
    </div>
  );
}
export default Calculadora;
