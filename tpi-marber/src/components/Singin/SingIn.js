import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { APIContext } from "../context/Api/api.context";
import Loader from "../ui/Loader";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";
import { toast } from "react-toastify";
import { ThemeContext } from "../context/Theme/Theme";

const SingIn = ({ setLogStatusHandle }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const { toggleLoading } = useContext(APIContext);
  const { isLoading } = useContext(APIContext);
  const { registeredUser, setRegisteredUserHandle } = useContext(
    RegisteredUserContext
  );
  const { customers } = useContext(CustomersContext);
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigate();

  const changeUserHandle = (event) => {
    setUser(event.target.value);
  };

  const changePasswordHandle = (event) => {
    setPassword(event.target.value);
  };

  const goToLoginHandler = (event) => {
    event.preventDefault();
    setLogStatusHandle(false);
    navigation("/login");
  };

  var existUser;

  const singInHandle = (event) => {
    event.preventDefault();
    if (user.length === 0 || password.length === 0) {
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

    customers.map((client) => {
      if (client.userBd === user && client.passwordBd === password) {
        localStorage.setItem(
          "registeredUser",
          JSON.stringify({
            success: true,
            id: client.id,
            user: client.userBd,
            role: client.roleBd,
          })
        );
        setRegisteredUserHandle({
          success: true,
          id: client.id,
          user: client.userBd,
          role: client.roleBd,
        });

        existUser = true;
        toggleLoading(true);

        goToPage();
        toggleLoading(false);
      }
    });
    if (!existUser) {
      setTimeout(() => {
        userRef.current.value = "";
        passwordRef.current.value = "";
        toast.error("No se encuentra registrado", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }, "1000");
    }
  };

  const goToPage = () => {
    if (existUser === true && registeredUser.role !== "client") {
      console.log(registeredUser);
      navigation("/beersadmin");
    } else {
      console.log(registeredUser);
      navigation("/beers");
    }
  };

  return (
    <div className="container-login">
      <form className="form">
        <div className={`form_back ${theme === "dark" && "form-back-dark"}`}>
          <div
            className={`form_details ${
              theme === "dark" && "form_details-dark"
            }`}
          >
            Iniciar sesion
          </div>
          <input
            type="text"
            className={`input ${theme === "dark" && "input-dark"}`}
            onChange={changeUserHandle}
            ref={userRef}
            placeholder="Nombre"
          />
          <input
            type="password"
            className={`input ${theme === "dark" && "input-dark"}`}
            onChange={changePasswordHandle}
            ref={passwordRef}
            placeholder="Contraseña"
          />

          <button
            className={`button ${theme === "dark" && "button-dark"}`}
            onClick={singInHandle}
          >
            Login
          </button>
          <span className={`quest ${theme === "dark" && "quest-dark"}`}>
            ¿No tienes una cuenta?
            <label
              for="signup_toggle"
              class="signup_tog"
              onClick={goToLoginHandler}
            >
              Registrate
            </label>
          </span>
        </div>
      </form>
      {isLoading === true && <Loader />}
    </div>
  );
};

export default SingIn;
