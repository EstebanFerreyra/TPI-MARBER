import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import OrderRow from "../OrderRow/OrderRow";

const Orders = () => {
  const orders = [
    { id_client: 1, id_prod: 2, quantity: 3, price: 1500 },
    { id_client: 4, id_prod: 1, quantity: 12, price: 2000 },
  ];

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
