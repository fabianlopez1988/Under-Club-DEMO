import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteHistory, getAllHistory } from "../../../../../../store/history";
import "./DeleteCard.css";
import Swal from "sweetalert2";

const DeleteCard = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteHistory(id))
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllHistory()));
  };

  return (
    <div className="card-container">
      <img src={history.image} alt={history.id} />
      <button onClick={() => handleDelete(history.id)}>Borrar</button>
    </div>
  );
};

export default DeleteCard;
