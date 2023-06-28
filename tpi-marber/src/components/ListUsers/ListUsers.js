import React, { useContext, useState } from "react";
import UserRow from "../UserRow/UserRow";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";
import { ThemeContext } from "../context/Theme/Theme";
import UserFilter from "../UserFilter/UserFilter";

import "./ListUsers.css";

const ListUsers = () => {
  const [filterRole, setFilterRole] = useState("");
  const [sortedUsers, setSortedUsers] = useState("");

  const { customers } = useContext(CustomersContext);
  const { theme } = useContext(ThemeContext);

  const userRoleChanged = (role) => {
    setFilterRole(role);
  };

  const sortUserHandler = () => {
    if (sortedUsers === "") {
      const sorted = customers.sort((a, b) => {
        return a.userBd.localeCompare(b.userBd);
      });
      setSortedUsers(sorted);
    } else {
      setSortedUsers("");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h2 className={`title-list ${theme === "dark" && "title-list-dark"}`}>
          Listado de clientes
        </h2>
        <div>
          <UserFilter
            filterRole={filterRole}
            onChangeRoleFilter={userRoleChanged}
          />
        </div>
      </div>
      <div class="container">
        <table class="table table-hover">
          <thead style={{ backgroundColor: "lightsteelblue" }}>
            <tr className={` ${theme === "dark" && "tr"}`}>
              <th scope="col">
                Nombre
                <button className="sort-button" onClick={sortUserHandler}>
                  ↕
                </button>
              </th>
              <th scope="col">Email</th>
              <th scope="col">Rol</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {filterRole === "" &&
              //   sortedUsers &&
              customers.map((user) => {
                return (
                  <UserRow
                    key={user.id}
                    id={user.id}
                    user={user.userBd}
                    email={user.emailBd}
                    role={user.roleBd}
                  />
                );
              })}
            {customers
              .filter((user) => user.roleBd === filterRole)
              .map((user) => {
                return (
                  <UserRow
                    key={user.id}
                    id={user.id}
                    user={user.userBd}
                    email={user.emailBd}
                    role={user.roleBd}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListUsers;
