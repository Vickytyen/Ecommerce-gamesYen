import ItemCount from "./ItemCount";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import { useContext, useState } from "react";
import CheckOut from "./CheckOut";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({item}) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);
    
  const onAdd = (qty) => {
    alert("You've selected " + qty + " items");
    setItemCount(qty);
    test.addToCart(item, qty);
  }

  return (
    <>
      {item && item.img ? (
        <div className="ItemdetailSize">
          <Card key={item.id}>
            <CardImg alt="Card image cap" src={item.img} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">{item.tittle}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item.description}
              </CardSubtitle>
              <CardText><b>${item.price}</b></CardText>
              <CardText>{item.stock} in stock</CardText>
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
              </div>
            </CardBody>
          </Card>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ItemDetail;