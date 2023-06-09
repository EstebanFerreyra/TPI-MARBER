import React, { useContext } from "react";

import { CartContext } from "../../contexts/ShoppingCartContext";

import "./CartItems.css";
//import CartButton from "../CartButton/CartButton";

const CartItems = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  //
  const quantity = cart.quantity;

  // Determine the data type of the quantity property
  const quantityType = typeof quantity;

  // Console log the quantity value and its data type
  console.log("Quantity:", quantity);
  console.log("Data Type:", quantityType);
  //
  // showCartButton = () => {
  //  !cartItem ? display block : display none;
  // }
  //   <div className="d-flex justify-content-end">
  //      <CartButton quantity={quantity} />
  //   </div>

  return (
    <div>
      <p>detalle de la compra</p>
      {cart.length === 0 ? (
        <p>empty cart</p>
      ) : (
        cart.map((item) => (
          <div>
            <div key={parseInt(item.id)}>
              <p>Producto: {item.name}</p>
              <p>${item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default CartItems;
