import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartLocalStorage);

  const addToCart = (item) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((itemAdd) => item.name === itemAdd.name);
    if (itemInCart) {
      itemInCart.quantity++ &&
        localStorage.setItem(
          "cart",
          JSON.stringify([...cart], {
            ...itemInCart,
            quantity: itemInCart.quantity++,
          })
        );
    } else {
      itemInCart = {
        ...item,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);

    // setCart([...cart, { ...item, quantity: 1 }]);
    // localStorage.setItem(
    //   "cart",
    //   JSON.stringify([...cart, { ...item, quantity: 1 }])
    // );
  };

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
