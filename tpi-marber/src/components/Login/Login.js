import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";
import "./Login.css";

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
    //     <div>
    //       <div className="card d-flex justify-content-center w-75 p-2 m-5">
    //         <div className="card d-flex justify-content-center">
    //           <form>
    //             <div className="mb-3">
    //               <label for="exampleInputEmail1" className="form-label">
    //                 Email
    //               </label>
    //               <input
    //                 type="email"
    //                 className="form-control"
    //                 aria-describedby="emailHelp"
    //                 onChange={changeEmailHandle}
    //                 ref={emalRef}
    //               />
    //               {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    //             </div>
    //             <div className="mb-3">
    //               <label for="exampleInputEmail1" className="form-label">
    //                 Usuario
    //               </label>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 aria-describedby="emailHelp"
    //                 onChange={changeUserHandle}
    //                 ref={userRef}
    //               />
    //               {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    //             </div>
    //             <div className="mb-3">
    //               <label for="exampleInputPassword1" className="form-label">
    //                 Contraseña
    //               </label>
    //               <input
    //                 type="password"
    //                 className="form-control"
    //                 id="exampleInputPassword1"
    //                 onChange={changePasswordHandle}
    //                 ref={passwordRef}
    //               />
    //             </div>
    // {registeredUser.role === "superadmin" && (
    //   <div className="mb-3">
    //     <label className="selec-label">Tipo de usuario</label>
    //     <select
    //       name="selec-label"
    //       id="selec-label"
    //       onChange={changeRoleHandle}
    //     >
    //       <option value="client">Cliente</option>
    //       <option value="admin">Administrador</option>
    //       <option value="superadmin">Super administrador</option>
    //     </select>
    //   </div>
    // )}
    //             <button
    //               type="submit"
    //               className="btn btn-primary"
    //               onClick={loginHandle}
    //             >
    //               Registrarse
    //             </button>
    //             <button
    //               type="submit"
    //               className="btn btn-info"
    //               onClick={goToSingInHandle}
    //             >
    //               Volver al inicio de sesion
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    // </div>

    <div class="container">
      <input id="signup_toggle" type="checkbox" />
      <form class="form">
        <div class="form_front">
          <div class="form_details">Iniciar Sesion</div>
          <input type="text" class="input" placeholder="Username" />
          <input type="text" class="input" placeholder="Password" />
          <button class="button">Login</button>
          <span class="switch">
            No tienes una cuenta?
            <label for="signup_toggle" class="signup_tog">
              Registrarse
            </label>
          </span>
        </div>

        {/* Register */}

        <div class="form_back">
          <div class="form_details">Registrarse</div>
          <input type="text" class="input" placeholder="Nombre" />
          <input
            onChange={changeUserHandle}
            type="text"
            class="input"
            aria-describedby="emailHelp"
            placeholder="Email"
            ref={emalRef}
          />
          <input
            onClick={goToSingInHandle}
            type="text"
            class="input"
            onChange={changePasswordHandle}
            ref={passwordRef}
            placeholder="Password"
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
          <button class="button">Iniciar Sesion</button>
          <span class="switch">
            Tienes ya una Cuenta?
            <label for="signup_toggle" class="signup_tog">
              Sign In
            </label>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
