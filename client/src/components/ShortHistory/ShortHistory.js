import React from "react";
import "./ShortHistory.css";
// import Zoom from "react-reveal/Zoom";
// import Rotate from "react-reveal/Rotate";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const ShortHistory = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 4]);

  return (
    <div>
      <motion.div className="short-history-container" 
         style={{
           scale
         }}>
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
      <motion.div
      className="item"
      style={{
        scaleY: scrollYProgress
      }}/>
      </motion.div>

      <motion.p id="paragraph-container"
       style={{
        scale
      }}>
        “Entonces ahí te das cuenta que hay algo más, que no es solo un Club de
        música electrónica, que pasan cosas que impactan en la vida de las
        personas”.
        <br></br>Joel Silva.
      <motion.div
      className="item"
      style={{
        scaleY: scrollYProgress
      }}/>
      </motion.p>
    </div>
  );
};

export default ShortHistory;
