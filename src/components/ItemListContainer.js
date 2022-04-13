import React, { useEffect, useState } from "react";
//import ItemCount from './ItemCount'  Mover el ItemCount a ItemDetail para el desafio por alguna razon no pude comentarlo. Ctrl X y Ctrl V. Recuperarlo despues
import { getData } from "../data";
import ItemList from  './ItemList';

const ItemListContainer = ({ greeting }) => {

  const [games, setGames] = useState([]);
    useEffect (() => {
      async function pedirDatos() {
        let datosLlegando = await getData();
        setGames(datosLlegando)          
      }
      pedirDatos();
    }, [])

  return (
    <>
        <div>{greeting}</div>
       
        <ItemList productos ={games}/>
    </>    
  )

}

export default ItemListContainer;
