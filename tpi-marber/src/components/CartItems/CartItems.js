import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";

const CartItems = () => {
  const { cart } = useContext(CartContext);

  const checkoutHandler = () => {
    // API Fetch

    const newInvoice = {
      // userId del contexto
      details: cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        unitPrice: item.price,
        subtotal: item.price * item.quantity,
      })),
    };
  };

  return (
    <div>
      <p>detalle de la compra</p>
      {cart.length === 0 ? (
        <p>empty cart</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>Producto: {item.name}</p>
            <p>${item.price * item.quantity}</p>
          </div>
        ))
      )}
      <button onClick={checkoutHandler}>Pedir</button>
    </div>
  );
};
export default CartItems;
