import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme/Theme";

import "./OrderFilter.css";

const OrderFilter = ({ onChangeOrderFilter, filterOrder }) => {
  const { theme } = useContext(ThemeContext);

  const changeOrderHandler = (event) => {
    onChangeOrderFilter(event.target.value);
  };

  return (
    <div>
      <select
        className={`button-add-user ${
          theme === "dark" && "button-add-user-dark"
        }`}
        onChange={changeOrderHandler}
        value={filterOrder}
      >
        <option value="">Por producto</option>
        <option value="Red">Red</option>
        <option value="Irish">Irish</option>
        <option value="Scottish">Scottish</option>
      </select>
    </div>
  );
};

export default OrderFilter;
