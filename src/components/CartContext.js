import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const contexto = createContext();
const { Provider } = contexto;

const ProviderReturn = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [productquantity, setproductquantity] = useState(0);
  const [productName, setproductName] = useState(0);
  const [productPrice, setproductPrice] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [ok, setOk] = useState(false);
  const [totalCarrito, setTotalcarrito] = useState(0);

  const eliminarProducto = (id) => {
    const elimCant = parseInt(id.value);
    setproductquantity(productquantity - elimCant);
    console.log(elimCant);
    const carritoCopy = [...carrito];
    const newArray = carritoCopy.filter((item) => item.id !== Number(id.id));
    setCarrito(newArray);
  };

  const addProductCompleto = (nombre) => {
    const carritoCopy = [...carrito];
    const itemSeleccionado = carritoCopy.filter((detalle) => {
      return nombre.id == detalle.id;
    })[0];
    if (!itemSeleccionado) {
      carritoCopy.push(nombre);
      setCarrito(carritoCopy);
      setproductquantity(productquantity + nombre.cant);
    } else {
      Swal.fire({
        title: "ESTE PRODUCTO YA FUE AGREGADO.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }

    //setCarrito(setCarrito.push(x));
  };
  /*  const addCant = (cantidad) => {
    if (setOk) {
      setproductquantity(productquantity + cantidad);
    }
  }; */
  const vaciarCarrito = () => {
    setCarrito([]);
    setproductquantity(0);
  };

  const estaEnCarrito = (producto) => {
    //return true o false
  };

  const contextVal = {
    productquantity,
    productName,
    carrito,
    productPrice,
    precioTotal,
    setPrecioTotal,
    addProductCompleto,
    //addCant,
    eliminarProducto,
    vaciarCarrito,
    estaEnCarrito,
  };

  return <Provider value={contextVal}>{children}</Provider>;
};
export default ProviderReturn;
