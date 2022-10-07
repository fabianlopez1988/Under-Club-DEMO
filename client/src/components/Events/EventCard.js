import React, { useState, useEffect } from "react";
import "./EventCard.css";
import axios from "axios";

const EventCard = () => {

const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events").then((res) => setEvents(res.data, "RES.DATA"));
  }, []);
  
  return (
    <div className="flyers-grid">
      {/* {
        !events ? null : events.map((event) => (
          <img src={event.flyer} alt="flyer"></img>
        ))
      } */}
      {/* <section className="flyers-grid"> */}
        {/* <img src={event.flyer} alt="flyer" />
        <a
          href="https://tickets.underclub.com.ar/productora/eventos/13"
          target="_blank"
        >
          <button>Tickets</button>
        </a> */}
      {/* </section> */}
      {/* <section className="flyer-grid">
        <img src={event.flyer} alt="flyer" />

        <button>Tickets</button>
      </section> */}
    </div>
  );
};

export default EventCard;
