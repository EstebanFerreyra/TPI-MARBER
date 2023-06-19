import React, { useState } from "react";
export const RegisteredUserContext = React.createContext([]);

const RegisteredUserContextProvider = ({ children }) => {
  const [registeredUser, setRegisteredUser] = useState({
    success: false,
    id: 0,
    user: "",
    role: "",
  });

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
