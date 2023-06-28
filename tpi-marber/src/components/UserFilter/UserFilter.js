import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme/Theme";

import "./UserFilter.css";

const UserFilter = ({ onChangeRoleFilter, filterRole }) => {
  const { theme } = useContext(ThemeContext);

  const changeRoleHandler = (event) => {
    onChangeRoleFilter(event.target.value);
  };

  return (
    <div>
      <select
        className={`button-add-user ${
          theme === "dark" && "button-add-user-dark"
        }`}
        onChange={changeRoleHandler}
        value={filterRole}
      >
        <option value="">Seleccione un rol</option>
        <option value="client">Cliente</option>
        <option value="admin">Admin</option>
        <option value="superadmin">Superadmin</option>
      </select>
    </div>
  );
};

export default UserFilter;
