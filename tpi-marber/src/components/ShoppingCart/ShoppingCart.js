import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { CartContext } from "../../contexts/ShoppingCartContext";

import "./ShoppingCart.css";
import CartButton from "../CartButton/CartButton";

const ShoppingCart = ({}) => {
  const { cart } = useContext(CartContext);

  const quantity = cart.reduce((acc, current) => {
    return acc + current.quantity;
  }, 0);

  const total = cart.reduce((acc, current) => {
    return acc + current.quantity * current.beerPrice;
  }, 0);

  const finishedBuy = (event) => {
    alert("¡Compra realizada con éxito!");
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="card d-flex justify-content-center m-5 p-1">
        <div className="card p-2">
          <p>detalle de la compra</p>
          <h3>items in cart: {quantity}</h3>

          <div className="d-flex justify-content-end">
            <CartButton quantity={quantity} />
          </div>
          <h2>total: ${total}</h2>
        </div>

        <div className="d-flex justify-content-center m-3">
          <button className="btn btn-secondary" onClick={finishedBuy}>
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
