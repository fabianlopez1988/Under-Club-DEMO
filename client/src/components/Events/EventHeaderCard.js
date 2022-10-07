import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EventHeaderCard.css";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import { getAllEvent } from "../../store/events";

const EventHeaderCard = () => {
  //console.log(event.flyer, "SOY EVENT")

  // const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvent()).then(() => setIsLoading(false));
  }, []);

  const events = useSelector((state) => state.events);
  console.log(events);

  if (isLoading) {
    <SpinnerComponent />;
  }

  return (
    <div className="flyer-portada">
      {events ? <img src={events.data[0].flyer} /> : <h3>flyer</h3>}
    </div>
    // <div>
    //   <section className="flyer-portada">
    //     <img src={flyerEventHeader} alt="flyer" />
    //     <a
    //       href="https://tickets.underclub.com.ar/productora/eventos/13"
    //       target="_blank"
    //     >
    //       <button>Tickets</button>
    //     </a>
    //   </section>
    // </div>
    //  console.log(event.sort((a, b) => new Date(a).getTime() - new Date(b).getTime()))
  );
};

export default EventHeaderCard;
