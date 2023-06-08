import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartLocalStorage);

  const quantity = parseInt(cart.quantity);

  // Determine the data type of the quantity property
  const quantityType = typeof quantity;

  // Console log the quantity value and its data type
  console.log("Quantity:", quantity);
  console.log("Data Type:", quantityType);

  const addToCart = (item) => {
    let itemInCart = cart.find((itemAdded) => itemAdded.id === item.id);
    if (itemInCart) {
      itemInCart + 1 &&
        localStorage.setItem(
          "cart",
          JSON.stringify([...cart], {
            ...itemInCart,
            quantity: itemInCart.quantity++,
          })
        );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...item, quantity: 1 }])
      );

      ////push devuelve la cantidad de elementos del array despues de agregarle el nuevo elemento al final
    }
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((itemAdded) => itemAdded.id !== item.id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: +1 } : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, increaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

//ver si conviene pasar las funciones por contexto e importarlas en CartItems

// const increaseQuantity = (item) => {
//   const updatedCart = cart.map((itemAdded) => {
//     if (itemAdded.id === item) {
//       return {
//         ...itemAdded,
//         quantity: itemAdded.quantity + 1,
//       };
//     }
//     return itemAdded;
//   });
//   setCart(updatedCart);
//   localStorage.setItem('cart', JSON.stringify(updatedCart));
// };

// const decreaseQuantity = (item) => {
//   const updatedCart = cart.map((itemAdded) => {
//     if (itemAdded.id === item) {
//       return {
//         ...itemAdded,
//         quantity: itemAdded.quantity - 1,
//       };
//     }
//     return itemAdded;
//   });
//   setCart(updatedCart);
//   localStorage.setItem('cart', JSON.stringify(updatedCart));
// };

// const removeItem = (item) => {
//   const updatedCart = cart.filter((itemAdded) => itemAdded.id !== item);
//   setCart(updatedCart);
//   localStorage.setItem('cart', JSON.stringify(updatedCart));
// };
