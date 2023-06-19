import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import NavBar from "../NavBar/NavBar";

import "./CartItems.css";

const CartItems = () => {
  const { cart, clearCart, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);
  const { registeredUser } = useContext(RegisteredUserContext);

  const checkoutHandler = () => {
    const url = "https://localhost:7160/marber/OrderController/AddOrder";

    cart.map((order) => {
      fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idUser: registeredUser.id,
          idBeer: order.id,
          quantity: order.quantity,
          beerPrice: order.price,
        }),
      })
        .then((response) => response)
        .catch((error) => console.log(error));
    });

    alert("¡Compra realizada con éxito!");
    clearCart();

    // const newInvoice = {
    //   userId del contexto
    //   details: cart.map((item) => ({
    //     productId: item.id,
    //     quantity: item.quantity,
    //     unitPrice: item.price,
    //     subtotal: item.price * item.quantity,
    //   })),
    // };
  };

  const increaseHandler = (id) => {
    increaseQuantity(id);
  };

  const decreaseHandler = (id) => {
    decreaseQuantity(id);
  };

  const removeItemHandler = (id) => {
    let item = {
      id: id,
    };
    removeItem(item);
  };

  const total = cart.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="d-flex justify-content-center">
        <div className="card m-5 p-1 w-50 shadow p-3 bg-body rounded">
          <div className="card d-flex justify-content-end p-3 mb-2 bg-body rounded">
            <p className="cart-text">Detalle de la compra</p>
            {cart.length === 0 ? (
              <p>
                <i>Carrito vacío</i>
              </p>
            ) : (
              cart.map((item) => (
                <div key={item.id} id={item.id}>
                  <p>
                    Producto: {item.name} x{item.quantity}
                  </p>
                  <p>${item.price * item.quantity}</p>
                  <div className="cart-buttons">
                    <button
                      className="quant-button"
                      onClick={() => increaseHandler(item.id)}
                    >
                      +
                    </button>
                    {
                      <button
                        className="quant-button"
                        onClick={() => decreaseHandler(item.id)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                    }
                    <button
                      className="bin-button"
                      onClick={() => removeItemHandler(item.id)}
                    >
                      <svg
                        fill="#000000"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 408.483 408.483"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316 H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293 c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329 c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355 c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356 c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"></path>{" "}
                              <path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916 c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"></path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </button>
                  </div>
                  <hr></hr>
                </div>
              ))
            )}
            <h3 className="cart-text">Total: ${total}</h3>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="checkout btn btn-secondary"
              onClick={checkoutHandler}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
