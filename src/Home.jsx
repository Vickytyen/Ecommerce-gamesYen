
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer"; 
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import  CartContextProvider from "./components/CartContext";


function Home() {
  return (
    <CartContextProvider value={"un string"}> 
      <BrowserRouter>
        <AppNavBar />
           <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:idCategory" element={<ItemListContainer />} />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              </Routes>
        </BrowserRouter>
      </CartContextProvider>
  );
}

export default Home;
