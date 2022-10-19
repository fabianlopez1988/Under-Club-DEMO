import "./History.css";
import imagen from "../../assets/DemoSlider3.jpg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const History = () => {
  return (
    <div className="history-container">
      <Fade top>

      <div className="img-right-one">
        <img src={imagen} alt="imagen" />
      </div>
      </Fade>
      <Fade left>
      <div className="text-container">
        <p className="text-history">
          A tres años de la década del 2010 una nueva generación estaba
          naciendo, y con ella la llegada de mucho jóvenes dispuestos a cambiar
          el rumbo de la escena techno local.
        </p>
      </div>
      </Fade>


      <div className="img-left-one">
        <div className="img-left-two-container">
          <img src={imagen} alt="imagen-2" />
        </div>
        <div></div>
        <div className="right-line"></div>
      </div>
      <Zoom>

      <div className="text-container">
        <p className="text-history-center">
          El esprítu de unión, amor y libertad, se encontraba vagando por las
          noches de Buenos Aires a la espera de nuevas propuestas.
        </p>
      </div>
      </Zoom>
      <Fade right>
        
      </Fade>
      <div className="img-right-two">
        <Fade left>

        <div className="left-line"></div>
        </Fade>
        <div></div>
        <div className="img-right-three-container">
          <img src={imagen} alt="imagen-3" />
        </div>
      </div>
      <Zoom>

      <div className="text-container">
        <p className="text-history-last">
          Fue el 4 de febrero en la ciudad de Haedo, Buenos Aires, donde Under
          Club iba a dar sus primeros pasos de vida, y al año se instala en su
          propia locación, situada en una de las esquinas más emblemáticas de
          Palermo Hollywood.
        </p>
      </div>
      </Zoom>
      <div className="img-left-two">
        <div className="img-left-three-container">
          <img src={imagen} alt="imagen-3" />
        </div>
        <div className="line-ultima"></div>
        <div className="right-line"></div>
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

      {/* <div className="gracias-container">
        <p>
          <span className="gracias">GRACIAS&nbsp;</span>POR
        </p>
      </div>
      <div className="apoyo-container">
        <p>EL APOYO</p>
      </div> */}
    </div>
  );
};

export default History;
