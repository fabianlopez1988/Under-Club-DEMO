import React, { useState, useEffect } from "react";
import "./Events.css";
import EventCard from "./EventCard";
import EventHeaderCard from "./EventHeaderCard";

const Events = () => {
  return (
    <div className="events-container">
      <section>
        <EventHeaderCard />
      </section>
      <section>
        <EventCard />
      </section>
    </div>
  );
};

export default Events;
