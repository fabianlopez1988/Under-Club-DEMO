import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllHistory,
  getHistory,
  updateHistory,
} from "../../../../../../store/history";
import "./EditViewHistory.css";
import Form from "react-bootstrap/Form";
import useInput from "../../../../../../utils/useInput";

const EditViewHistory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const history = useInput();

  const [baseImage, setBaseImage] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getHistory(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const historyRedux = useSelector((state) => state.history);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const blob = URL.createObjectURL(file);
    setBaseImage(blob);
  };

  const handleClick = (blob) => {
    dispatch(
      updateHistory({
        image: blob === null ? historyRedux.image : blob,
        history: history.value === null ? historyRedux.history: history.value,         

      })
    )
      .then(() => dispatch(getAllHistory()))
      .then(() => navigate("/admin/ourclub/history"));
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
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Historia</Form.Label>
          <br></br>
          <textarea placeholder="Narre la Historia..." {...history}></textarea>
        </Form.Group>
        <button type="submit" onClick={() => handleClick(baseImage)}>
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditViewHistory;
