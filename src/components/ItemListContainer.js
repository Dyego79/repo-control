import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./database";
import {
  collection,
  getDoc,
  doc,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const productosCollection = collection(db, "productos");
    if (category !== undefined && category !== "") {
      const filtrarProdcuto = query(
        productosCollection,
        where("categoria", "==", category)
      );
      const consulta = getDocs(filtrarProdcuto);
      consulta
        .then((resultado) => {
          const productos = resultado.docs.map((doc) => {
            const productoConId = doc.data();
            productoConId.id = doc.id;
            return productoConId;
          });
          setProductos(productos);
          setCargando(false);
        })
        .catch((error) => {})
        .finally(() => {});
      setCargando(true);
    } else {
      const consulta = getDocs(productosCollection);
      consulta
        .then((resultado) => {
          const productos = resultado.docs.map((doc) => {
            const productoConId = doc.data();
            productoConId.id = doc.id;
            return productoConId;
          });
          setProductos(productos);
          setCargando(false);
        })
        .catch((error) => {})
        .finally(() => {});
      setCargando(true);
    }
  }, [category]);
  /*   useEffect(() => {
    const productosCollection = collection(db, "productos");
    const consulta = getDocs(productosCollection);
    if (category == undefined) {
      //productosCollection es una referencia a la coleccion de productos donde estan todos los docuemntos
      consulta
        .then((resultado) => {
          const productos = resultado.docs.map((doc) => {
            const productoConId = doc.data();
            productoConId.id = doc.id;
            return productoConId;
          });
          //console.log(resultado.docs)

          setProductos(productos);
          setCargando(false);
        })
        .catch((error) => {})
        .finally(() => {});
      setCargando(true);
    } else {
      consulta
        .then((resultado) => {
          const productos = resultado.docs.map((doc) => {
            const productoConId = doc.data();
            productoConId.id = doc.id;
            //console.log(productos);
            return productoConId;
          });
          const filter = productos.filter((cat) => cat.categoria == category);
          setProductos(filter);
          setCargando(false);
        })
        .catch((error) => {})
        .finally(() => {});
      setCargando(true);
      //const filter = productoConId.filter((cat) => cat.categoria == category);
      //setProductos(filter);
    }
  }, [category]); */

  return (
    <>
      {cargando ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};
/* return (
    <>
      <h2>{greeting}</h2>
     
      
    </>
  ); */

export default ItemListContainer;
