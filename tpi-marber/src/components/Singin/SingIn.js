import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { APIContext } from "../context/Api/api.context";
import Loader from "../ui/Loader";

const SingIn = ({ setLogStatusHandle }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [customers, setCustomers] = useState([]);

  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const { toggleLoading } = useContext(APIContext);
  const { isLoading } = useContext(APIContext);
  const userRegisteredLocal = useContext(RegisteredUserContext);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => console.log(error));
  }, []);

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

  const url = "https://localhost:7160/marber/ClientController/GetCustomers";
  const singInHandle = (event) => {
    event.preventDefault();
    if (user.length === 0 || password.length === 0) {
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
        console.log(userRegisteredLocal.registeredUser);
        userRegisteredLocal.setRegisteredUser({
          success: true,
          user: client.userBd,
          role: client.roleBd,
        });
        console.log(userRegisteredLocal.registeredUser);

        existUser = true;
        toggleLoading(true);

        setTimeout(() => {
          goToPage();
          toggleLoading(false);
        }, "3000");
      }
    });
    if (!existUser) {
      setTimeout(() => {
        userRef.current.value = "";
        passwordRef.current.value = "";
        alert("NO SE ENCUENTRA REGISTRADO");
      }, "1000");
    }

    // ACA NOSE PORQUE HAY QUE INICIAR DOS VECES PARA QUE ME TOME BIEN EL ESTADO
    //console.log(context.registeredUser);
  };

  const goToPage = () => {
    if (
      existUser === true &&
      userRegisteredLocal.registeredUser.role !== "client"
    ) {
      console.log(userRegisteredLocal.registeredUser);
      navigation("/beersadmin");
    } else {
      console.log(userRegisteredLocal.registeredUser);
      navigation("/beers");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card d-flex justify-content-center m-5 p-1 w-25 shadow p-3 mb-5 bg-body rounded">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={changeUserHandle}
              ref={userRef}
            />
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={changePasswordHandle}
              ref={passwordRef}
            />
          </div>
          {/* {userRegisteredLocal.registeredUser.success !== true && <p>El usuario o la contraseña son incorrectos</p>} */}
          <div className="d-flex justify-content-around">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={singInHandle}
            >
              Iniciar sesion
            </button>
            <button
              type="submit"
              className="btn btn-info"
              onClick={goToLoginHandler}
            >
              Ir a registrarme
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        {isLoading === true && <Loader />}
      </div>
    </div>
  );
};

export default SingIn;
