import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselHome.css";
import axios from "axios";
import DemoSlider from "../../assets/DemoSlider.jpg";
import DemoSlider2 from "../../assets/DemoSlider2.jpg";
import DemoSlider3 from "../../assets/DemoSlider3.jpg";
import DemoSlider4 from "../../assets/DemoSlider4.jpg";

function CarouselHome() {
  const [culture, setCulture] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/culture").then((res) => setCulture(res.data));
  }, []);

  return (
    <div className="carousel-container">
      {
        <Carousel fade>
          {/* {!culture
            ? null
            : culture.map((cult) => ( */}
          <Carousel.Item>
            {/* <img
                    className="d-block w-100"
                    src={cult.image}
                    alt="image"
                    key={cult.id}
                    onClick={() => navigate("/api/culture")}
                  /> */}
            <img
              className="d-block w-100"
              src={DemoSlider}
              alt="image"
              onClick={() => navigate("/api/culture")}
            />
            <h1 className="carousel-title">
              PERMISO<br></br> PERDÓN <br></br>GRACIAS
            </h1>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={DemoSlider2}
              alt="image"
              onClick={() => navigate("/culture")}
            />
            <h1 className="carousel-title">
              NO FOTOS<br></br> NO VIDEOS
            </h1>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={DemoSlider3}
              alt="image"
              onClick={() => navigate("/culture")}
            />
            <h1 className="carousel-title">
              NO VIP <br></br>SOMOS TODOS <br></br>IGUALES<br></br>
            </h1>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={DemoSlider4}
              alt="image"
              onClick={() => navigate("/culture")}
            />
            <h1 className="carousel-title">
              GREEN <br></br>CLUB
            </h1>
          </Carousel.Item>
        </Carousel>
      }
    </div>
  );
}

export default CarouselHome;
