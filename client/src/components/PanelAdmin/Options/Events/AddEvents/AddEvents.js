import "./AddEvents.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import useInput from "../../../../../utils/useInput";
import { addEvent } from "../../../../../store/events";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddEvents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const date = useInput();

  const [baseImage, setBaseImage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);
    setBaseImage(blob);
  };

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar todos los campos!",
    });
  };

  const handleClick = (blob) => {
    dispatch(
      addEvent({
        flyer: blob ? blob : errorAlert(),
        date: date.value.length === 0 ? errorAlert() : date.value, 
        
      })
    )
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Creado",
          showConfirmButton: false,
          timer: 2500,
        })
      )
      .then(() => navigate("/admin/events"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add-events-container">
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
            <img height={"200px"} src={baseImage} alt="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha del evento</Form.Label>
            <br></br>
            <input type="date"
              placeholder="Ingrese la fecha del evento"
              {...date}
            ></input>
          </Form.Group> 


          <button
            className="submit"
            type="submit"
            onClick={() => handleClick(baseImage)}
          >
            Guardar
          </button>
        </Form>
      </div>
    </>
  );
};

export default AddEvents;
