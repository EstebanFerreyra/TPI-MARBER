import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../custom/useClickOutside/useClickOutside";
import { ThemeContext } from "../context/Theme/Theme";

import "./SideCart.css";

const SideCart = ({ onClose }) => {
  const { cart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const ref = useClickOutside(onClose);

  const navigation = useNavigate();

  const goToCartHandler = () => {
    navigation("/buying");
  };

  return (
    <div
      className={`side-cart ${theme === "dark" && "side-cart-dark"}`}
      ref={ref}
    >
      <p className="side-cart-text">Detalle de la compra</p>
      {cart.map((item) => (
        <div>
          <div key={item.id}>
            <p className="side-cart-text">
              {item.name} x{item.quantity}
            </p>
            <p className="side-cart-text">${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <button
        className={`checkout-button ${
          theme === "dark" && "checkout-button-dark"
        }`}
        onClick={goToCartHandler}
      >
        Ir al carrito
      </button>
    </div>
  );
};

export default SideCart;
