import React, { useContext, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import NavBar from "../NavBar/NavBar";
import CartItems from "../CartItems/CartItems";
import axios from "axios";
import Loader from "../ui/Loader";

const ShoppingCart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [preferenceId, setPreferenceId] = useState(null);
  const [loading, setLoading] = useState(false);

  initMercadoPago("TEST-c83112be-2db8-4c9e-916e-7c852b74266a");

  const createPreference = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          description: cart[0].name,
          price: cart[0].price,
          quantity: cart[0].quantity,
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const quantity = cart.length;

  const total = cart.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  // const finishedBuy = () => {
  //   alert("¡Compra realizada con éxito!");
  //   clearCart();
  //   window.location.reload();
  // }; //preguntar si es conveniente recargar la pagina para q se vacíe el carrito

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      setLoading(false);
      clearCart();
    }
  };

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
            <button className="btn btn-secondary" onClick={handleBuy}>
              Check out
            </button>
          </div>
          <div className="d-flex justify-content-center">
            {loading && <Loader />}
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
