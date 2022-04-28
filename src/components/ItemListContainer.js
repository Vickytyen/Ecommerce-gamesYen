import React, { useEffect, useState } from "react";
import ItemList from  "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";


const ItemListContainer = () => {
  const [games, setGames] = useState([]);
  const { idCategory } = useParams();

    useEffect(() => {
        const fetchFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
        }));
        return dataFromFirestore;
      } 
      fetchFromFirestore()
        .then(result => setGames(result))
        .catch(err => console.log(err));
    }, [idCategory]);

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
