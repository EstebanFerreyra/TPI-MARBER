import React from "react";

const OrderRow = ({ id, idUser, idBeer, quantity, beerPrice }) => {


  return (
    <tr>
      <td>{id}</td>
      <td>{idUser}</td>
      <td>{idBeer}</td>
      <td>{quantity}</td>
      <td>${beerPrice}</td>
      <td>${beerPrice*quantity}</td>
    </tr>
  );
};

export default OrderRow;
