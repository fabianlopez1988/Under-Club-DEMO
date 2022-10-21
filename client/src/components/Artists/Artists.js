import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Artists.css";
import axios from "axios";

const Artists = () => {
  const [resident, setResident] = useState([]);
  
  console.log(resident)
  useEffect(() => {
    axios.get("/api/residents").then((res) => setResident(res.data));
  }, []);
  return (
    <div className="artists-container">
        <section className="artists-section">
          <h1 className="artists-section-title">
            RESIDENTES<br></br>
            (A-Z)
          </h1>
          {!resident
            ? null
            : resident.map((res) => (
              <Accordion bsPrefix={{ background: "#d0f1f7" }} flush >
              <Accordion.Item eventKey="0">
                <Accordion.Header>{res.name}</Accordion.Header>
                <Accordion.Body>
                      <div className="accordion-left">
                        <div className="container-artists">
                          <a
                            className="link artists-tag-a"
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
                              <a className="artists-tag-a"
                                href={res.instagram}
                                target="_blank"
                                rel="noreferrer"
                              >
                                INSTAGRAM
                              </a>
                            </li>
                            <li>
                              <a className="artists-tag-a"
                                href={res.soundcloud}
                                target="_blank"
                                rel="noreferrer"
                              >
                                SOUNDCLOUD
                              </a>
                            </li>
                            <li>
                              <a className="artists-tag-a"
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
  );
};

export default Artists;
