import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import "./NavBar.css";
import { CartContext } from "../../contexts/ShoppingCartContext";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const { cart } = useContext(CartContext);

  const navigation = useNavigate();

  const goToHomeHandler = () => {
    navigation("/home");
  };

  const goToBeersHandler = () => {
    navigation("/beers");
  };

  const goToAboutUsHandler = () => {
    navigation("/aboutus");
  };

  const goToLoginHandler = () => {
    navigation("/login");
  };

  const goToCartHandler = () => {
    navigation("/buying");
  };

  const cartQty = () => {
    var quantity = 0;

    if (localStorage.getItem("cart").length !== 0) {
      return (quantity = JSON.parse(localStorage.getItem("cart").length));
    } else if (localStorage.getItem("cart").length === 0) {
      return quantity;
    }
  };
  // tengo el arreglo en localStorage, traerlo y mostrar el lenght o 0;

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-brand" onClick={goToHomeHandler}>
            MARBER
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
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={goToBeersHandler}
                >
                  Productos
                </button>
              </li>
            </ul>

            <div className="d-flex" role="search">
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={goToCartHandler}
              >
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/107/107831.png"
                  className="d-block w-100"
                  alt="..."
                  width="15px"
                  height="15px"
                />
              </button>
              <span className="cart-count">
                <b>{cartQty}</b>
              </span>
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={goToLoginHandler}
              >
                Iniciar sesion
              </button>
            </div>
            {click ? <></> : <></>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
