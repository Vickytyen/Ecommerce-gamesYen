import React from "react"
import Item from "./Item"
import { Container } from "reactstrap"

export default function ItemList({productos}) {
    return (
        <Container>
            <div>
                {productos.map ((product) => (
                <Item key={product.id} {...product} />
                ))
                }
            </div>
        </Container>
    )
}