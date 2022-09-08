import React from "react";
import Accordion from "react-bootstrap/Accordion";
import fiama from "../assets/fiamamolina.jpg";

const Artists = () => {
  return (
    <div>
      <div className="titleResidents">
        <h1>RESIDENTES</h1>
        <h1>(A-Z)</h1>
      </div>

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
              {/* <div> */}
              <ul>
                <li>Soundcloud</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Resident Advisor</li>
              </ul>
              {/* <h5>Contacto</h5>
            <p>daniela.underclub@gmail.com</p> */}

              {/* </div> */}
              <img src={fiama} alt="fiama" className="photo"></img>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Josefina Muñóz</Accordion.Header>
          <Accordion.Body>
            <p>
              Josefina Muñoz de la ciudad de Córdoba con residencia en Buenos
              Aires, busca un sonido en constante evolución. Procura un viaje
              que va desde los sonidos más orgánicos hasta las melodías más
              hipnóticas y rítmicas. Teniendo así, una versatilidad a la hora de
              encarar cada pista de baile
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Julieta Kopp</Accordion.Header>
          <Accordion.Body>
            Nacida en Monte Grande, Buenos Aires. Atraída por la escena
            electrónica durante varios años. Su estilo, enfocado enteramente a
            la pista de baile, adquiere un sonido progresivo con perspectiva
            profunda, hipnótica y poderosa, con kicks serios y marcadas
            atmósferas.<br></br>
            Su pasión y dedicación general a la causa le permiten ampliar su
            visión y explorar en nuevos sonidos a cada paso.<br></br>
            Su carrera está en pleno crecimiento gracias a sus presentaciones
            que han tenido gran reconocimiento del público, lo que la lleva a
            fines de 2020 a comenzar su residencia en el reconocido Under Club
            de Buenos Aires.
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
    </div>
  );
};

export default Artists;
