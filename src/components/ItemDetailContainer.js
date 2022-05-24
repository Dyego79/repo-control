import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import productosBase from "../productos.json";
import { db } from "./database";
import { collection, getDoc, doc } from "firebase/firestore";

//const productoDetail = productosBase;

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [detalle, setdetalle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productoCollection = collection(db, "productos");
    const resultadoDelDoc = doc(productoCollection, id);
    //console.log(resultadoDelDoc)
    const consulta = getDoc(resultadoDelDoc);
    console.log(consulta);
    consulta
      .then((resultado) => {
        console.log(resultado);
        const resultadoFinal = resultado.data();
        console.log(resultadoFinal);
        setdetalle(resultadoFinal);
        setCargando(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [detalle]);

  if (cargando) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <>
        <ItemDetail detalle={detalle} />
      </>
    );
  }
};
export default ItemDetailContainer;
