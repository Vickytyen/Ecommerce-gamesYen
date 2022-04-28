import React from "react";
import { useEffect , useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebaseConfig";

const ItemDetailContainer = () => {
  const [games, setGames] = useState({});
  const { idItem } = useParams();

  useEffect(() => {

const docRef = doc(db, "products", idItem );
const getItemFromFirebase = async () => {
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}
getItemFromFirebase ()
        .then(result => setGames(result))
        .catch(err => console.log(err));
   }, [idItem]);

  return <ItemDetail item={games} />;
}

export default ItemDetailContainer;
    