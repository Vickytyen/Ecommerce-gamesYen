
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer"; 
import ItemDetailContainer from "./components/ItemDetailContainer";


function Home() {
  return (
    <BrowserRouter>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
       <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
