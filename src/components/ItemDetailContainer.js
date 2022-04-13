import React from "react";
import { useEffect , useState } from "react";
import { customFetch } from "../customFetch";
import { data } from "../data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, data[3])
            .then(result => setDato(result))
            .catch(err => console.log(err)
    )}, []);

    return (
        <ItemDetail item={dato}/>
    )
}

export default ItemDetailContainer;
    