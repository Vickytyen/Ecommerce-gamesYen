import ItemCount from "./ItemCount";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckOut from "./CheckOut";


const ItemDetail = ({item}) => {
  const [itemCount, setItemCount] = useState(0);
    
  const onAdd = (qty) => {
    alert("Seleccionó " + qty + " items");
    setItemCount(qty);
  }

  return (
    <>
      {item && item.img ? (
        <div>
          <Card key={item.id}>
            <CardImg alt="Card image cap" src={item.img} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">{item.tittle}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item.description}
              </CardSubtitle>
              <CardText>{item.price}</CardText>
              <CardText>{item.stock}</CardText>
              {/*<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />*/}
              <div>
                {itemCount === 0 ? (
                  <ItemCount
                    stock={item.stock}
                    initial={itemCount}
                    onAdd={onAdd}
                  />
                ) : (
                    <CheckOut/>                
                )}
                <Link to={"/"}>
                  <Button>Volver al Inicio</Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}

export default ItemDetail;