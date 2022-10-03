import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllIntroCulture,
  updateIntroCulture,
} from "../../../../../../store/introCulture";
import "./EditViewIntroCulture.css";
import Form from "react-bootstrap/Form";
import useInput from "../../../../../../utils/useInput";
import Swal from "sweetalert2";

const EditViewIntroCulture = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paragraph = useInput();
  console.log(paragraph); 

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllIntroCulture());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar todos los campos!",
    });
  };

  const okAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Actualizado",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const handleClick = () => {
    dispatch(
      updateIntroCulture({
        paragraph: paragraph.value === null ? errorAlert() : paragraph.value,
      })
    )
    .then(() => okAlert())
    .then(() => navigate("/admin/ourclub/introculture"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-intro-container">
      <Form onSubmit={handleSubmit}>
        <h1>Intro Cultura</h1>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <br></br>
          <textarea placeholder="ESCRIBA ACÁ" {...paragraph}></textarea>
        </Form.Group>
        <button type="submit" onClick={() => handleClick()}>
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditViewIntroCulture;
