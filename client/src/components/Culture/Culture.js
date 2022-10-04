import React, { useState, useEffect } from "react";
import IntroCulture from "./IntroCulture/IntroCulture";
import axios from "axios";
import "./Culture.css";

const Culture = () => {
  const [cultures, setCultures] = useState([]);

  useEffect(() => {
    axios.get("/api/culture").then((res) => setCultures(res.data));
  }, []);

  return (
    <div className="culture-container">
      <section className="intro">
        <IntroCulture />
      </section>

      <section className="culture-section">
        {
          <div>
            <div className="grid1">
              <div className="box left">
                <h1>{cultures[0]?.title}</h1>
                <p>{cultures[0]?.paragraph}</p>
              </div>
              <div className="container-lines">
                <div className="first-line"></div>
                <div className="first-line2"></div>
              </div>

              <div className="box right">
                <h1>{cultures[1]?.title}</h1>
                <p>{cultures[1]?.paragraph}</p>
              </div>
            </div>

            <div className="grid2">
              <div className="box center-left">
                <h1>{cultures[2]?.title}</h1>
                <p>{cultures[2]?.paragraph}</p>
              </div>
              <div className="second-line"></div>
            </div>

            {/* <div className="box center-right">
              <h1>{cultures[3]?.title}</h1>
              <p>{cultures[3]?.paragraph}</p>
            </div> */}
            {/* <div className="third-line"></div> */}
          </div>
        }
      </section>
    </div>
  );
};

export default Culture;
