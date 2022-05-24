import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";

const CartWidget = () => {
  const { productquantity } = useContext(contexto);
  return (
    <>
      <div className="carrito">
        <Link to="/Cart">
          <span className="material-icons colorIcon">shopping_cart</span>
        </Link>
        <div className="cart__cantidad">{productquantity}</div>
      </div>
    </>
  );
};
export default CartWidget;
