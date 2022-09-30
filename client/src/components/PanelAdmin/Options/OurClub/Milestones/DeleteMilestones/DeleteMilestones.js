import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllMilestones } from "../../../../../../store/milestones";
import DeleteCardMilestones from "./DeleteCardMilestones";
import "./DeleteMilestones.css";

const DeleteMilestones = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllMilestones());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const milestones = useSelector((state) => state.milestones);

  return (
    <div className="delete-container">
      <h1>Borrar Hitos</h1>
      <div className="grid">
        {milestones?.data.map((milestone) => (
              <DeleteCardMilestones key={milestone.id} milestone={milestone} />
            ))
          }
      </div>
    </div>
  );
};

export default DeleteMilestones;
