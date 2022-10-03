import "./AddIntroCulture.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import useInput from "../../../../../../utils/useInput";
import { addIntroCulture } from "../../../../../../store/introCulture";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddIntroCulture = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paragraph = useInput();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar el campo!",
    });
  };

  const handleClick = () => {
    dispatch(
      addIntroCulture({
        paragraph: paragraph.value.length === 0 ? errorAlert() : paragraph.value,
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
      .then(() => navigate("/admin/ourclub/introculture"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add-intro-culture-container">
        <Form onSubmit={handleSubmit}>
          <h1>Intro Cultura</h1>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <br></br>
            <textarea
              placeholder="Escriba una Introducción..."
              {...paragraph}
            ></textarea>
          </Form.Group>
          <button
            className="submit"
            type="submit"
            onClick={() => handleClick()}
          >
            Guardar
          </button>
        </Form>
      </div>
    </>
  );
};

export default AddIntroCulture;
