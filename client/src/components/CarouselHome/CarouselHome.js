import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselHome.css";
import { getAllEvent } from "../../store/events";
import DemoSlider from "../../assets/DemoSlider.jpg";
import DemoSlider2 from "../../assets/DemoSlider2.jpg";
import DemoSlider3 from "../../assets/DemoSlider3.jpg";
import DemoSlider4 from "../../assets/DemoSlider4.jpg";

function CarouselHome() {
  const [cultures, setCultures] = useState(0);

  const handleSelect = (selectedCulture, e) => {
    setCultures(selectedCulture);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvent());
  }, []);
  
  const events = useSelector((state) => state.events);

  return (
    <div className="carousel-home-container">
      <Carousel fade>
      {/* activeIndex={index} onSelect={handleSelect} */}
      {/* <Carousel.Item>

          {events ? (
         
            
            <div className="carousel-home-container">
              <a href={events.data[0]?.url} alt="flyer" target="_blank">
              <img src={events.data[0]?.flyerLarge} alt="flyer" />
            </a>
            </div>

          ) : (
            <h3>flyer</h3>
          )}

    
        </Carousel.Item> */}
        <Carousel.Item>
          <img className="d-block w-100" src={DemoSlider} alt="slider" />
          <Carousel.Caption>
            {/* <h3>
              PERMISO<br></br> PERDÓN <br></br>GRACIAS
            </h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={DemoSlider2} alt="slider" />
          {/* <Carousel.Caption>
            <h3>
              NO FOTOS<br></br> NO VIDEOS
            </h3>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={DemoSlider3} alt="slider" />
          {/* <Carousel.Caption>
            <h3>
              NO VIP<br></br>SOMOS TODOS <br></br>IGUALES
            </h3>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={DemoSlider4} alt="slider" />
          {/* <Carousel.Caption>
            <h3>
              PERMISO<br></br> PERDÓN <br></br>GRACIAS
            </h3>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselHome;
