import "./AddEpisode.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import useInput from "../../../../../../utils/useInput";
import { addEpisode } from "../../../../../../store/episodes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { storage } from "../../../../../../firebase/config"
import { ref, uploadBytes } from "firebase/storage"
import  { v4 }  from "uuid";

const AddEpisode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const intro = useInput();
  const url = useInput();


  const [baseImage, setBaseImage] = useState("");
  const [imageList, setImageList] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const uploadImage = (e) => {
  //   const file = e.target.files[0];
  //   const blob = URL.createObjectURL(file);
  //   setBaseImage(blob);
  // };

  const uploadFirebaseImage = () => {
    if(baseImage == null) return;
    const imageRef = ref(storage, `episodes/${baseImage.name + v4()}`);
    uploadBytes(imageRef, baseImage)
  }

  const errorAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes completar todos los campos!",
    });
  };

  const handleClick = (blob) => {
    uploadFirebaseImage();
    dispatch(
      addEpisode({
        // flyer: blob ? blob : errorAlert(),
        intro: intro.value.length === 0 ? errorAlert() : intro.value,
        url: url.value.length === 0 ? errorAlert() : url.value, 
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
      .then(() => navigate("/admin/ourclub/episodes"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="add-episode-container">
        <Form onSubmit={handleSubmit}>
          <h1>Episodios</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Flyer</Form.Label>
            <br></br>
            <input
              type="file"
              // onChange={(e) => {
              //   uploadImage(e);
              // }}
              onChange={(e)=> setBaseImage(e.target.files[0])}
            ></input>
            {/* <img height={"200px"} src={baseImage} alt="" /> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>url</Form.Label>
            <br></br>
            <input
              placeholder="Ingrese la URL del episodio"
              {...url}
            ></input>
          </Form.Group> 


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Intro</Form.Label>
            <br></br>
            <textarea
              placeholder="Escriba una breve introducción del episodio..."
              {...intro}
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

export default AddEpisode;
