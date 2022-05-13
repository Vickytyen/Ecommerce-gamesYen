import React from "react";
import { useEffect , useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getItemFromFirebase } from "../utils/fetchFromFirestore";

const ItemDetailContainer = () => {
  const [games, setGames] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
    getItemFromFirebase(idItem)
      .then((result) => setGames(result)) 
      .catch((err) => console.log(err));
  }, [idItem]);

  return <ItemDetail item={games} />;
}

export default ItemDetailContainer;
    