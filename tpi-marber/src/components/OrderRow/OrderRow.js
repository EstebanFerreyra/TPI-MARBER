import React, { useContext } from "react";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";

const OrderRow = ({ id, idUser, idBeer, quantity, beerPrice }) => {
  const { registeredUser } = useContext(RegisteredUserContext);

  return (
    <tr>
      <td>{id}</td>
      {registeredUser.role === "client" && <td>{registeredUser.user}</td>}
      {registeredUser.role !== "client" && <td>{idUser}</td>}
      <td>{idBeer}</td>
      <td>{quantity}</td>
      <td>${beerPrice}</td>
      <td>${beerPrice * quantity}</td>
    </tr>
  );
};

export default OrderRow;
