import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { CartContext } from "../../contexts/ShoppingCartContext";

import "./ShoppingCart.css";
import CartButton from "../CartButton/CartButton";

const ShoppingCart = ({}) => {
  const [cart, setCart] = useContext(CartContext);

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
      <div className="card-order">
        <h2>total: ${total}</h2>

        <div className="card-inside">
          <h3>items in cart: {quantity}</h3>
        </div>
      </div>
      <div className=" d-flex justify-content-center m-3">
        <CartButton quantity={quantity} />
        <button className="btn btn-secondary" onClick={finishedBuy}>
          Check out
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
