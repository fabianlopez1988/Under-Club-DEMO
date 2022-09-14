import React from "react";
import Accordion from "react-bootstrap/Accordion";
import fiama from "../assets/fiamamolina.jpg";
import jose from "../assets/jose.jpg"
import juli from "../assets/juli.jpg"
import "./Artists.css";


const Artists = () => {
  return (
    <div className="artists-container">
      <div className="titleResidents" id="residents">
      <section class="artists-section">
        <h1>RESIDENTES<br></br>
        (A-Z)</h1>

      {/* ACORDEÓN */}

      <Accordion
        defaultActiveKey="0"
        className="accordionArtists"
        bsPrefix={{ background: "#d0f1f7" }}
        flush
      >
        <Accordion.Item eventKey="1">
          <Accordion.Header style={{ fontSize: " 2.5rem" }}>
            Fiama Molina
          </Accordion.Header>
          <Accordion.Body>
            <div className="accordion-left">
              <p>
                A lo largo de sus años de carrera se instruyó mejorando su
                técnica y reflejando su crecimiento en cada presentación. En sus
                sesiones desea transmitir una experiencia nueva a través de un
                viaje singular, atmosférico y entretenido.<br></br>
                En el año 2020 salió a la luz su primer original en el sello de
                Insight Records. <br></br>
                Su faceta como productora sigue en desarrollo a la vez que su
                faceta de dj, la cual acaba de dar un nuevo paso al incorporarse
                al equipo del mítico y legendario Under Club.<br></br>
              </p>
            </div>
            <div className="accordion-right">
              <ul>
                <li>Soundcloud</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Resident Advisor</li>
              </ul>
  

              <img src={fiama} alt="fiama" className="photo"></img>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Josefina Muñóz</Accordion.Header>
          <Accordion.Body>
          <div className="accordion-left">
              <p>
              Josefina Muñoz de la ciudad de Córdoba con residencia en Buenos
              Aires, busca un sonido en constante evolución. Procura un viaje
              que va desde los sonidos más orgánicos hasta las melodías más
              hipnóticas y rítmicas. Teniendo así, una versatilidad a la hora de
              encarar cada pista de baile. <br></br>
              En su faceta como productora, ha logrado editar en sellos como Vapourtrail & BlackArt (Colombia), y varias colaboraciones en Suara, Human Recs, Simplecoding Recordings, Concepto Hipnotico. Con varios proyectos pronto a salir, Josefina no descansa en su crecimiento.
              </p>
            </div>
            <div className="accordion-right">
              <ul>
                <li>Soundcloud</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Resident Advisor</li>
              </ul>
              <img src={jose} alt="jose" className="photo"></img>
            </div>
          </Accordion.Body>
        </Accordion.Item>

         
        <Accordion.Item eventKey="3">
          <Accordion.Header>Julieta Kopp</Accordion.Header>
          <Accordion.Body>
          <div className="accordion-left">
              <p>
            Su estilo, enfocado enteramente a
            la pista de baile, adquiere un sonido progresivo con perspectiva
            profunda, hipnótica y poderosa, con kicks serios y marcadas
            atmósferas.<br></br>
            Su pasión y dedicación general a la causa le permiten ampliar su
            visión y explorar en nuevos sonidos a cada paso.<br></br>
            Su carrera está en pleno crecimiento gracias a sus presentaciones
            que han tenido gran reconocimiento del público.<br></br> Mantiene firme su residencia en el mítico Under Club de Buenos Aires.<br></br>
            En su faceta como productora, ha editado en sellos como Dynamic Reflection, Induxtriall Records y Combine Audio, entre otros.
            </p>
            </div>
            <div className="accordion-right">
              <ul>
                <li>Soundcloud</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Resident Advisor</li>
                <li>
                  <a href="https://portfolio-julieta-kopp.vercel.app/" target="_blank" rel="noreferrer"> Press Kit</a>
                 </li>
              </ul>
              <img src={juli} alt="juli" className="photo"></img>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
           
          <Accordion.Header>Kid Riot</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>KRISSFA</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Mariano DC</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header>Samsara</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>




      </section>

    </div>
          </div>

  );
};

export default Artists;
