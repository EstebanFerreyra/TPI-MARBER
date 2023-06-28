import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme/Theme";

import "./OrderFilter.css";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";

const OrderFilter = ({ onChangeOrderFilter, filterOrder, onChangeFilterUser }) => {
  const { theme } = useContext(ThemeContext);
  const { customers } = useContext(CustomersContext); 
  const { registeredUser } = useContext(RegisteredUserContext);


  const changeFilerUser = (event) =>{
    onChangeFilterUser(event.target.value);
    if(event.target.value === ""){
      onChangeFilterUser("");
    }
  }

  const changeOrderHandler = (event) => {
    onChangeOrderFilter(event.target.value);
    if (event.target.value === "") {
      onChangeOrderFilter("");
    }
  };

  return (
    <div>
      {registeredUser.role === "client" && <select
        className={`button-add-user ${
          theme === "dark" && "button-add-user-dark"
        }`}
        onChange={changeOrderHandler}
        value={filterOrder}
      >
        <option value="">Por producto</option>
        <option value="Irish">Irish</option>
        <option value="Scotish">Scotish</option>
        <option value="Porter">Porter</option>
        <option value="Honey">Honey</option>
        <option value="Golden">Golden</option>
        <option value="American">American</option>
        <option value="DeEssoCiTratta">DeEssoCiTratta</option>
        <option value="Mister">Mister</option>
        <option value="M´ bross">M´ bross</option>
        <option value="Scotch Ale">Scotch Ale</option>
        <option value="Red Ale">Red Ale</option>
        <option value="Argenta">Argenta</option>
        <option value="Prueba">Prueba</option>
      </select>}
      {registeredUser.role !== "client" && <select
        className={`button-add-user ${theme === "dark" && "button-add-user-dark"
          }`}
        onChange={changeFilerUser}
      >
        <option value="">Por cliente</option>
        {customers.map((user) => {
          return <option value={user.userBd}>{user.userBd}</option>
      })}
        
      </select>}
    </div>
  );
};

export default OrderFilter;
