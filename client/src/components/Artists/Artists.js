import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Artists.css";
import axios from "axios";
import { motion } from "framer-motion";
import ReactSoundCloud from "react-soundcloud-embedded";

import { storage } from "../../firebase/config"
import { ref, listAll, getDownloadURL } from "firebase/storage"

const Artists = () => {
  const [resident, setResident] = useState([]);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "artists/")

  useEffect(()=>{
    listAll(imageListRef)
    .then((res)=> res.items.forEach((item)=>{
      getDownloadURL(item).then((url)=> {
        setImageList((prev) => [...prev, url]);
      })
    }))
  },[])


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get("/api/residents").then((res) => setResident(res.data));
  }, []);

  return (
    <motion.div
      className="artists-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <section className="artists-section">
        <h1 className="artists-section-title">
          RESIDENTES<br></br>
        </h1>
        {!resident
          ? null
          : resident.map((res) => (
              //componente original con foto y redes
              // <Accordion bsPrefix={{ background: "#d0f1f7" }} flush>
              //   <Accordion.Item eventKey="0">
              //     <Accordion.Header>{res.name}</Accordion.Header>
              //     <Accordion.Body>
              //       <div className="accordion-left">
              //         <div className="container-artists">
              //           <a
              //             className="link artists-tag-a"
              //             href={res.pressKit}
              //             target="_blank"
              //             rel="noreferrer"
              //           >
              //             PRESS KIT
              //           </a>
              //         </div>
              //         <div className="biography">{res.biography}</div>
              //         <div className="social-media">
              //           <ul>
              //             <li>
              //               <a
              //                 className="artists-tag-a"
              //                 href={res.instagram}
              //                 target="_blank"
              //                 rel="noreferrer"
              //               >
              //                 INSTAGRAM
              //               </a>
              //             </li>
              //             <li>
              //               <a
              //                 className="artists-tag-a"
              //                 href={res.soundcloud}
              //                 target="_blank"
              //                 rel="noreferrer"
              //               >
              //                 SOUNDCLOUD
              //               </a>
              //             </li>
              //             <li>
              //               <a
              //                 className="artists-tag-a"
              //                 href={res.residentAdvisor}
              //                 target="_blank"
              //                 rel="noreferrer"
              //               >
              //                 RESIDENT ADVISOR
              //               </a>
              //             </li>

              //             <li>
              //               <div className="artists-soundcloud-container">
              //                 <ReactSoundCloud
              //                 height={"200px"}
              //                 color={"#8342ea"}
              //                   url={
              //                     "https://soundcloud.com/dynamic-reflection/5-audio-units-ancient-manifold"
              //                   }
              //                 />
              //               </div>
              //             </li>
              //           </ul>
              //         </div>
              //       </div>
              //       <div className="accordion-right">
              //         <img src={res.photo} alt="foto" className="photo"></img>
              //       </div>
              //     </Accordion.Body>
              //   </Accordion.Item>
              // </Accordion>

              <Accordion bsPrefix={{ background: "#d0f1f7" }} flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{res.name}</Accordion.Header>
                  <Accordion.Body className="artists-accordion-body_modifier">
                    {/* <div style={{filter: "grayscale(100%)" }}className="artists-soundcloud-container">
                        <ReactSoundCloud
                          height={"200px"}
                          color={"#8342ea"}
                          url={
                            res.trackSoundcloud
                          }
                        />
                      </div> */}

                    <div className="artists-grid-line_horizontal">
                      <div className="artists-line_horizontal"></div>
                      <div className="presskit-artists">
                        <a
                          className="link artists-tag-a"
                          href={res.pressKit}
                          target="_blank"
                          rel="noreferrer"
                        >
                          PRESS KIT
                        </a>
                      </div>
                      {imageList.map((url)=> {
                        return <img src={url}/>
                      })

                      }
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
      </section>
    </motion.div>
  );
};

export default Artists;
