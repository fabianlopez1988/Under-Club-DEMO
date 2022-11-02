import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Agency.css";
import axios from "axios";
import { motion } from "framer-motion";

const Agency = () => {
  const [resident, setResident] = useState([]);
  
  useEffect(() => {
    axios.get("/api/agency").then((res) => setResident(res.data));
  }, []);

  return (
    <motion.div className="agency-container"
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: { duration: 0.1 }}}>
        <section className="agency-section">
          <h1 className="agency-section-title">
            AGENCIA<br></br>
          </h1>
          {!resident
            ? null
            : resident.map((res) => (
              <Accordion bsPrefix={{ background: "#d0f1f7" }} flush >
              <Accordion.Item eventKey="0">
                <Accordion.Header>{res.name}</Accordion.Header>
                <Accordion.Body>
                      <div className="accordion-left">
                        <div className="container-agency">
                          <a
                            className="link agency-tag-a"
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
                              <a className="agency-tag-a"
                                href={res.instagram}
                                target="_blank"
                                rel="noreferrer"
                              >
                                INSTAGRAM
                              </a>
                            </li>
                            <li>
                              <a className="agency-tag-a"
                                href={res.soundcloud}
                                target="_blank"
                                rel="noreferrer"
                              >
                                SOUNDCLOUD
                              </a>
                            </li>
                            <li>
                              <a className="agency-tag-a"
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
    </motion.div>
  );
};

export default Agency;
