import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./EventHeaderCard.css";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import { getAllEvent } from "../../store/events";

const EventHeaderCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  if (isLoading) {
    <SpinnerComponent />;
  }

  useEffect(() => {
    dispatch(getAllEvent()).then(() => setIsLoading(false));
  }, []);

  const events = useSelector((state) => state.events);

  if (events !== null) {
    // let arrayEvents = events.data
    // console.log(arrayEvents)
    // arrayEvents.map((event)=> console.log(event.date))
    let dates = [];
    // arrayEvents.map((event)=> dates.push(event.date))
    events.data.map((event) => dates.push(event.date));

    // console.log(dates)
    let datesInOrder = dates.sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );
    // event.sort((a, b) => new Date(a).getTime() - new Date(b).getTime()))
    console.log(datesInOrder);
  }

  return (
    <div className="flyer-portada">
      {events ? (
        <div className="flyer-box">
          <img src={events.data[0].flyer} alt="flyer" />
          <a
              href="https://tickets.underclub.com.ar/productora/eventos/13"
              target="_blank"
              rel="noreferrer"
            >
          <button>Tickets</button>
          </a>
        </div>
      ) : (
        <h3>flyer</h3>
      )}

      {/* {events ? <img src={events.data[0].flyer} /> : <h3>flyer</h3>} */}
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
