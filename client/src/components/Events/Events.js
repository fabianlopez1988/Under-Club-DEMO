import React, { useState, useEffect } from "react";
import "./Events.css";
import axios from "axios";
import EventCard from "./EventCard";
import EventHeaderCard from "./EventHeaderCard";

const Events = () => {
  // const [events, setEvents] = useState([]);

  // const bigEvent = events.pop()
  // console.log(events, "EVENTS");
  
  // useEffect(() => {
  //   axios.get("/api/events").then((res) => setEvents(res.data, "RES.DATA"));
  // }, []);
  
  return (
    <div className="events-container">
      <section>
        {/* <EventHeaderCard event={bigEvent}/> */}
        <EventHeaderCard />
      </section>
      {/* <section>
        <EventCard />
      </section> */}
      {/* <section>{!events ? null : events.map((event) => 
        <EventCard key={event.id} event={event} />
      )}</section> */}
    </div>
  );
};

export default Events;
