import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsMusicPlayerFill } from 'react-icons/bs';

const NavBar = () => {
  return (
    <>
      <Navbar className="navbar" variant="dark" expand="lg" fixed="top">
        <Container className="style-navbar">
          <Navbar.Brand href="/">
            <img
              src="https://underclub.com.ar/wp-content/uploads/2022/06/Polygon-1.svg"
              alt="logo"
              width="52"
              height="46"
            ></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Nuestro Club" id="basic-nav-dropdown">
                <NavDropdown.Item href="/history">Historia</NavDropdown.Item>
                <NavDropdown.Item href="#culture">Cultura</NavDropdown.Item>
                <NavDropdown.Item href="#hitos">Hitos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/artists">Residentes</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#history">Nuestro Club</Nav.Link> */}
              <Nav.Link
                href="https://tickets.underclub.com.ar/productora/eventos/13"
                target="_blank"
              >
                Eventos
              </Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
              <Nav.Link href="#streamings" id="button-streamings">{<BsMusicPlayerFill/>}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
