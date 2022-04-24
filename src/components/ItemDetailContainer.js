import React from "react";
import { useEffect , useState } from "react";
import { customFetch } from "../customFetch";
import { data } from "../data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [games, setGames] = useState({});
  const { idItem } = useParams();

  useEffect(() => {
      customFetch(
      2000,
      data.find((item) => item.id === parseInt(idItem)))
      .then((result) => setGames(result))
      .catch(err => console.log(err));

   }, [idItem]);

  return <ItemDetail item={games} />;
}

export default ItemDetailContainer;
    