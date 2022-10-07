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
                      <div className="accordion-left">
                        <div className="container-artists">
                          <a
                            className="link"
                            href={res.pressKit}
                            target="_blank"
                            rel="noreferrer"
                          >
                            PRESS KIT
                          </a>
                        </div>
                        <div className="biography">{res.biography}</div>
                        <div className="social-media">
                          <ul>
                            <li>
                              <a
                                href={res.instagram}
                                target="_blank"
                                rel="noreferrer"
                              >
                                INSTAGRAM
                              </a>
                            </li>
                            <li>
                              <a
                                href={res.soundcloud}
                                target="_blank"
                                rel="noreferrer"
                              >
                                SOUNDCLOUD
                              </a>
                            </li>
                            <li>
                              <a
                                href={res.residentAdvisor}
                                target="_blank"
                                rel="noreferrer"
                              >
                                RESIDENT ADVISOR
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="accordion-right">
                        <img src={res.photo} alt="foto" className="photo"></img>
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
