import { Link } from "react-router-dom";
import "./PanelAdmin.css";

const PanelAdmin = () => {
  return (
    <div className="panel-container">
      <h1>Configuraciones</h1>
      <ul>
        <Link className="links-options" to="/admin/ourclub">
          <button>Nuestro Club</button>
        </Link>

        <Link className="links-options" to="/admin/events">
          <button>Eventos</button>
        </Link>

        <Link className="links-options" to="/admin/initialvideo">
          <button>Video Inicial</button>
        </Link>

        <Link className="links-options" to="/admin/users">
          <button>Users</button>
        </Link>

        <Link className="links-options" to="/">
          <button style={{marginTop: "15%"}} >Página Principal</button>
        </Link>

      </ul>
    </div>
  );
};

export default PanelAdmin;
