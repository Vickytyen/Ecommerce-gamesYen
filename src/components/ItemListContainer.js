import React, { useEffect, useState } from "react";
import ItemCount from './ItemCount'
import { getData } from "../data";
import ItemList from  './ItemList';

const ItemListContainer = ({ greeting }) => {

  //const onAdd = (qty) => {
    //alert("Selecciono" + qty + "items")
    const [games, setGames] = useState([]);
    useEffect (() => {
      async function pedirDatos() {
        let datosLlegando = await getData();
        setGames(datosLlegando)          
      }
      pedirDatos();
    }, [])

  return (
    //<>
        //<div>{greeting}</div>;
        //<ItemCount stock={5} initial={1} onAdd={onAdd}/>;
    //</>
    <ItemList productos ={games}/>
  )

}
export default ItemListContainer;
