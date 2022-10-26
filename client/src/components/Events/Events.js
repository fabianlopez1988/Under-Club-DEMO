import React from "react";
import "./Events.css";
import EventCard from "./EventCard";
import EventHeaderCard from "./EventHeaderCard";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';
import { motion } from "framer-motion";

const Events = () => {
  return (
    <motion.div className="events-container-component"
    initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: { duration: 0.1}}}>
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
    </motion.div>
  );
};

export default Events;
