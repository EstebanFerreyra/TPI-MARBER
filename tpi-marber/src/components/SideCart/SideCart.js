import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

import "./SideCart.css";

const SideCart = () => {
  const { cart } = useContext(CartContext);
  const navigation = useNavigate();

  const goToCartHandler = () => {
    navigation("/buying");
  };

  return (
    <div className="side-cart">
      <p>detalle de la compra</p>
      {cart.map((item) => (
        <div>
          <div key={item.id}>
            <p>Producto: {item.name}</p>
            <p>${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
      <button className="checkout" onClick={goToCartHandler}>
        Go to cart
      </button>
    </div>
  );
};

export default SideCart;
