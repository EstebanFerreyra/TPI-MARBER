import React, { useContext } from 'react'
import { RegisteredUserContext } from '../context/RegisteredUserContext/RegisteredUserContext';
import { Navigate } from 'react-router-dom';

const ProtectedSession = ({ children }) => {
    const { registeredUser } = useContext(RegisteredUserContext);

    if (registeredUser.success === true) {
        return children;
    } else {
        return <Navigate to="/beers" />
    }

}

export default ProtectedSession