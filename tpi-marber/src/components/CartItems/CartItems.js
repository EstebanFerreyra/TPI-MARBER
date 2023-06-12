import React, { useContext } from "react";

import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <p>detalle de la compra</p>
      {cart.length === 0 ? (
        <p>empty cart</p>
      ) : (
        cart.map((item) => (
          <div>
            <div key={parseInt(item.id)}>
              <p>Producto: {item.name}</p>
              <p>${item.price*item.quantity}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default CartItems;
