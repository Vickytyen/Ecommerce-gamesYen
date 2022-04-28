import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Item({id, tittle, price, img, stock, }) {
    return (
      <div>
        <Card key={id}>
          <CardImg alt="Card image cap" src={img} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">{tittle}</CardTitle>
            <CardText>${price}</CardText>
            <CardText>{stock} unidades</CardText>
            <Link to={`/item/${id}`}>
              <Button>+ info</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  
}
