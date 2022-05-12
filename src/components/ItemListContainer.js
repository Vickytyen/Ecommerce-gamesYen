import React, { useEffect, useState } from "react";
import ItemList from  "./ItemList";
import { useParams } from "react-router-dom";
import { fetchFromFirestore } from "../utils/fetchFromFirestore";


const ItemListContainer = () => {
  const [games, setGames] = useState([]);
  const { idCategory } = useParams();

//componentDidUpdate  
    useEffect(() => {
      fetchFromFirestore(idCategory)
        .then(result => setGames(result))
        .catch(err => console.log(err));
    }, [idCategory]);

//componentWillUnmount  
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
