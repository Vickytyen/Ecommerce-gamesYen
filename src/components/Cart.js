import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Card } from 'react-bootstrap'
import { useContext } from 'react';
import { CartContext } from './CartContext';


function Cart() {
  const test = useContext(CartContext);
  
  return (
    <>
      <h1>Tu carrito</h1>
      {test.cartList.lenght > 0 && (
        <div>
          {test.cartList.map((item) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item[0].img[0]} />
              <Card.Body>
                <Card.Title>{item[0].name}</Card.Title>
                <Card.Text>{item[0].price}</Card.Text>
                <Button variant="danger">Borrar</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
      <Link to={"/"}>
        <Button>Volver al Inicio</Button>
      </Link>
    </>
  );
}

export default Cart;
