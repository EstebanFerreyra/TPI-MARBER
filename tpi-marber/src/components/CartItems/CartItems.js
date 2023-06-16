import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import NavBar from "../NavBar/NavBar";

const CartItems = () => {
  const { cart, clearCart } = useContext(CartContext);
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
        .then(alert("¡Compra realizada con éxito!") && clearCart())
        .catch((error) => console.log(error));
    });

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
  const quantity = cart.length;

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
            <p>detalle de la compra</p>
            {cart.length === 0 ? (
              <p>empty cart</p>
            ) : (
              cart.map((item) => (
                <div key={item.id}>
                  <p>Producto: {item.name}</p>
                  <p>${item.price * item.quantity}</p>
                </div>
              ))
            )}
            <h3>total: ${total}</h3>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-secondary" onClick={checkoutHandler}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
