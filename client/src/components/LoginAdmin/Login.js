import "./Login.css";
import imgLogin from "../../assets/imgLogin.jpg";
import Form from "react-bootstrap/Form";
import imgVinilo from "../../assets/imgVinilo.png";
import useInput from "../../utils/useInput";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/user";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) navigate("/admin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({
        email: email.value,
        password: password.value,
      })
    )
      .then(() => {
        if (localStorage.getItem("user")) {
          navigate("/admin");
        } 
        else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <img
          className="rotate"
          src={imgVinilo}
          style={{ width: "80px", height: "80px" }}
          alt="vinilo"
        />
        <br></br>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <br></br>
            <input
              type="email"
              placeholder="Ingrese su email"
              {...email}
            ></input>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <br></br>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              {...password}
            ></input>
          </Form.Group>
          <button type="submit">Acceder</button>
        </Form>
      </div>

      <div className="img-container">
        <img src={imgLogin} alt="img-login" />
      </div>
    </div>
  );
};

export default Login;
