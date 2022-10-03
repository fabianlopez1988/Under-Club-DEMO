import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCulture, getAllCulture } from "../../../../../../store/culture";
import "./DeleteCultureCard.css";
import Swal from "sweetalert2";

const DeleteCultureCard = ({ culture }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteCulture(id))
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllCulture()));
  };

  return (
    <div className="card-container">
      <img src={culture.image} alt={culture.id} />
      <button onClick={() => handleDelete(culture.id)}>Borrar</button>
    </div>
  );
};

export default DeleteCultureCard;