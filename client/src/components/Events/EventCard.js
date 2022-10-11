import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./EventCard.css";
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
import { getAllEvent } from "../../store/events";

const EventCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    <SpinnerComponent />;
  }

  useEffect(() => {
    dispatch(getAllEvent()).then(() => setIsLoading(false));
  }, []);

  const events = useSelector((state) => state.events);

  return (
    <div className="flyers-grid">
      {events ? (
        events.data.slice(1).map((event) => (
          <div className="event-grid">
            <img src={event.flyerGrid} alt="flyer" />
            <a
              href="https://tickets.underclub.com.ar/productora/eventos/13"
              target="_blank"
              rel="noreferrer"
            >
              <button id="tickets-button">Tickets</button>
            </a>
          </div>
        ))
      ) : (
        <h3>Flyer</h3>
      )}
    </div>
  );
};

export default EventCard;
