import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";

const CartItems = () => {
  const { cart } = useContext(CartContext);
  const { registeredUser } = useContext(RegisteredUserContext);

  const checkoutHandler = () => {
    const url = 'https://localhost:7160/marber/OrderController/AddOrder';

    cart.map((order) => {
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idUser: registeredUser.id,
          idBeer: order.id,
          quantity: order.quantity,
          beerPrice: order.price
        })
      })
        .then(response => response)
        .catch((error) => console.log(error));
    })

    // const newInvoice = {
    //   userId del contexto
    //   details: cart.map((item) => ({
    //     productId: item.id,
    //     quantity: item.quantity,
    //     unitPrice: item.price,
    //     subtotal: item.price * item.quantity,
    //   })),
    // };
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
