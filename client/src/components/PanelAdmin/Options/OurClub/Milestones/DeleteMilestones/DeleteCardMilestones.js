import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMilestones, getAllMilestones } from "../../../../../../store/milestones";
import "./DeleteCardMilestones.css";
import Swal from "sweetalert2";

const DeleteCardMilestones = ({ milestone }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteMilestones(id))
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllMilestones()));
  };

  return (
    <div className="card-container">
      <img src={milestone.image} alt={milestone.id} />
      <button onClick={() => handleDelete(milestone.id)}>Borrar</button>
    </div>
  );
};

export default DeleteCardMilestones;