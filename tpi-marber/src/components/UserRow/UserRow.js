import React, { useContext } from "react";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";
import "./UserRow.css";
import { ThemeContext } from "../context/Theme/Theme";

const UserRow = ({ id, user, email, role }) => {
  const { setCustomersHandle } = useContext(CustomersContext);
  const { theme } = useContext(ThemeContext);
  const url = `https://www.apimarber.somee.com/marber/ClientController/DeleteClient/${id}`;

  const delteUserHandle = () => {
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      refer: "*",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setCustomersHandle(response))
      .catch((error) => console.log(error));
  };

  return (
    <tr className={` ${theme === "dark" && "tr"}`}>
      <td data-label="Cliente">{user}</td>
      <td data-label="Email">{email}</td>
      <td data-label="Rol">{role}</td>
      <td data-label="Eliminar">
        <button onClick={delteUserHandle} className="button-delete">
          X
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
