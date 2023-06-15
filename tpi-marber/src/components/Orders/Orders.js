import React, { useEffect, useState, useContext } from "react";
import NavBar from "../NavBar/NavBar";
import OrderRow from "../OrderRow/OrderRow";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const setOrdersHandle = (obj) => {
    setOrders(obj);
  }
  const url = "https://localhost:7160/marber/OrderController/GetOrder";

  useEffect(() => {
    //toggleLoading(true);
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrdersHandle(data);
      })
      // .then(data => console.log(data))
      .catch((error) => console.log(error));
    //toggleLoading(false);
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="d-flex justify-content-center">
        <h2>Estado de pedidos</h2>
      </div>
      <div class="container">
        <table class="table table-hover">
          <thead style={{ backgroundColor: "lightsteelblue" }}>
            <tr>
              <th>Id Orden</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Monto</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {

              return <OrderRow key={order.id} id={order.id} idUser={order.idUser} idBeer={order.idBeer} quantity={order.quantity} beerPrice={order.beerPrice}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
