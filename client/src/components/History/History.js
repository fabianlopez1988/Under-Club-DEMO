import "./History.css";
import imgOneHistory from "../../assets/img-one-history.jpeg"
import imgTwoHistory from "../../assets/img-two-history.jpeg"
import imgThreeHistory from "../../assets/img-three-history.jpeg"
import imgFourHistory from "../../assets/img-four-history.jpeg"
import Slide from "react-reveal/Slide";
import Flash from "react-reveal/Flash";
import { useEffect } from "react";


const History = () => {

  useEffect(()=>  {
    window.scrollTo(0, 0);
  },[]);

  return (
    <div
      className="history-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}

    >
      <div className="img-right-one">
        <img src={imgOneHistory} alt="imagen" />
      </div>

      <div className="text-container">
        <p className="text-history">
          A tres años de la década del 2010 una nueva generación estaba
          naciendo, y con ella la llegada de mucho jóvenes dispuestos a cambiar
          el rumbo de la escena techno local.
        </p>
      </div>

      <div className="img-left-one">
        <div className="img-left-two-container">
          <Slide left>
            <img src={imgTwoHistory} alt="imagen-2" />
          </Slide>
        </div>
        <div></div>
        <Flash>
          <div className="right-line"></div>
        </Flash>
      </div>
      <div className="text-container">
        <p className="text-history-center">
          El esprítu de unión, amor y libertad, se encontraba vagando por las
          noches de Buenos Aires a la espera de nuevas propuestas.
        </p>
      </div>

      <div className="img-right-two">
        <Flash>
          <div className="left-line"></div>
        </Flash>
        <div></div>
        <div className="img-right-three-container">
          <Slide right>
            <img src={imgThreeHistory} alt="imagen-3" />
          </Slide>
        </div>
      </div>

      <div className="text-container">
        <p className="text-history-last">
          Fue el 4 de febrero en la ciudad de Haedo, Buenos Aires, donde Under
          Club iba a dar sus primeros pasos de vida, y al año se instala en su
          propia locación, situada en una de las esquinas más emblemáticas de
          Palermo Hollywood.
        </p>
      </div>
      <div className="img-left-two">
        <div className="img-left-three-container">
          <Slide left>
            <img src={imgFourHistory} alt="imagen-3" />
          </Slide>
        </div>
        <Flash>
          <div className="line-ultima"></div>
        </Flash>
        <Flash>
          <div className="right-line"></div>
        </Flash>
      </div>

      <div className="grid-colum-gracias-container">
        <div className="grid-row-gracias">
          <div className="grid-column-gracias">
            <div>
              <p className="gracias">GRACIAS</p>
            </div>
            <div>
              <p>POR</p>
            </div>
            <div></div>
          </div>
          <div className="grid-column-apoyo">
            <div></div>
            <div>
              <p>EL</p>
            </div>
            <div>
              <p>APOYO</p>
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default History;
