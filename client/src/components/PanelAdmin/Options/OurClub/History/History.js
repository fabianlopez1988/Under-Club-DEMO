import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./History.css";

const History = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="history-options-container">
      <h1>Configuraciones</h1>
      <ul>
        <Link className="links-options" to="/admin/ourclub/history/addhistory">
          <button>Crear una Historia</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub/history/updatehistory">
          <button>Editar una Historia</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub/history/deletehistory">
          <button>Borrar una Historia</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub">
          <button style={{ marginTop: "15%" }}>Volver Atrás</button>
        </Link>
      </ul>
    </div>
  );
};

export default History;
