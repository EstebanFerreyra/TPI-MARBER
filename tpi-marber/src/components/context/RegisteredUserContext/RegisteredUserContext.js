import React, { useState } from 'react'
export const RegisteredUserContext = React.createContext([]);

const RegisteredUserContextProvider = ({children}) => {
    const [registeredUser, setRegisteredUser] = useState({
        success: false,
        user: "",
        role: ""
    });

    
    return (
        <RegisteredUserContext.Provider value={{registeredUser, setRegisteredUser}}>
            {children}
        </RegisteredUserContext.Provider>
    )
}

export default RegisteredUserContextProvider;