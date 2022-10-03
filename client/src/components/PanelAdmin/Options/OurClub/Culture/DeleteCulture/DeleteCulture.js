import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCulture } from "../../../../../../store/culture";
import DeleteCultureCard from "./DeleteCultureCard";
import "./DeleteCulture.css";

const DeleteCulture = () => {
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
    <div className="delete-container">
      <h1>Borrar Cultura</h1>
      <div className="grid">
        {cultures?.data.map((culture) => (
          <DeleteCultureCard key={culture.id} culture={culture} />
        ))}
      </div>
    </div>
  );
};

export default DeleteCulture;
