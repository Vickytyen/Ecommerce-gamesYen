import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from 'react';

export default function AppNavbar() {
    return (
      <div>
    <Container>
   <Navbar bg="danger" expand="lg">
    
    <Navbar.Brand href="#home">VICKY GAMES</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    
  </Navbar> 

      </Container>
      </div>
    );
}
