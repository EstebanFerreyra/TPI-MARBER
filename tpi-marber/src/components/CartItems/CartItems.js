import React, { useContext, useState } from "react";

import { CartContext } from "../../contexts/ShoppingCartContext";

import "./CartItems.css";

const CartItems = ({ onAddToSummary }) => {
  const { cart } = useContext(CartContext);
  // const [cartItem, setCartItem] = useState([]);

  const summary = (onAddToSummary) => {
    // const newCartItem = [onAddToSummary, ...cart];
    // setCartItem(newCartItem);
  };

  // showCartButton = () => {
  //  !cartItem ? display block : display none;
  // }
  //   <div className="d-flex justify-content-end">
  //      <CartButton quantity={quantity} />
  //   </div>

  return (
    <div>
      <p>detalle de la compra</p>
      {cart.map((item) => (
        <div key={item.id}>
          <p>Producto: {item.name}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};
export default CartItems;
