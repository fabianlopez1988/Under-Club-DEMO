import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllHistory } from "../../../../../../store/history";
import DeleteCard from "./DeleteCard";
import "./DeleteHistory.css";

const DeleteHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllHistory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const histories = useSelector((state) => state.history);

  return (
    <div className="delete-container">
      <h1>Borrar Historia</h1>
      <div className="grid">
        {histories?.data.map((history) => (
              <DeleteCard key={history.id} history={history} />
            ))

          }
      </div>
    </div>
  );
};

export default DeleteHistory;
