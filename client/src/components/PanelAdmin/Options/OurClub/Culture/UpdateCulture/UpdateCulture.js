import "./UpdateCulture.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCulture } from "../../../../../../store/culture";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCulture = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllCulture());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const cultures = useSelector((state) => state.culture);

  return (
    <div className="update-culture-container">
      <h1>Editar Historias</h1>
      <div className="grid">
        {cultures?.data?.map((culture) => (
              <div>
                <Link to={`/admin/ourclub/culture/updateculture/${culture.id}`}>
                  <img src={culture.image} alt={culture.id} /> 
                </Link>
                  <div className="title">
                  <h4>{culture.title}</h4>
                  </div>
              </div>
              
            ))}
      </div>
    </div>
  );
};

export default UpdateCulture;
