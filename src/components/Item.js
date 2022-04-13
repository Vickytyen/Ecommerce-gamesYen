import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

export default function Item({id, tittle, price, img, stock,}) {
    return (
      <div>
        <Card key={id}>
          <CardImg alt="Card image cap" src={img.url} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">{tittle}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Juego Para Nintendo Switch. Proximamente descripcion!
            </CardSubtitle>
            <CardText>{price}</CardText>
            <CardText>{stock}</CardText>
            <Button>Lo quiero!</Button>
          </CardBody>
        </Card>
      </div>
    );
  
}
