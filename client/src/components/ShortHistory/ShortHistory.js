import React from "react";
import "./ShortHistory.css";
// import Zoom from "react-reveal/Zoom";
// import Rotate from "react-reveal/Rotate";

const ShortHistory = () => {

  return (
      <div className="short-history-container">
        <div>
          <h1 id="title1">UNDER CLUB</h1>
        </div>
        <div id="grid-col-container-line">
          <div id="line-container">
            <div id="grid-line-col"></div>
            <div></div>
          </div>
          <div id="title2-container">
            <h1 id="title2">PARA TODO EL MUNDO</h1>
          </div>
        </div>
  

      <p id="paragraph-container"
>
        “Entonces ahí te das cuenta que hay algo más, que no es solo un Club de
        música electrónica, que pasan cosas que impactan en la vida de las
        personas”.
        <br></br>Joel Silva.
     
      </p>
    </div>
  );
};

export default ShortHistory;
