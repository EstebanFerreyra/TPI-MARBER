import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"

const Login = ({ setLogStatusHandle }) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [isValid, setIsValid] = useState(true);

  const emalRef = useRef(null);
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const navigation = useNavigate();

  const { registeredUser } = useContext(RegisteredUserContext);
  const { setCustomersHandle } = useContext(CustomersContext);

  const client = {
    emailBd: email,
    userBd: user,
    passwordBd: password,
    roleBd: role,
  };

  const changeEmailHandle = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
    setEmail(event.target.value);
  };

  const changeUserHandle = (event) => {
    setUser(event.target.value);
  };

  const changePasswordHandle = (event) => {
    setPassword(event.target.value);
  };

  const changeRoleHandle = (event) => {
    setRole(event.target.value);
  };

  const goToSingInHandle = () => {
    setLogStatusHandle(true);
    navigation("/singin");
  };

  const urlPost = "https://www.apimarber.somee.com/marber/ClientController/AddClient";

  const loginHandle = (event) => {
    event.preventDefault();
    if (user.length === 0 || password.length === 0 || email.length === 0 || isValid === false) {
      toast.error("Error Complete los campos marcados", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      if (isValid === false){
        emalRef.current.focus();
        toast.error("Debe ingresar un email valido", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      if (email.length === 0) {
        emalRef.current.focus();
        emalRef.current.style.borderColor = "red";
        emalRef.current.style.outline = "none";
      } else {
        emalRef.current.style.borderColor = "";
        emalRef.current.style.outline = "";
      }

      if (user.length === 0) {
        userRef.current.focus();
        userRef.current.style.borderColor = "red";
        userRef.current.style.outline = "none";
      } else {
        userRef.current.style.borderColor = "";
        userRef.current.style.outline = "";
      }

      if (password.length === 0) {
        passwordRef.current.focus();
        passwordRef.current.style.borderColor = "red";
        passwordRef.current.style.outline = "none";
      } else {
        passwordRef.current.style.borderColor = "";
        passwordRef.current.style.outline = "";
      }

      return;
    }

    userRef.current.style.borderColor = "";
    userRef.current.style.outline = "";
    passwordRef.current.style.borderColor = "";
    passwordRef.current.style.outline = "";
    emalRef.current.style.borderColor = "";
    emalRef.current.style.outline = "";

    fetch(urlPost, {
      method: "POST",
      mode: "cors",
      refer: "*",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    })
      .then((res) => res.json())
      .then((data) => {
        setCustomersHandle(data);
      })
      .catch((error) => console.log(error));

    setLogStatusHandle(true);
    emalRef.current.value = "";
    userRef.current.value = "";
    passwordRef.current.value = ";";
    navigation("/singin");
  };

  return (
    <div className="container">
      <form className="form">
        <div className="form_back">
          <div className="form_details">Registrarse</div>
          <input
            type="email"
            className="input"
            aria-describedby="emailHelp"
            onChange={changeEmailHandle}
            ref={emalRef}
            placeholder="Email"
          />
          <input
            type="text"
            className="input"
            aria-describedby="emailHelp"
            onChange={changeUserHandle}
            ref={userRef}
            placeholder="Nombre"
          />
          <input
            type="password"
            className="input"
            id="exampleInputPassword1"
            onChange={changePasswordHandle}
            ref={passwordRef}
            placeholder="Contraseña"
          />
          {registeredUser.role === "superadmin" && (
            <div className="mb-3">
              <label className="selec-label">Tipo de usuario</label>
              <select
                name="selec-label"
                id="selec-label"
                onChange={changeRoleHandle}
              >
                <option value="client">Cliente</option>
                <option value="admin">Administrador</option>
                <option value="superadmin">Super administrador</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="button"
            onClick={loginHandle}
          >
            Registrarse
          </button>
          <span className="quest">
            ¿Ya tienes cuenta?
            <label onClick={goToSingInHandle} for="signup_toggle" className="signup_tog">
              Iniciar sesion
            </label>
          </span>

        </div>
      </form>

    </div>
  );
};

export default Login;
