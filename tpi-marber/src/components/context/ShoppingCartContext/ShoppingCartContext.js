import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartLocalStorage);

  const addToCart = (item) => {
    let itemInCartIndex = cart.findIndex(
      (itemAdded) => itemAdded.id === item.id
    );
    if (itemInCartIndex >= 0) {
      const newCart = [...cart];
      newCart[itemInCartIndex].quantity += 1;
      setCart([...newCart]);
      localStorage.setItem("cart", JSON.stringify([...newCart]));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...item, quantity: 1 }])
      );
    }
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((itemAdded) => itemAdded.id !== item.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: (item.quantity += 1),
        };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: (item.quantity -= 1),
        };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
