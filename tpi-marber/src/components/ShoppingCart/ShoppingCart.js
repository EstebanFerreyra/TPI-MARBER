import React, { useContext } from "react";

import { CartContext } from "../../contexts/ShoppingCartContext";

import "./ShoppingCart.css";
import NavBar from "../NavBar/NavBar";
import CartButton from "../CartButton/CartButton";
import CartItems from "../CartItems/CartItems";

const ShoppingCart = () => {
  const { cart } = useContext(CartContext);

  const quantity = cart.length;

  // const priceArray = ;

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
          <CartItems />
          <h4>items in cart: {quantity}</h4>
          <div className="d-flex justify-content-end">
            <CartButton quantity={quantity} />
          </div>
          <h3>total: ${}</h3>
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
