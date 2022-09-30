import "./AddMilestones.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import useInput from "../../../../../../utils/useInput";
import { addMilestones } from "../../../../../../store/milestones";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddMilestones = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const description = useInput();

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
      addMilestones({
        image: blob ? blob : errorAlert(),
        description: description.value.length === 0 ? errorAlert() : description.value,
      })
    )
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Creado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => navigate("/admin/ourclub/milestones"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add-milestones-container">
        <Form onSubmit={handleSubmit}>
          <h1>Hitos</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Imagen</Form.Label>
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
            <Form.Label>Descripción</Form.Label>
            <br></br>
            <textarea
              placeholder="Descripción aquí..."
              {...description}
            ></textarea>
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

export default AddMilestones;
