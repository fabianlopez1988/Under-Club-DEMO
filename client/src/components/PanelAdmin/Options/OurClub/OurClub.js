import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OurClub.css";

const OurClub = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ourclub-container">
      <h1>Configuraciones</h1>
      <ul>
        <Link className="links-options" to="/admin/ourclub/history">
          <button>Historia</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub/culture">
          <button>Cultura</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub/milestones">
          <button>Hitos</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub/residents">
          <button>Residentes</button>
        </Link>

        <Link className="links-options" to="/admin">
          <button style={{ marginTop: "15%" }}>Volver Atrás</button>
        </Link>
      </ul>
    </div>
  );
};

export default OurClub;
