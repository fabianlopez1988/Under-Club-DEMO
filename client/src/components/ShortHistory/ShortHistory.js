import React from "react";
import "./ShortHistory.css";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";

const ShortHistory = () => {
  return (
    <>
    
    <Zoom>
      {/* <div className="historyContainer" id="history">
      <div className="">

      <div className="titulo3Container">
        <h1 className="titulo3">UNDER CLUB</h1>
      </div>
      <div className="titulo4Container">
        <h1 className="titulo4 grid">PARA TODO EL MUNDO</h1>
      </div>
      <div className="grid-line-short">

      </div>
      </div>

      <p>
        “Entonces ahí te das cuenta que hay algo más, que no es solo un Club de
        música electrónica, que pasan cosas que impactan en la vida de las
        personas”.
        <br></br>Joel Silva.
      </p>
    </div> */}

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
      </div>

    </Zoom>
      <Zoom>

      <p id="paragraph-container">
        “Entonces ahí te das cuenta que hay algo más, que no es solo un Club de
        música electrónica, que pasan cosas que impactan en la vida de las
        personas”.
        <br></br>Joel Silva.
      </p>
      </Zoom>
    </>
  );
};

export default ShortHistory;
