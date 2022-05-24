import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      <section className="listProducts">
        {productos.map((producto) => {
          //console.log(producto);
          return <Item key={producto.id} producto={producto} />;
        })}
      </section>
    </>
  );
};

export default ItemList;
