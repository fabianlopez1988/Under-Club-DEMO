import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar className="navbar" variant='dark' expand="lg">
      <Container className="style-navbar">
        <Navbar.Brand href="#home">
          <img src='https://underclub.com.ar/wp-content/uploads/2022/06/Polygon-1.svg' alt="logo" width="52" height="46"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#history">Nuestro Club</Nav.Link>
            <Nav.Link href="https://tickets.underclub.com.ar/productora/eventos/13" target="_blank">Eventos</Nav.Link>
            <Nav.Link href="#residents">Agencia</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}

export default NavBar;