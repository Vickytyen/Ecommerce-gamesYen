import ItemCount from "./ItemCount";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const ItemDetail = ({item}) => {
    
  const onAdd = (qty) => {
    alert("Selecciono" + qty + "items");
  }

  return (
    <>
      {
        <div>
          <Card key={item.id}>
            <CardImg alt="Card image cap" src={item.img} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">{item.tittle}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
              </CardSubtitle>
              <CardText>{item.price}</CardText>
              <CardText>{item.stock}</CardText>
              <ItemCount stock={5} initial={1} onAdd={onAdd} />
            </CardBody>
          </Card>
        </div>
      }
    </>
  );
}

export default ItemDetail;