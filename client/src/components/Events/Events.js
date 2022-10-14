import React from "react";
import "./Events.css";
import EventCard from "./EventCard";
import EventHeaderCard from "./EventHeaderCard";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';

const Events = () => {
  return (
    <div className="events-container-component">
        <section className="flyer-portada">
      <Zoom>
          <EventHeaderCard />
      </Zoom>
        </section>
        <section>
      <Fade left>
          <EventCard />
      </Fade>
        </section>
    </div>
  );
};

export default Events;
