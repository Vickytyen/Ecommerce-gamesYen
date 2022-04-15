import React from "react";
import { useEffect , useState } from "react";
import { customFetch } from "../customFetch";
import { data } from "../data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idItem} = useParams ();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === idItem))
            .then(result => setDato(result))
            .catch(err => console.log(err)
    )}, [idItem]);

    return (
        <ItemDetail item={dato}/>
    )
}

export default ItemDetailContainer;
    