import "./UpdateHistory.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllHistory } from "../../../../../../store/history";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateHistory = () => {
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
    <div className="update-history-container">
      <h1>Editar Historias</h1>
      <div className="grid">
        {histories === []
          ? histories.data?.map((history) => (
              <div>
                <Link to={`/admin/ourclub/history/updatehistory/${history.id}`}>
                  <img src={history.image} alt={history.id} />
                </Link>
              </div>
            ))
          : <h1>No hay nada para editar</h1>}
      </div>
    </div>
  );
};

export default UpdateHistory;