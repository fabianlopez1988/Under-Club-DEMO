import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselHome.css";
import axios from "axios";

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
          {!culture
            ? null
            : culture.map((cult) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cult.image}
                    alt="image"
                    key={cult.id}
                    onClick={() => navigate("/api/culture")}
                  />
                </Carousel.Item>
              ))}
        </Carousel>
      }
    </div>
  );
}

export default CarouselHome;
