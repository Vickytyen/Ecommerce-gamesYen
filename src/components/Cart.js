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

        test.cartList.forEach(async (item) => { // When purchase confirmed, the stock is updated by updateDoc
          const itemRef = doc(db, "products", item.idItem);
          await updateDoc(itemRef, {
            stock: increment(-item.qtyItem), // function to modify the stock from firebase
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
          const newOrderRef = doc(collection(db, "order"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        };

        createOrderFb()
          .then(result => {
            alert(
              "Thanks for your purchase! Please take note of your order ID.\n\n\nID : " +
                result.id +"\n\n"
            );
          })
          .catch((err) => console.log(err));

        };
        
  return (
    <>
      <h1>Your Cart</h1>
      <div className="cart">
        {test.cartList.length > 0 &&
          test.cartList.map((item) => (
            <Card style={{ width: "18rem" }} key={item.idItem}>
              <Card.Img variant="top" src={item.imgItem} />
              <Card.Body>
                <Card.Title>{item.nameItem}</Card.Title>
                <Card.Text>${item.priceItem} each</Card.Text>
                <Card.Text>{item.qtyItem} item(s)</Card.Text>
                <Button
                  color="danger"
                  type="filled"
                  onClick={() => test.deleteItem(item.idItem)}
                >
                  Delete
                </Button>
                <div>
                  <b>Total ${test.calcTotalPerItem(item.idItem)}</b>
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>

      <div>
        {test.cartList.length > 0 && (
          <div className="summary">
            <h2>Summary</h2>
            <h2>Subtotal</h2>
            <p>$ {test.calcSubTotal()}</p>
            <h3>Taxes</h3>
            <p>$ {test.calcTaxes()}</p>
            <h3>Tax discount</h3>
            <p>$ {-test.calcTaxes()}</p>
            <h2>Total</h2>
            <p>$ {test.calcTotal()}</p>
            <button onClick={createNewOrder}>Checkout Now</button>
          </div>
        )}
      </div>
      <div>
        {test.cartList.length > 0 ? (
          <Button color="danger" onClick={test.removeList}>
            Delete All
          </Button>
        ) : (
          <Card.Text className="emptyCart">Your Cart is empty</Card.Text>
        )}
      </div>
      <Link to={"/"}>
        <Button color="dark">Back to Menu</Button>
      </Link>
    </>
  );
}

export default Cart;
