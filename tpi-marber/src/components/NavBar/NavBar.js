import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import "./NavBar.css";
import { CartContext } from "../../contexts/ShoppingCartContext";
import SideCart from "../SideCart/SideCart";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [sideCart, setSideCart] = useState(false);
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

  // const cartQty = () => {
  //   let quantity = localStorage.getItem("cart").length;
  //   return quantity;
  // };

  const quantity = cart.length;

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

            <button onClick={() => setSideCart(!sideCart)}>show cart</button>
            {sideCart && <SideCart />}

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
                <b>{quantity}</b>
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
