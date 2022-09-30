import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllMilestones,
  getMilestone,
  updateMilestones,
} from "../../../../../../store/milestones";
import "./EditViewMilestone.css";
import Form from "react-bootstrap/Form";
import useInput from "../../../../../../utils/useInput";
import Swal from "sweetalert2";

const EditViewMilestone = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const description = useInput();

  const [baseImage, setBaseImage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getMilestone(id));
    // eslint-disable-next-lMilupdateMilestonesct-hooks/exhaustive-deps
  }, []);

  const milestonesRedux = useSelector((state) => state.milestones);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);
    setBaseImage(blob);
  };

  const handleClick = (blob) => {
    dispatch(
      updateMilestones({
        image: blob === "" ? milestonesRedux.image : blob,
        description:
          description.value.length === 0 ? milestonesRedux.description : description.value,
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
      .then(() => dispatch(getAllMilestones()))
      .then(() => navigate("/admin/ourclub/milestones"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-container">
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
          {!baseImage ? (
            <img
              height={"200px"}
              src={milestonesRedux.image}
              alt={milestonesRedux.id}
            />
          ) : null}
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descripción</Form.Label>
          <br></br>
          <textarea placeholder={milestonesRedux.description} {...description}></textarea>
        </Form.Group>
        <button type="submit" onClick={() => handleClick(baseImage)}>
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditViewMilestone;
