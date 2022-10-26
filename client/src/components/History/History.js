import "./History.css";
import imagen from "../../assets/DemoSlider3.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariantRight = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9 } },
  hidden: { opacity: 0, scale: 0, x: 500 },
};

const boxVariantLeft = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9 } },
  hidden: { opacity: 0, scale: 0, x: -500 },
};

const boxVariantCenter = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, delay: 3000 } },
  hidden: { opacity: 0, scale: 0 },
};




const History = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className="history-container">
      <motion.div
        className="img-right-one"
        ref={ref}
        variants={boxVariantRight}
        initial="hidden"
        animate={control}
      >
        <img src={imagen} alt="imagen" />
      </motion.div>

      <div className="text-container">
        <p className="text-history">
          A tres años de la década del 2010 una nueva generación estaba
          naciendo, y con ella la llegada de mucho jóvenes dispuestos a cambiar
          el rumbo de la escena techno local.
        </p>
      </div>

      <div className="img-left-one">
        <motion.div
          className="img-left-two-container"
          ref={ref}
          variants={boxVariantLeft}
          initial="hidden"
          animate={control}
        >
          <img src={imagen} alt="imagen-2" />
        </motion.div>
        <div></div>
        <div className="right-line"></div>
      </div>

      <div className="text-container">
        <p className="text-history-center">
          El esprítu de unión, amor y libertad, se encontraba vagando por las
          noches de Buenos Aires a la espera de nuevas propuestas.
        </p>
      </div>

      <div className="img-right-two">
        <div className="left-line"></div>
        <div></div>
        <div className="img-right-three-container">
          <img src={imagen} alt="imagen-3" />
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
    </div>
  );
};

export default History;
