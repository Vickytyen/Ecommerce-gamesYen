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
      {test.cartList.length > 0 ? (
        test.cartList.map((item) => (
          <Card style={{ width: "18rem" }} key={item.idItem}>
            <Card.Img variant="top" src={item.imgItem} />
            <Card.Body>
              <Card.Title>{item.nameItem}</Card.Title>
              <Card.Text>{item.priceItem} precio unitario</Card.Text>
              <Card.Text>{item.qtyItem}item(s)</Card.Text>
              <Button
                variant="danger"
                type="filled"
                onClick={() => test.deleteItem(item.idItem)}
              >
                Borrar
              </Button>
              <div> $ {test.calcTotalPerItem(item.idItem)}</div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <></>
      )}

      <div>
        {test.cartList.length > 0 ? (
          <Button type="filled" onClick={test.removeList}>
            BORRAR TODO
          </Button>
        ) : (
          <Card.Text>No hay productos seleccionados</Card.Text>
        )}
      </div>

      <div>
        {test.cartList.length > 0 && (
          <div>
            <h1>Tu Compra</h1>
            <h2>Subtotal</h2>
            <p>{test.calcSubTotal()}</p>
            <h3>Impuestos</h3>
            <p>{test.calcTaxes()}</p>
            <h3>Descuento</h3>
            <p>{-test.calcTaxes()}</p>
            <h2>Total</h2>
            <p>{test.calcTotal()}</p>
            <button>Finalizar Compra</button>
          </div>
        )}
      </div>

      <Link to={"/"}>
        <Button>Volver al Inicio</Button>
      </Link>
    </>
  );
}

export default Cart;
