import { useState, useContext } from "react";
import Style from "./Fruta.module.css";
import Datacont from "../../dataContext/dataContext";

// eslint-disable-next-line react/prop-types
const Fruta = ({ name, price, img, bus }) => {
  const [cantidad, setCantidad] = useState(0);
  const data = useContext(Datacont);

  const agregar = () => {
    setCantidad((cantidadActual) => cantidadActual + 1);
    bus({
      price,
      operation: true,
    });
  };

  const quitar = () => {
    setCantidad((cantidadActual) => cantidadActual - 1);
    bus({
      price,
      operation: false,
    });
  };

  return (
    <div className={Style.fruta}>
      <h2>Nombre: {name}</h2>
      <h3>Precio: ${price}</h3>
      <img src={img} width="500" height="500" />

      <button onClick={agregar}>+</button>
      <button onClick={quitar} disabled={cantidad === 0}>
        -
      </button>

      <p>Cantidad: {cantidad}</p>
      <p>Subtotal: {price * cantidad}</p>
      <h3>Context Fruta: {data}</h3>

      <hr />
    </div>
  );
};

export default Fruta;
