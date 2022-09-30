import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Artists.css";
import axios from "axios";

const Artists = () => {
  const [resident, setResident] = useState([]);

  useEffect(() => {
    axios.get("/api/residents").then((res) => setResident(res.data));
  }, []);
  
  return (
    <div className="artists-container">
      <div className="titleResidents" id="residents">
        <section className="artists-section">
          <h1>
            RESIDENTES<br></br>
            (A-Z)
          </h1>
          {!resident
            ? null
            : resident.map((res) => (
                <Accordion
                  defaultActiveKey="0"
                  className="accordionArtists"
                  bsPrefix={{ background: "#d0f1f7" }}
                  flush
                >
                  <Accordion.Item eventKey="1">
                    <Accordion.Header style={{ fontSize: " 2.5rem" }}>
                      {res.name}
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="accordion-left">{res.biography}</div>
                      <div className="accordion-right">
                        <ul>
                          <li>{res.soundcloud}</li>
                          <li>{res.instagram}</li>
                          <li>{res.facebook}</li>
                          <li>{res.residentAdvisor}</li>
                        </ul>
                        <img src={res.photo} alt="foto" className="photo" />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              ))}
        </section>
      </div>
    </div>
  );
};

export default Artists;
