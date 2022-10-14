import React, { useEffect } from "react";
import IntroCulture from "./IntroCulture/IntroCulture";
import "./Culture.css";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Culture = () => {
  // const boxVariant = {
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  //   hidden: { opacity: 0, scale: 0 },
  // };

  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);


  return (
    <div className="culture-container">
    <section className="intro">
      <IntroCulture />
    </section>

    <section className="culture-section ">
      {
        <div>
          <div className="grid1 on-view">
            <div
              className="box left"
              // ref={ref}
              // variants={boxVariant}
              // initial="hidden"
              // animate={control}
            >
              <h1>Permiso</h1>
              <h1 className="violet">Perdón</h1>
              <h1>Gracias</h1>
              <p>
                Nuestro idioma debe estar presente en todo momento y en cada
                rincón de nuestro hogar.{" "}
              </p>
              {/* <h1>{cultures[0]?.title}</h1>
              <p>{cultures[0]?.paragraph}</p> */}
            </div>
            <div
              className="container-lines on-view"
              // ref={ref}
              // variants={boxVariant}
              // initial="hidden"
              // animate={control}
            >
              <div className="first-line"></div>
              <div className="first-line2"></div>
            </div>

            <div
              className="box right on-view"
              // ref={ref}
              // variants={boxVariant}
              // initial="hidden"
              // animate={control}
            >
              <h1>NO FOTOS</h1>
              <h1 className="violet">NO</h1>
              <h1>VIDEOS</h1>
              <p>
                Cuidar el clima de conexión musical es parte de nuestra
                misión. Es por esta misma razón que no permitimos capturar
                momentos con aparatos tecnológicos.{" "}
              </p>
              {/* <h1>{cultures[2]?.title}</h1>
              <p>{cultures[2]?.paragraph}</p> */}
            </div>
          </div>

          <div className="grid2">
            <div className="box center-left">
              <h1>NO VIP</h1>
              <h1>SOMOS TODOS</h1>
              <h1 className="violet">iguales</h1>
              <p>
                Es importante comprender que en nuestros encuentros somos
                todos iguales. No contamos con sectores exclusivos.
              </p>
              {/* <h1>{cultures[3]?.title}</h1>
              <p>{cultures[3]?.paragraph}</p> */}
            </div>
            <div className="second-line"></div>
          </div>

          <div className="grid3">
            <div className="third-line"></div>
            <div className="box center-right">
              <h1>
                <span className="violet">Green </span>club
              </h1>
              <p>
                Somos conscientes del impacto que generamos en el medio
                ambiente. Hoy podemos decir que reciclamos la totalidad de los
                envases que utilizamos en cada uno de nuestros eventos
                (plástico, latas, y vidrios). Continuamos trabajando en
                alternativas que reduzcan el impacto ambiental y generen mayor
                conciencia acerca de la huella que dejamos.
              </p>
              {/* <h1>{cultures[1]?.title}</h1>
              <p>{cultures[1]?.paragraph}</p> */}
            </div>
          </div>
        </div>
      }
    </section>
  </div>
    // <div className="culture-container">
    //   <section className="intro">
    //     <IntroCulture />
    //   </section>

    //   <section className="culture-section">
    //     {
    //       <div>
    //         <div className="grid1">
    //           <motion.div
    //             className="box left"
    //             // ref={ref}
    //             // variants={boxVariant}
    //             // initial="hidden"
    //             // animate={control}
    //           >
    //             <h1>Permiso</h1>
    //             <h1 className="violet">Perdón</h1>
    //             <h1>Gracias</h1>
    //             <p>
    //               Nuestro idioma debe estar presente en todo momento y en cada
    //               rincón de nuestro hogar.{" "}
    //             </p>
    //             {/* <h1>{cultures[0]?.title}</h1>
    //             <p>{cultures[0]?.paragraph}</p> */}
    //           </motion.div>
    //           <motion.div
    //             className="container-lines"
    //             // ref={ref}
    //             // variants={boxVariant}
    //             // initial="hidden"
    //             // animate={control}
    //           >
    //             <div className="first-line"></div>
    //             <div className="first-line2"></div>
    //           </motion.div>

    //           <motion.div
    //             className="box right"
    //             // ref={ref}
    //             // variants={boxVariant}
    //             // initial="hidden"
    //             // animate={control}
    //           >
    //             <h1>NO FOTOS</h1>
    //             <h1 className="violet">NO</h1>
    //             <h1>VIDEOS</h1>
    //             <p>
    //               Cuidar el clima de conexión musical es parte de nuestra
    //               misión. Es por esta misma razón que no permitimos capturar
    //               momentos con aparatos tecnológicos.{" "}
    //             </p>
    //             {/* <h1>{cultures[2]?.title}</h1>
    //             <p>{cultures[2]?.paragraph}</p> */}
    //           </motion.div>
    //         </div>

    //         <div className="grid2">
    //           <div className="box center-left">
    //             <h1>NO VIP</h1>
    //             <h1>SOMOS TODOS</h1>
    //             <h1 className="violet">iguales</h1>
    //             <p>
    //               Es importante comprender que en nuestros encuentros somos
    //               todos iguales. No contamos con sectores exclusivos.
    //             </p>
    //             {/* <h1>{cultures[3]?.title}</h1>
    //             <p>{cultures[3]?.paragraph}</p> */}
    //           </div>
    //           <div className="second-line"></div>
    //         </div>

    //         <motion.div className="grid3">
    //           <div className="third-line"></div>
    //           <div className="box center-right">
    //             <h1>
    //               <span className="violet">Green </span>club
    //             </h1>
    //             <p>
    //               Somos conscientes del impacto que generamos en el medio
    //               ambiente. Hoy podemos decir que reciclamos la totalidad de los
    //               envases que utilizamos en cada uno de nuestros eventos
    //               (plástico, latas, y vidrios). Continuamos trabajando en
    //               alternativas que reduzcan el impacto ambiental y generen mayor
    //               conciencia acerca de la huella que dejamos.
    //             </p>
    //             {/* <h1>{cultures[1]?.title}</h1>
    //             <p>{cultures[1]?.paragraph}</p> */}
    //           </div>
    //         </motion.div>
    //       </div>
    //     }
    //   </section>
    // </div>
  );
};

export default Culture;
