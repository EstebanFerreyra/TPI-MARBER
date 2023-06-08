import React, { useContext } from "react";

import "./SideCart.css";
import { CartContext } from "../../contexts/ShoppingCartContext";

const SideCart = () => {
  const { cart } = useContext(CartContext);
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
      <button className="btn btn-secondary">Check out</button>
    </div>
  );
};

export default SideCart;
