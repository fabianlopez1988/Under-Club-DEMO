import "./NavBar.css";
import gifWaveform from "../../assets/WaveBlanco.gif";
import { useState } from "react";
import BurguerButton from "./BurguerButton";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../../store/user";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(userLogout()).then(() => navigate("/login"));
  };

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
          <ul className={`ul-navbar ${clicked ? "active" : ""}`}>
            <li id="our-club-navbar">
              Nuestro Club
              <ul>
                <li>
                  <Link to="/history">
                    <a onClick={handleClick} href="/">Historia</a>
                  </Link>
                </li>
                <li>
                  <Link to="/culture">
                    <a onClick={handleClick} href="/">Cultura</a>
                  </Link>
                </li>
                <li>
                  <Link to="/milestones">
                    <a onClick={handleClick} href="/">Hitos</a>
                  </Link>
                </li>
                <li>
                  <Link to="/artists">
                    <a onClick={handleClick} href="/">Residentes</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/events">
                <a onClick={handleClick} href="/">Eventos</a>
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <a onClick={handleClick} href="/">Contacto</a>
              </Link>
            </li>
            <li>
              <Link to="/agency" target="_blank">
                <a onClick={handleClick} className="navbar-agency-button">Agencia</a>
              </Link>
            </li>

            <li>
              {!user ? null : (
                <div onClick={handleLogout}>
                  <Link to="/login">
                    <a onClick={handleClick} href="/">Cerrar Sesión</a>
                  </Link>
                </div>
              )}
            </li>

            <li className="li-waveform">
              <img className="navbar-waveform" src={gifWaveform} alt="gif" />
            </li>
          </ul>
          <div className="burguer">
            <BurguerButton clicked={clicked} handleClick={handleClick} />
          </div>
          <div id="burger-background" className={`initial ${clicked ? ' active' : ''}`}></div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
