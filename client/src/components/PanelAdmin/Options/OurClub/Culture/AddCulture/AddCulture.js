import "./AddCulture.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import useInput from "../../../../../../utils/useInput";
import { addCulture } from "../../../../../../store/culture";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCulture = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const paragraph = useInput();
  const title = useInput();


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
      addCulture({
        image: blob ? blob : errorAlert(),
        title: title.value.length === 0 ? errorAlert() : title.value, 
        paragraph: paragraph.value.length === 0 ? errorAlert() : paragraph.value,
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
      .then(() => navigate("/admin/ourclub/culture"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add-culture-container">
        <Form onSubmit={handleSubmit}>
          <h1>Cultura</h1>
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
            <Form.Label>Título</Form.Label>
            <br></br>
            <input
              placeholder="Escriba un título"
              {...title}
            ></input>
          </Form.Group> 


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cultura</Form.Label>
            <br></br>
            <textarea
              placeholder="Narre la Cultura..."
              {...paragraph}
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

export default AddCulture;
