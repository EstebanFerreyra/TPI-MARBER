import React, { useContext } from "react";

import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import NavBar from "../NavBar/NavBar";
import CartItems from "../CartItems/CartItems";

const ShoppingCart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const quantity = cart.length;

  const total = cart.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const finishedBuy = () => {
    alert("¡Compra realizada con éxito!");
    clearCart();
    window.location.reload();
  }; //preguntar si es conveniente recargar la pagina para q se vacíe el carrito

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="d-flex justify-content-center p-1 ">
        <div className="card d-flex justify-content-center m-5 p-1 w-75 shadow p-3 mb-5 bg-body rounded">
          <div className="card p-2">
            <CartItems />
            {/* <div className="d-flex justify-content-end">cart buttons</div>  */}
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
