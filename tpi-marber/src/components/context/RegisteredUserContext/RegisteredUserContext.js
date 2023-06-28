import React, { useState } from "react";
export const RegisteredUserContext = React.createContext([]);

const log = {
  success: false,
  id: 0,
  user: "",
  role: "",
  preferenceThemeUser: "light"
};

const userLocalStorage = JSON.parse(localStorage.getItem("registeredUser"));

const RegisteredUserContextProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState(
    userLocalStorage === null ? log : userLocalStorage
  );

  const setRegisteredUserHandle = (obj) => {
    setRegisteredUser(obj);
  };

  return (
    <RegisteredUserContext.Provider
      value={{ registeredUser, setRegisteredUserHandle }}
    >
      {children}
    </RegisteredUserContext.Provider>
  );
};

export default RegisteredUserContextProvider;
