import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllCulture,
  getCulture,
  updateCulture,
} from "../../../../../../store/culture";
import "./EditViewCulture.css";
import Form from "react-bootstrap/Form";
import useInput from "../../../../../../utils/useInput";
import Swal from "sweetalert2";

const EditViewCulture = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = useInput();
  const paragraph = useInput();

  const [baseImage, setBaseImage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getCulture(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cultureRedux = useSelector((state) => state.culture);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);
    setBaseImage(blob);
  };

  const handleClick = (blob) => {
    dispatch(
      updateCulture({
        image: blob === "" ? cultureRedux.image : blob,
        title:
          title.value.length === 0 ? cultureRedux.title : title.value,
        paragraph:
          paragraph.value.length === 0 ? cultureRedux.paragraph : paragraph.value,
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
      .then(() => dispatch(getAllCulture()))
      .then(() => navigate("/admin/ourclub/culture"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-container">
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
          {!baseImage ? (
            <img
              height={"200px"}
              src={cultureRedux.image}
              alt={cultureRedux.id}
            />
          ) : null}
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Título</Form.Label>
          <br></br>
          <input placeholder={cultureRedux.title} {...title}></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Historia</Form.Label>
          <br></br>
          <textarea placeholder={cultureRedux.paragraph} {...paragraph}></textarea>
        </Form.Group>
        <button type="submit" onClick={() => handleClick(baseImage)}>
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditViewCulture;