import React, { useState } from "react";

function CartButton({ quantity }) {
  const [quant, setQuantity] = useState(quantity);
  const addOne = () => {
    return setQuantity(quant + 1);
  };

  const quitOne = () => {
    return setQuantity(quant - 1);
  };

  return (
    <div className="NavBar">
      <div className="d-flex justify-content-center">
        <h2 className="d-flex justify-content-end">{quantity}</h2>
        <button
          onClick={addOne}
          disabled={quant === 5}
          type="button"
          className="btn btn-primary me-1"
        >
          Add
        </button>

        <button
          onClick={quitOne}
          disabled={quant === 1}
          type="button"
          className="btn btn-secondary ms-1"
        >
          Quit
        </button>
        <button className="btn btn-danger ms-1">X</button>
      </div>
    </div>
  );
}

export default CartButton;