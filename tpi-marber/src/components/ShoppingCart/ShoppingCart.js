import React, { useContext } from "react";

import { CartContext } from "../../contexts/ShoppingCartContext";

import "./ShoppingCart.css";
import NavBar from "../NavBar/NavBar";
import CartItems from "../CartItems/CartItems";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  const quantity = cart.length;

  const total = cart.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  // cart.length !== 0
  //   ? cart.reduce((sum, { price, quantity }) => sum + price * quantity)
  //   : 0;

  const finishedBuy = (event) => {
    alert("¡Compra realizada con éxito!");
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="d-flex justify-content-center p-1 ">
        <div className="card d-flex justify-content-center m-5 p-1 w-75 shadow p-3 mb-5 bg-body rounded">
          <div className="card p-2">
            <CartItems />
            <div className="d-flex justify-content-end"></div>
            <h3>total: ${total}</h3>
          </div>

          <div className="d-flex justify-content-center m-3">
            <button className="btn btn-secondary" onClick={finishedBuy}>
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
