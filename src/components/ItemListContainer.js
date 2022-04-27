import React, { useEffect, useState } from "react";
import { data, getData } from "../data";
import ItemList from  './ItemList';
import { useParams } from "react-router-dom";
import { customFetch } from "../customFetch";

const ItemListContainer = () => {
  const [games, setGames] = useState([]);
  const { idCategory } = useParams();

  useEffect (() => {
      async function pedirDatos() {
        let datosLlegando = await getData();
        setGames(datosLlegando)          
      }
      pedirDatos();
    }, [])

    useEffect((games) => {
      customFetch(
        1000,
        data.filter((item) => { //cambie games por data, pero ahora no funciona itemcount
          if (idCategory === undefined) return item;
          return item.categoryId === parseInt(idCategory);
        })
      )
        .then((result) => setGames(result))
        .catch((err) => console.log(err));
    }, [idCategory,]);

        useEffect(() => {
          return () => {
            setGames([]);
          };
        }, []);

  return (
    <>
      <ItemList items={games} />
    </>
  );

}

export default ItemListContainer;
