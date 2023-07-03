import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import SideCart from "../SideCart/SideCart";
import "./NavBar.css";
import ToggleTheme from "../ui/ToggleTheme";
import { ThemeContext } from "../context/Theme/Theme";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";

const NavBar = () => {
  const [sideCart, setSideCart] = useState(false);

  const { cart, clearCart } = useContext(CartContext);
  const { theme, clearPreference } = useContext(ThemeContext);
  const { registeredUser, removeRegisteredUser } = useContext(
    RegisteredUserContext
  );
  const { customers } = useContext(CustomersContext);

  const navigation = useNavigate();

  const quantity = cart.length;

  const goToBeersHandler = () => {
    if (registeredUser.role !== "client") {
      navigation("/beersadmin");
    } else {
      navigation("/beers");
    }
  };

  const goToAboutUsHandler = () => {
    navigation("/aboutus");
  };

  const goToLoginHandler = () => {
    navigation("/login");
  };

  const goToHomeHandler = () => {
    navigation("/");
  };

  const goToOrdersHandler = () => {
    navigation("/orders");
  };

  const goToUsers = () => {
    navigation("/users");
  };

  const logOutHandle = () => {
    removeRegisteredUser();
    clearCart();
    clearPreference();
    navigation("/login");
  };

  const goToAllBuys = () => {
    navigation("/orders");
  };

  const sideCartHandler = () => {
    setSideCart(!sideCart);
  };

  const goToProfileHandler = () => {
    navigation("/profile");
  };

  return (
    <div className="nav-main">
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${
          theme === "dark" && "navbar navbar-expand-lg bg-body-tertiary-dark "
        }`}
      >
        <div
          className={`container-fluid ${
            theme === "dark" && "container-fluid-dark"
          }`}
        >
          <button
            className="navbar-brand"
            href="#"
            onClick={goToHomeHandler}
            style={{ border: "none", background: "none" }}
          >
            <img
              src={require("./logonav.png")}
              height="30px"
              width="80px"
              alt="logo"
            ></img>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  id="btn"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={goToAboutUsHandler}
                >
                  Sobre nosotros
                </button>
              </li>

              <li className="nav-item dropdown">
                <button
                  id="btn"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={goToBeersHandler}
                >
                  Productos
                </button>
              </li>

              <li className="nav-item dropdown">
                {registeredUser.success === true &&
                  registeredUser.role === "client" && (
                    <button
                      id="btn"
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      onClick={goToAllBuys}
                    >
                      Mis compras
                    </button>
                  )}
              </li>

              <li className="nav-item dropdown">
                {registeredUser.success === true &&
                  registeredUser.role !== "client" && (
                    <button
                      id="btn"
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      onClick={goToOrdersHandler}
                    >
                      Ventas
                    </button>
                  )}
              </li>
              <li className="nav-item dropdown">
                {registeredUser.success === true &&
                  registeredUser.role === "superadmin" && (
                    <button
                      id="btn"
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      onClick={goToUsers}
                    >
                      Usuarios
                    </button>
                  )}
              </li>
            </ul>
            {registeredUser.success === true && (
              <span
                onClick={goToProfileHandler}
                className="navbar-text"
                style={{ "margin-right": "10px" }}
              >
                ¡Bienvenido{" "}
                {customers
                  .filter((user) => user.id === registeredUser.id)
                  .map((user, index) => (
                    <strong key={index}>{user.userBd}</strong>
                  ))}
                !
              </span>
            )}
            <div className="d-flex" role="search">
              {sideCart && <SideCart onClose={sideCartHandler} />}

              <div className="cart-and-count">
                <button
                  className="cart-icon btn"
                  type="submit"
                  onClick={sideCartHandler}
                >
                  <b className="cart-count">{quantity}</b>{" "}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
                    className="cart-icon-pic"
                    alt="..."
                    width="15px"
                    height="15px"
                  />
                </button>
              </div>

              {registeredUser.success === false && (
                <button
                  id="button-log-id"
                  className="log-button btn btn-outline-success"
                  type="submit"
                  onClick={goToLoginHandler}
                >
                  Iniciar sesión
                </button>
              )}
              {registeredUser.success === true && (
                <button
                  id="button-log-id"
                  className="log-button btn btn-outline-success"
                  type="submit"
                  onClick={logOutHandle}
                >
                  Cerrar sesión
                </button>
              )}
              {<ToggleTheme />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
