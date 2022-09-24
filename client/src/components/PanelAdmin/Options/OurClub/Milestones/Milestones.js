import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Milestones.css";

const Milestones = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="milestones-container">
      <h1>Configuraciones</h1>
      <ul>
        <Link className="links-options" to="/admin/ourclub/history">
          <button>Crear un Hito</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub/culture">
          <button>Editar un Hito</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub/milestones">
          <button>Borrar un Hito</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub">
          <button style={{ marginTop: "15%" }}>Volver Atrás</button>
        </Link>
      </ul>
    </div>
  );
};

export default Milestones;
