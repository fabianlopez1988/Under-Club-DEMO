import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsMusicPlayerFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../store/user";
import "./NavBar.css";
import gifWaveform from "../../assets/WaveBlanco.gif";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout()).then(() => navigate("/login"));
  };

  return (
    <>
      {/* <div className="container-general">
        <Navbar className="navbar" variant="dark" expand="lg" fixed="top">
          <Container className="style-navbar">
            <div className="logo-fixed">
              <Link to="/">
                <img
                  src="https://underclub.com.ar/wp-content/uploads/2022/06/Polygon-1.svg"
                  alt="logo"
                  // width="78"
                  // height="69"
                />
              </Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Nuestro Club" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/history">Historia</NavDropdown.Item>
                  <NavDropdown.Item href="/culture">Cultura</NavDropdown.Item>
                  <NavDropdown.Item href="/milestones">Hitos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/artists">
                    Residentes
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/events">Eventos</Nav.Link>
                <Nav.Link href="/contact">Contacto</Nav.Link>
                {!user ? null : (
                  <div onClick={handleLogout}>
                    <Nav.Link>Cerrar Sesión</Nav.Link>
                  </div>
                )}
                <Nav.Link href="#streamings" id="button-streamings">
                  {<BsMusicPlayerFill />}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div> */}

      <div className="navbar-container">
        <nav>
          <div className="logo-fixed">
            <Link to="/">
              <img
                src="https://underclub.com.ar/wp-content/uploads/2022/06/Polygon-1.svg"
                alt="logo"
              />
            </Link>
            {/* <button className="nav-toggle">
              <GiHamburgerMenu />
            </button> */}
          </div>
          <ul className="ul-navbar nav-menu_visible">
            <li id="our-club-navbar">
              Nuestro Club
              <ul>
                <li>
                  <Link to="/history">
                    <a>Historia</a>
                  </Link>
                </li>
                <li>
                  <Link to="/culture">
                    <a>Cultura</a>
                  </Link>
                </li>
                <li>
                  <Link to="/milestones">
                    <a>Hitos</a>
                  </Link>
                </li>
                <li>
                  <Link to="/artists">
                    <a>Residentes</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/events">
                <a>Eventos</a>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <a>Contacto</a>
              </Link>
            </li>
            <li>
              <img className="navbar-waveform" src={gifWaveform} alt="gif" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
