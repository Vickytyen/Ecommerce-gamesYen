import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Card } from 'react-bootstrap'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, doc, setDoc, updateDoc, serverTimestamp, increment, } from 'firebase/firestore'
import db from '../utils/firebaseConfig'

function Cart() {
  const test = useContext(CartContext);

      const createNewOrder = () => {        
        const itemsFordb = test.cartList.map((item) => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.priceItem,
          qty: item.qtyItem,
        }));

        test.cartList.forEach(async (item) => { // Cuando se confirma la compra, se actualiza el stock con updateDoc
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem), // funcion para modificar el stock desde firebase
          });
        });

        let order = {
           buyer: {
            name: "Tita Elgato",
            email: "tita@meow.com",
            phone: "1112411124123456",
          },
          total: test.calcTotal(),
          items: itemsFordb,
          date: serverTimestamp(),
        };

        const createOrderFb = async () => {
          const newOrderRef = doc(collection(db, "order")); //crearlo en firebase, ver clase
          await setDoc(newOrderRef, order);
          return newOrderRef;
        };

        createOrderFb()
          .then(result => {
            alert(
              "Tu pedido ha sido creado. Por favor anote el ID.\n\n\nID del pedido: " +
                result.id +
                "\n\n"
            );
          })
          .catch((err) => console.log(err));

        };
        
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
                onClick={() => test.deleteItem(item.idItem)}>Delete</Button>
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
            Delete All
          </Button>
        ) : (
          <Card.Text>Your Cart is empty</Card.Text>
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
            <button onClick={createNewOrder}>Checkout</button>
          </div>
        )}
      </div>

      <Link to={"/"}>
        <Button>Back to Menu</Button>
      </Link>
    </>
  );
}

export default Cart;
