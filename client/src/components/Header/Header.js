import React from "react";
import trailer from "../../assets/videoUC.mp4";
import "./Header.css";
import Slide from 'react-reveal/Slide';

const Header = () => {
  return (
    <div className="containerVideo">
      <div className="overlay"></div>
      <video src={trailer} autoPlay loop muted></video>

      <div className="headerContainer parpadea text">
      <Slide left>
        <h1 className="titulo1">NUESTRO CLUB </h1>
        <h1 className="titulo1">NUESTRO </h1>
        <h1 className="titulo2">HOGAR</h1>
      </Slide>
      </div>
    </div>
  );
};

export default Header;
