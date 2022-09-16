import Carousel from 'react-bootstrap/Carousel';
import DemoSlider2 from "../../assets/DemoSlider2.jpg";
import DemoSlider3 from "../../assets/DemoSlider3.jpg"
import DemoSlider4 from "../../assets/DemoSlider4.jpg";
import "./CarouselHome.css";

function CarouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DemoSlider4}
          alt="Green Club"
        />
        <Carousel.Caption>
          {/* <h3>Demo Slider</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DemoSlider2}
          alt="Permiso Perdón Gracias"
        />

        <Carousel.Caption>
          {/* <h3>Demo Slider 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={DemoSlider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Demo Slider3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;