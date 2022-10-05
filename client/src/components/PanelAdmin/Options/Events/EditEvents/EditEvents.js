import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllEvent,
  getEvent,
  updateEvent,
} from "../../../../../store/events";
import "./EditEvents.css";
import Form from "react-bootstrap/Form";
import useInput from "../../../../../utils/useInput";
import Swal from "sweetalert2";

const EditEvents = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const date = useInput();
  console.log(date, "SOY DATE");

  const [baseImage, setBaseImage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getEvent(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventsRedux = useSelector((state) => state.events);
  console.log(eventsRedux, "EVENTS REDUX");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);
    setBaseImage(blob);
  };

  const handleClick = (blob) => {
    dispatch(
      updateEvent({
        flyer: blob === "" ? eventsRedux.flyer : blob,
        date: date.value.length === 0 ? eventsRedux.date : date.value,
      })
    )
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Actualizado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllEvent()))
      .then(() => navigate("/admin/events"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-container">
      <Form onSubmit={handleSubmit}>
        <h1>Eventos</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Flyer</Form.Label>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          ></input>
          {!baseImage ? (
            <img
              height={"200px"}
              src={eventsRedux.flyer}
              alt={eventsRedux.id}
            />
          ) : null}
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>date</Form.Label>
          <br></br>
          <input type="date" placeholder={eventsRedux.date} 
          {...date}></input>
        </Form.Group>

        <button type="submit" onClick={() => handleClick(baseImage)}>
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditEvents;
