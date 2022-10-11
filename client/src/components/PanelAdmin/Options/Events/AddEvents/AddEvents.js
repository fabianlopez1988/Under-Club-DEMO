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

  const [baseImageLarge, setBaseImageLarge] = useState("");

  const [baseImageGrid, setBaseImageGrid] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadImageLarge = (e) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);
    setBaseImageLarge(blob);
  };

  const uploadImageGrid = (e) => {
    const file2 = e.target.files[0];
    const blob2 = URL.createObjectURL(file2);
    setBaseImageGrid(blob2);
  };

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar todos los campos!",
    });
  };

  const handleClick = (blob, blob2) => {
    dispatch(
      addEvent({
        flyerLarge: blob ? blob : errorAlert(),
        flyerGrid: blob2 ? blob2 : errorAlert(),
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
            <Form.Label>Flyer Portada</Form.Label>
            <br></br>
            <input
              type="file"
              onChange={(e) => {
                uploadImageLarge(e);
              }}
            ></input>
            <img height={"200px"} src={baseImageLarge} alt="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Flyer Grilla (Cuadrado)</Form.Label>
            <br></br>
            <input
              type="file"
              onChange={(e) => {
                uploadImageGrid(e);
              }}
            ></input>
            <img height={"200px"} src={baseImageGrid} alt="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha del evento</Form.Label>
            <br></br>
            <input
              type="date"
              placeholder="Ingrese la fecha del evento"
              {...date}
            ></input>
          </Form.Group>

          <button
            className="submit"
            type="submit"
            onClick={() => handleClick(baseImageLarge, baseImageGrid)}
          >
            Guardar
          </button>
        </Form>
      </div>
    </>
  );
};

export default AddEvents;
