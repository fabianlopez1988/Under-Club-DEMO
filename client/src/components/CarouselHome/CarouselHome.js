import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselHome.css";
import axios from "axios";
import DemoSlider from "../../assets/DemoSlider.jpg";
import DemoSlider2 from "../../assets/DemoSlider2.jpg"

function CarouselHome() {
  const [culture, setCulture] = useState([]);

  useEffect(() => {
    axios.get("/api/culture").then((res) => setCulture(res.data));
  }, []);
  console.log(culture);

  return (
    <div className="carousel-container">

      {/* { <Carousel fade>
        
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={DemoSlider}
                  alt="image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={DemoSlider2}
                  alt="image2"
                />
              </Carousel.Item>
          
      </Carousel> } */}

      { <Carousel fade>
        {!culture
          ? null
          : culture.map((cult) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cult.image}
                  alt="image"
                  key={cult.id}
                />
              </Carousel.Item>
            ))}
      </Carousel> }
    </div>
  );
}

export default CarouselHome;
