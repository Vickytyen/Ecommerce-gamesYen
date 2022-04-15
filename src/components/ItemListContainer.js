import React, { useEffect, useState } from "react";
import { getData } from "../data";
import ItemList from  './ItemList';
import { useParams } from "react-router-dom";
import { customFetch } from "../customFetch";
import ItemCount from "./ItemCount";

const ItemListContainer = (items) => {
  const [games, setGames] = useState([]);
  const { idCategory } = useParams();

    useEffect (() => {
      async function pedirDatos() {
        let datosLlegando = await getData();
        setGames(datosLlegando)          
      }
      pedirDatos();
    }, [])
//Buscar la manera de refactorizarlo
    useEffect(() => {
      if (idCategory === undefined){
      customFetch(2000, items)
        .then(result => setGames(result))
        .catch(err => console.log(err))
      } else {
        customFetch(2000, items.filter (item => item.categoryId === idCategory))
        .then(result => setGames(result))
        .catch(err => console.log(err))
      }
      console.log(idCategory);
    }, [idCategory]);

     const onAdd = (qty) => {
       alert("Seleccionó " + qty + " items");
     };

  return (
    <>
      <ItemList items={games} />
      <ItemCount stock={100} initial={1} onAdd={onAdd} />
    </>
  );

}

export default ItemListContainer;
