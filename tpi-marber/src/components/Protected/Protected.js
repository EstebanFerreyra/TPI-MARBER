import React, { useContext } from 'react'
import { RegisteredUserContext } from '../context/RegisteredUserContext/RegisteredUserContext';
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    const {registeredUser} = useContext(RegisteredUserContext);

    if(registeredUser.role !== "client" && registeredUser.success === true){
        return children;
    } else {
        return <Navigate to="/beers"/>
    }

}

export default Protected