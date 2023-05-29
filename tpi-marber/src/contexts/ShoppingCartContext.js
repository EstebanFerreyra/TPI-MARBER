import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartLocalStorage);

  const addToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
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
