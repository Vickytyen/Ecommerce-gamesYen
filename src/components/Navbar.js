import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function  AppNavbar() {

  return (
    <div>
      <Container>
        <Navbar bg="danger" expand="lg">
          <Navbar.Brand href="#home">
            <Link to="/">VICKY GAMES</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <ul>
              <Nav.Link href="#home">
                <li>
                  <Link to="/category/Nintendo">Nintendo</Link>
                </li>
              </Nav.Link>
              <Nav.Link href="#features">
                <li>
                  <Link to="/category/Playstation">Playstation</Link>
                </li>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <li>
                  <Link to="/category/Xbox">Xbox</Link>
                </li>
              </Nav.Link>
            </ul>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
  }
  