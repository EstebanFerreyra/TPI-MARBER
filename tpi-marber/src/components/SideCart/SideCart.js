import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
import useClickOutside from "../custom/useClickOutside/useClickOutside";

import "./SideCart.css";

const SideCart = ({ onClose }) => {
  const { cart } = useContext(CartContext);
  const ref = useClickOutside(onClose);

  const navigation = useNavigate();

  const goToCartHandler = () => {
    navigation("/buying");
  };

  return (
    <div className="side-cart" ref={ref}>
      <p>detalle de la compra</p>
      {cart.map((item) => (
        <div>
          <div key={item.id}>
            <p>
              Producto: {item.name} x{item.quantity}
            </p>
            <p>${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <button className="checkout" onClick={goToCartHandler}>
        Ir al carrito
      </button>
    </div>
  );
};

export default SideCart;
