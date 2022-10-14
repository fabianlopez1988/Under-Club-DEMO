import React from "react";
import "./ShortHistory.css";
import Zoom from 'react-reveal/Zoom';

const ShortHistory = () => {
  return (
    <Zoom>

    <div className="historyContainer" id="history">
      <div className="titulo3Container">
        <h1 className="titulo3">UNDER CLUB</h1>
      </div>
      <div className="titulo4Container">
        <h1 className="titulo4">PARA TODO EL MUNDO</h1>
      </div>

      <p>
        “Entonces ahí te das cuenta que hay algo más, que no es solo un Club de
        música electrónica, que pasan cosas que impactan en la vida de las
        personas”.
        <br></br>Joel Silva.
      </p>
    </div>
    </Zoom>
  );
};

export default ShortHistory;
