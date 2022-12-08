import "./AddResidents.css";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../../../../../../utils/useInput";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { addResidents } from "../../../../../../store/residents";

import { storage } from "../../../../../../firebase/config"
import { ref, uploadBytes } from "firebase/storage"
import  { v4 }  from "uuid";

function AddResidents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useInput();
  const biography = useInput()
  const soundcloud = useInput()
  const instagram = useInput()
  const residentAdvisor = useInput()
  const pressKit = useInput()
  const trackSoundcloud = useInput()

  const [baseImage, setBaseImage] = useState("");
  const [fileImage, setFileImage] = useState(null);


  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const uploadImage = (e) => {
  //   const file = e.target.files[0];
  //   const blob = URL.createObjectURL(file);
  //   setBaseImage(file);
  // };

  // const uploadFirebase = async () => {
  //   try{
  //     const result = await uploadFile(fileImage);
  //     console.log(result);
  //   }catch(err){
  //     console.error(err);
  //   }
  // }

  const uploadFirebaseImage = () => {
    console.log(fileImage, "aca")
    if(fileImage == null) return;
    const imageRef = ref(storage, `artists/${fileImage.name + v4()}`);
    uploadBytes(imageRef, fileImage)
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
      addResidents({
        name: name.value.length === 0 ? errorAlert() : name.value,
        // photo: blob ? blob : errorAlert(),
        biography: biography.value.length === 0 ? errorAlert() : biography.value,
        instagram: instagram.value.length === 0 ? errorAlert() : instagram.value,
        soundcloud: soundcloud.value.length === 0 ? errorAlert() : soundcloud.value,
        residentAdvisor: residentAdvisor.value.length === 0 ? errorAlert : residentAdvisor.value,
        pressKit: pressKit.value.length === 0 ? errorAlert() : pressKit.value,
        trackSoundcloud: trackSoundcloud.value.length === 0 ? errorAlert() : trackSoundcloud.value
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
      .then(() => navigate("/admin/ourclub/residents"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <div className="add-residents-container">
        <Form onSubmit={handleSubmit}>
          <h1>Residentes</h1>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre</Form.Label>
            <br></br>
            <input
              placeholder="Nombre del residente"
              {...name}
            />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Foto</Form.Label>
            <br></br>
            <input
              type="file"
              // onChange={(e) => {
              //   uploadImage(e);
              // }}
              onChange={(e)=> setFileImage(e.target.files[0])}
            ></input>
            <img height={"200px"} src={fileImage} alt="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Biografía</Form.Label>
            <br></br>
            <textarea
              placeholder="Narre la Biografía..."
              {...biography}
            ></textarea>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Instagram</Form.Label>
            <br></br>
            <input
              placeholder="https://. . ."
              {...instagram}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>SoundCloud</Form.Label>
            <br></br>
            <input
              placeholder="https://. . ."
              {...soundcloud}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Resident Advisor</Form.Label>
            <br></br>
            <input
              placeholder="https://. . ."
              {...residentAdvisor}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Press Kit</Form.Label>
            <br></br>
            <input
              placeholder="https://. . ."
              {...pressKit}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Soundcloud Track</Form.Label>
            <br></br>
            <input
              placeholder="https://. . ."
              {...trackSoundcloud}
            />
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
}

export default AddResidents;
