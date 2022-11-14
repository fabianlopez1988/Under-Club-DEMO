import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Agency.css";
import axios from "axios";
import { motion } from "framer-motion";
import ReactSoundCloud from "react-soundcloud-embedded";


const Agency = () => {
  const [resident, setResident] = useState([]);

  useEffect(() => {
    axios.get("/api/agency").then((res) => setResident(res.data));
  }, []);

  return (
    <motion.div
      className="agency-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <section className="agency-section">
        <h1 className="agency-section-title">
          AGENCIA<br></br>
        </h1>
        {!resident
          ? null
          : resident.map((res) => (
              // <Accordion bsPrefix={{ background: "#d0f1f7" }} flush>
              //   <Accordion.Item eventKey="0">
              //     <Accordion.Header>{res.name}</Accordion.Header>
              //     <Accordion.Body className="agency-accordion-body_modifier">
              //       <div
              //         className="agency-photo-container"
              //         style={{ filter: "grayscale(100%)" }}
              //       >
              //         <img
              //           src={res.photo}
              //           alt="foto"
              //           className="agency-photo"
              //         ></img>
              //         <p className="agency-biography">{res.biography}</p>
              //       </div>
              //     </Accordion.Body>
              //   </Accordion.Item>
              // </Accordion>

                 <Accordion bsPrefix={{ background: "#d0f1f7" }} flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{res.name}</Accordion.Header>
                  <Accordion.Body className="agency-accordion-body_modifier">
                    <div className="agency-accordion-left">
                      <div className="container-agency">
                        <a
                          className="agency-link agency-tag-a"
                          href={res.pressKit}
                          target="_blank"
                          rel="noreferrer"
                        >
                          PRESS KIT
                        </a>
                      </div>
                      <div className="agency-biography">{res.biography}</div>
                      <div className="agency-social-media">
                        <ul>
                          <li>
                            <a
                              className="agency-tag-a"
                              href={res.instagram}
                              target="_blank"
                              rel="noreferrer"
                            >
                              INSTAGRAM
                            </a>
                          </li>
                          <li>
                            <a
                              className="agency-tag-a"
                              href={res.soundcloud}
                              target="_blank"
                              rel="noreferrer"
                            >
                              SOUNDCLOUD
                            </a>
                          </li>
                          <li>
                            <a
                              className="agency-tag-a"
                              href={res.residentAdvisor}
                              target="_blank"
                              rel="noreferrer"
                            >
                              RESIDENT ADVISOR
                            </a>
                          </li>

                          {/* <li>
                            <div className="agency-soundcloud-container">
                              <ReactSoundCloud
                              height={"200px"}
                              color={"#8342ea"}
                                url={res.trackSoundcloud}
                              />
                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="agency-accordion-right">
                      <img src={res.photo} alt="foto" className="agency-photo"></img>
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
