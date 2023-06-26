import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";
import "./Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLogStatusHandle }) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");

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

  const urlPost = "https://localhost:7160/marber/ClientController/AddClient";

  const loginHandle = (event) => {
    event.preventDefault();
    if (user.length === 0 || password.length === 0 || email.length === 0) {
      if (email.length === 0) {
        emalRef.current.focus();
        emalRef.current.style.borderColor = "red";
        emalRef.current.style.outline = "none";
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
    <div class="container">
      <form class="form">
        <div class="form_back">
          <div class="form_details">Registrarse</div>
          <input
            type="text"
            class="input"
            placeholder="Nombre"
            onChange={changeUserHandle}
            ref={userRef}
          />
          <input
            type="text"
            class="input"
            placeholder="Email"
            onChange={changeEmailHandle}
            ref={emalRef}
          />
          <input
            type="text"
            class="input"
            placeholder="Contraseña"
            onChange={changePasswordHandle}
            ref={passwordRef}
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
          <button class="button" onClick={loginHandle}>
            Registrarse
          </button>
          <span class="quest">
            Tienes ya una Cuenta?
            <label
              for="signup_toggle"
              class="signup_tog"
              onClick={goToSingInHandle}
            >
              Iniciar Sesion
            </label>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
