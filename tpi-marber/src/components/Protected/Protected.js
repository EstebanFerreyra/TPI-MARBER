import React, { useContext } from 'react'
import { RegisteredUserContext } from '../context/RegisteredUserContext/RegisteredUserContext';
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    const userRegisteredLocal = useContext(RegisteredUserContext);

    if(userRegisteredLocal.registeredUser.role !== "client" && userRegisteredLocal.registeredUser.success === true){
        return children;
    } else {
        return <Navigate to="/beers"/>
    }

}

export default Protected