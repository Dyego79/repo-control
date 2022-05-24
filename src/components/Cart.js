import { contexto } from "./CartContext";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
const Cart = () => {
  const { productquantity } = useContext(contexto);
  const { carrito, eliminarProducto, vaciarCarrito } = useContext(contexto);
  const elim = (id) => {
    eliminarProducto(id.target);
  };
  return (
    <>
      {carrito.length == 0 ? (
        <Link to="/">
          <button>Volver a la tienda</button>{" "}
        </Link>
      ) : (
        <main className="main__cart">
          <h2>Tu Carrito ({productquantity}) Items</h2>
          <div className="main__cart__row">
            <div className="main__cart__titulo">CANT</div>
            <div className="main__cart__titulo">IMG</div>
            <div className="main__cart__titulo">PRODUCTO</div>
            <div className="main__cart__titulo">PRECIO</div>
          </div>
          {carrito.map((element) => {
            return (
              <div key={element.id} className="main__cart__row">
                <div className="main__cart__row__cont">{element.cant}</div>
                <div>
                  <img
                    src={element.img}
                    className="main__cart__row__cont__img"
                    alt=""
                  />
                </div>
                <div className="main__cart__row__cont">{element.nom}</div>
                <div className="main__cart__row__cont">$ {element.precio}</div>
                <button onClick={elim} id={element.id} value={element.cant}>
                  BORRAR
                </button>
              </div>
            );
          })}
          <button className="botonElimCarrito" onClick={vaciarCarrito}>
            VACIAR CARRITO
          </button>
        </main>
      )}
    </>
  );
};

export default Cart;
