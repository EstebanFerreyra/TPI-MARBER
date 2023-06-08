import React, { useContext } from "react";

import "./SideCart.css";
import { CartContext } from "../../contexts/ShoppingCartContext";
import { useNavigate } from "react-router-dom";

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
          <div key={parseInt(item.id)}>
            <p>Producto: {item.name}</p>
            <p>${item.price}</p>
          </div>
        </div>
      ))}
      <button className="btn btn-secondary" onClick={goToCartHandler}>
        Go to cart
      </button>
    </div>
  );
};

export default SideCart;
