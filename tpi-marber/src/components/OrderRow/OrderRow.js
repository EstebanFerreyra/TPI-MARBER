import React from "react";

const OrderRow = ({ id, userBuy, beerBuy, quantity, subTotal }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{userBuy}</td>
      <td>{beerBuy}</td>
      <td>{quantity}</td>
      <td>${subTotal}</td>
      <td>${subTotal * quantity}</td>
    </tr>
  );
};

export default OrderRow;
