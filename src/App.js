import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (<>
  <AppNavbar/>
  <ItemListContainer greeting="Hola! Soy el itemListContainer. Aca se muestran proximamente los productos"/>
  </>);
}

export default App;
