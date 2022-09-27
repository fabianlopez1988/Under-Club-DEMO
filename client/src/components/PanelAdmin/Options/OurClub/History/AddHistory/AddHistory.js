import "./AddHistory.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import useInput from "../../../../../../utils/useInput";
import { addHistory } from "../../../../../../store/history";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const history = useInput();

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
      addHistory({
        image: blob ? blob : errorAlert(),
        history: history.value.length === 0 ? errorAlert() : history.value,
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
      .then(() => navigate("/admin/ourclub/history"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add-history-container">
        <Form onSubmit={handleSubmit}>
          <h1>Historia</h1>
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
            <Form.Label>Historia</Form.Label>
            <br></br>
            <textarea
              placeholder="Narre la Historia..."
              {...history}
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

export default AddHistory;
