import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsMusicPlayerFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../store/user";
import "./NavBar.css";

const NavBar = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () =>{
    dispatch(userLogout())
    .then(()=> navigate("/login"))
  }

  return (
    <>
      <div className="container-general">
        <Navbar className="navbar" variant="dark" expand="lg" fixed="top">
          <Container className="style-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Nuestro Club" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/history">Historia</NavDropdown.Item>
                  <NavDropdown.Item href="#culture">Cultura</NavDropdown.Item>
                  <NavDropdown.Item href="#hitos">Hitos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/artists">
                    Residentes
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="#history">Nuestro Club</Nav.Link> */}
                <Nav.Link
                  href="https://tickets.underclub.com.ar/productora/eventos/13"
                  target="_blank"
                >
                  Eventos
                </Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
                {
                  !user ? null : (
                    <div onClick={handleLogout}>
                      <Nav.Link>Cerrar Sesión</Nav.Link>
                    </div>
                  ) 
                }
                <Nav.Link href="#streamings" id="button-streamings">
                  {<BsMusicPlayerFill />}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="logo-container">
          <div className="logo-fixed">
            <Link to="/">
              <img
                src="https://underclub.com.ar/wp-content/uploads/2022/06/Polygon-1.svg"
                alt="logo"
                width="78"
                height="69"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
