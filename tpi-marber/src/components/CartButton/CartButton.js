import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";

function CartButton({ quantity }) {
  //const { cart } = useContext(CartContext);
  //const quantity = cart.length;

  const addOne = (quantity) => {
    return quantity + 1;
  };

  const quitOne = (quantity) => {
    return quantity - 1;
  };

  return (
    <div className="NavBar">
      <div className="d-flex justify-content-center">
        <h2 className="d-flex justify-content-end">{quantity}</h2>
        <button
          onClick={addOne}
          disabled={quantity === 5}
          type="button"
          className="btn btn-primary max-auto"
        >
          +
        </button>

        <button
          onClick={quitOne}
          disabled={quantity === 1}
          type="button"
          className="btn btn-secondary ms-1"
        >
          -
        </button>
        <button className="btn btn-danger ms-1">X</button>
      </div>
    </div>
  );
}

export default CartButton;
