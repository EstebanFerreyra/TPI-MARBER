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
      <h2 className="d-flex justify-content-center">{quantity}</h2>
      <div className="d-flex justify-content-center">
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
      </div>
    </div>
  );
}

export default CartButton;
