import React, { useContext } from "react";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";

const OrderRow = ({ id, userBuy, beerBuy, quantity, subTotal }) => {
  // const { registeredUser } = useContext(RegisteredUserContext);

  return (
    <tr>
      <td>{id}</td>
      {/* {registeredUser.role === "client" && <td>{registeredUser.user}</td>}
      {registeredUser.role !== "client" && <td>{idUser}</td>} */}
      <td>{userBuy}</td>
      <td>{beerBuy}</td>
      <td>{quantity}</td>
      <td>${subTotal}</td>
      <td>${subTotal * quantity}</td>
    </tr>
  );
};

export default OrderRow;
