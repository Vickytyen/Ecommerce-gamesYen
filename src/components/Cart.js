import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'


function Cart() {

  return (
    <>
      Aca va el detalle de los articulos seleccionados
      <Link to={"/"}>
        <Button>Volver al Inicio</Button>
      </Link>
    </>
  );
}

export default Cart;
