import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { contexto } from "./CartContext";

const ItemCount = ({ initial, stock, onAdd, detalle }) => {
  const [contador, setContador] = useState(initial);
  const [dis, setDisabled] = useState(false);
  const [compra, setCompra] = useState(false);

  //const { addCant } = useContext(contexto);

  const elegir = () => {
    onAdd(contador);
    //addCant(contador);
    setDisabled(true);
    setContador(0);
    setCompra(true);
  };

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : Swal.fire({
          title: "Lo sentimos, no hay Stock disponible.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
  };
  const restar = () => {
    contador <= initial
      ? Swal.fire({
          title: "Debes elegir al menos 1.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        })
      : setContador(contador - 1);
  };

  return (
    <>
      <div className="contentBtn">
        <div className="botones">
          <button onClick={restar} disabled={dis} className="buttonGral">
            <span className="material-symbols-outlined">do_not_disturb_on</span>
          </button>
          <span className="contador">{contador}</span>
          <button onClick={sumar} disabled={dis} className="buttonGral">
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </div>
        {!compra ? (
          <button
            onClick={elegir}
            disabled={dis}
            className="agregar buttonGral"
          >
            AGREGAR A CARRITO
          </button>
        ) : (
          <Link to="/Cart">
            <button className="agregar buttonGral"> TERMINAR MI COMPRA</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default ItemCount;
