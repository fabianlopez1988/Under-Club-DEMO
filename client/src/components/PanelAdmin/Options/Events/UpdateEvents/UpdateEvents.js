import "./UpdateEvents.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvent } from "../../../../../store/events";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEvents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllEvent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const events = useSelector((state) => state.events);

  return (
    <div className="update-event-container">
      <h1>Editar Evento</h1>
      <div className="grid">
        {events?.data?.map((event) => (
              <div>
                <Link to={`/admin/events/updateevents/${event.id}`}>
                  <img src={event.flyerGrid} alt={event.id} /> 
                </Link>
                <div className="date">{event.date.split("T")[0]}</div>
              </div>

            ))}
      </div>
    </div>
  );
};

export default UpdateEvents;
