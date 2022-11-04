import { Link} from "react-router-dom";
import "./NavBar.css";
import gifWaveform from "../../assets/WaveBlanco.gif";
import { useState } from "react"
import BurguerButton from "./BurguerButton";

const NavBar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      <div className="navbar-container">
        <nav>
          <div className="logo-fixed">
            <Link to="/">
              <img
                src="https://underclub.com.ar/wp-content/uploads/2022/06/Polygon-1.svg"
                alt="logo"
              />
            </Link>
          </div>
          <ul className={`ul-navbar ${ clicked ? "active" : ""}`}>
            <li id="our-club-navbar">
              Nuestro Club
              <ul>
                <li>
                  <Link to="/history">
                    <a href="/">Historia</a>
                  </Link>
                </li>
                <li>
                  <Link to="/culture">
                    <a href="/">Cultura</a>
                  </Link>
                </li>
                <li>
                  <Link to="/milestones">
                    <a href="/">Hitos</a>
                  </Link>
                </li>
                <li>
                  <Link to="/artists">
                    <a href="/">Residentes</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/events">
                <a href="/">Eventos</a>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <a href="/">Contacto</a>
              </Link>
            </li>
            <li>
              <Link to="/agency" target="_blank">
                <a className="navbar-agency-button">Agencia</a>
              </Link>
            </li>

            <li>
              {!user ? null : (
                <div onClick={handleLogout}>
                  <Link to="/login">
                    <a>Cerrar Sesión</a>
                  </Link>
                </div>
              )}
            </li>
            <li>
              <img className="navbar-waveform" src={gifWaveform} alt="gif" />
            </li>
          </ul>
          <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
