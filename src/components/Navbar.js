import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import  SearchForm  from './SearchForm'
import logo from '../img/logo.jpg'

export default function  AppNavbar() {

  return (
    <Container>
      <Navbar bg="danger" expand="lg">
        <Navbar.Brand href="/">
          <Link to="/">
            <img
              src={logo}
              alt="Logo Vicky Games"
              width="70%"
              className="logo"
            />
          </Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="category">
            <Link to="/category/Nintendo">Nintendo</Link>
          </Nav.Link>
          <Nav.Link className="category">
            <Link to="/category/Playstation">Playstation</Link>
          </Nav.Link>
          <Nav.Link className="category">
            <Link to="/category/Xbox">Xbox</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <ul>
            <li>Iniciar Sesion</li>
            <li>Registrarse</li>
            <li>
              <Link to="/Cart">
                <CartWidget />
              </Link>
            </li>
          </ul>
          <div>
            <SearchForm />
          </div>
        </Nav>
      </Navbar>
    </Container>
  );
  }
  