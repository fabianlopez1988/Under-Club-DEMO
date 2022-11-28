import React from "react";
import "./Events.css";
import EventCard from "./EventCard";
import EventHeaderCard from "./EventHeaderCard";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <motion.div
      className="events-container-component"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <section className="flyer-portada">
        <EventHeaderCard />
      </section>
      <section>
        <EventCard />
      </section>
    </motion.div>
  );
};

export default Events;
