import React from "react";
import "./Events.css";
import EventCard from "./EventCard";
import EventHeaderCard from "./EventHeaderCard";
import { motion } from "framer-motion";


const Events = () => {
  return (
    <div className="events-container-component">
      <motion.section
      className="flyer-portada"
         initial={{ y: "50%", opacity: 0, scale: 0.5 }}
         animate={{y:0, opacity:1, scale:1}}
         transition={{duration: 0.2, ease: "easeOut"}}>
        <EventHeaderCard />
      </motion.section>
      <motion.section
        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
        animate={{y:0, opacity:1, scale:1}}
        transition={{duration: 0.2, ease: "easeOut"}}>
      
        <EventCard />
      </motion.section>
    </div>
  );
};

export default Events;
