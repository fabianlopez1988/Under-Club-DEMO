import "./UpdateMilestones.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMilestones } from "../../../../../../store/milestones";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMilestones = () => {
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
    <div className="update-milestones-container">
      <h1>Editar Hitos</h1>
      <div className="grid">
        {milestones.data?.map((milestone) => (
              <div>
                <Link to={`/admin/ourclub/milestones/updatemilestones/${milestone.id}`}>
                  <img src={milestone.image} alt={milestone.id} />
                </Link>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default UpdateMilestones;
