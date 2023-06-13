import React from "react";

const OrderRow = ({ orders }) => {
  return (
    <tbody>
      {orders.map((o) => (
        <tr>
          <td>{o.id_client}</td>
          <td>{o.id_prod}</td>
          <td>{o.quantity}</td>
          <td>${o.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderRow;
