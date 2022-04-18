import React from "react"
import  Item from "./Item"
import { Container } from "reactstrap"

export default function ItemList({items}) {
    return (
      <Container>
        <div>
          {/*{<div>
            productos.map((product) => (
              <Item key={product.id} {...product} />
            ))}
          </div>*/}
          {items.length > 0 ? (
            items.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                title={item.tittle}
                price={item.price}
                img={item.img}
                stock={item.stock}
                description={item.description}
              />
            ))
          ) : (
            <p>Espere...</p>
          )}
        </div>
      </Container>
    );
}