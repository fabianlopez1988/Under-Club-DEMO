import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CultureAdmin.css";

const CultureAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="culture-options-container">
      <h1>Configuraciones</h1>
      <ul>
        {/* <Link className="links-options" to="/admin/ourclub/culture/addculture">
          <button>Crear Cultura</button>
        </Link> */}

        <Link className="links-options" to="/admin/ourclub/culture/updateculture">
          <button>Editar Cultura</button>
        </Link>

        {/* <Link className="links-options" to="/admin/ourclub/culture/deleteculture">
          <button>Borrar Cultura</button>
        </Link> */}

        <Link className="links-options" to="/admin/ourclub">
          <button style={{ marginTop: "15%" }}>Volver Atrás</button>
        </Link>
      </ul>
    </div>
  );
};

export default CultureAdmin;
