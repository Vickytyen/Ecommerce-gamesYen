import ItemCount from "./ItemCount";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, } from "reactstrap";

const ItemDetail = ({item}) => {
    
  const onAdd = (qty) => {
    alert("Seleccionó " + qty + " items");
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
              <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
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