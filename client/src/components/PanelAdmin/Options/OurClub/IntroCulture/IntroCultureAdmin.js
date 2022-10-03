import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./IntroCultureAdmin.css";

const IntroCultureAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="intro-culture-options-container">
      <h1>Configuraciones</h1>
      <ul>
        {/* <Link className="links-options" to="/admin/ourclub/introculture/addintroculture">
          <button>Crear Intro Cultura</button>
        </Link> */}

        <Link className="links-options" to="/admin/ourclub/introculture/editviewintroculture">
          <button>Editar Intro Cultura</button>
        </Link>

        <Link className="links-options" to="/admin/ourclub">
          <button style={{ marginTop: "15%" }}>Volver Atrás</button>
        </Link>
      </ul>
    </div>
  );
};

export default IntroCultureAdmin;