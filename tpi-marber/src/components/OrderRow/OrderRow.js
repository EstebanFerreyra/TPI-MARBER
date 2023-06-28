import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme/Theme";

const OrderRow = ({ id, userBuy, beerBuy, quantity, subTotal }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <tr className={` ${theme === "dark" && "tr"
      }`}>
      <td data-label="Id">{id}</td>
      <td data-label="Cliente">{userBuy}</td>
      <td data-label="Cerveza">{beerBuy}</td>
      <td data-label="Cantidad">{quantity}</td>
      <td data-label="Monto">${subTotal}</td>
      <td data-label="Total">${subTotal * quantity}</td>
    </tr>
  );
};

export default OrderRow;
