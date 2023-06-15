import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import OrderRow from "../OrderRow/OrderRow";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const url = "https://localhost:7160/marber/OrderController/GetOrders";

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
        setOrders(data);
      })
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
              <th>Cliente</th>
              <th>Descripción pedido</th>
              <th>Cantidad</th>
              <th>Monto</th>
            </tr>
          </thead>
          <OrderRow orders={orders} />
        </table>
      </div>
    </div>
  );
};

export default Orders;
