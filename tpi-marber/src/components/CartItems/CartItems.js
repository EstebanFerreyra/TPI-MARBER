import React, { useContext } from "react";

import { CartContext } from "../../contexts/ShoppingCartContext";

import "./CartItems.css";
import CartButton from "../CartButton/CartButton";

const CartItems = () => {
  const { cart } = useContext(CartContext);
  // const [cartItem, setCartItem] = useState([]);
  console.log(cart);
  //const summary = (onAddToSummary) => {
  // const newCartItem = [onAddToSummary, ...cart];
  // setCartItem(newCartItem);
  //};

  // showCartButton = () => {
  //  !cartItem ? display block : display none;
  // }
  //   <div className="d-flex justify-content-end">
  //      <CartButton quantity={quantity} />
  //   </div>

  return (
    <div>
      <p>detalle de la compra</p>
      {cart.map((item) => (
        <div key={item.id}>
          <p>Producto: {item.name}</p>
          <p>${item.price}</p>
          <CartButton quantity={item.quantity} />
        </div>
      ))}
    </div>
  );
};
export default CartItems;
