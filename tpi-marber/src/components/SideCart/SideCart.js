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
    <div id="side-cart" ref={ref}>
      <button
        class="side-cart.active"
        className="nav-link active"
        onClick={onClose}
      >
        X
      </button>
      {/* Agregar que si no hay pedido que muestre no hay pedido */}
      <p>Detalle de la compra</p>
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
