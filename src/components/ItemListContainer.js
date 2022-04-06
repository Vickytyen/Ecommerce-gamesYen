import React from "react";
import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting }) => {

  const onAdd = (qty) => {
    alert("Selecciono" + qty + "items")
  }
  return (
    <>
        <div>{greeting}</div>;
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>;
    </>
);

}
export default ItemListContainer;
