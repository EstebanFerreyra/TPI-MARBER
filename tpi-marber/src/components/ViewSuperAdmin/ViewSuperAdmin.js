import React, { useContext } from 'react'
import { useNavigate } from "react-router";
import { RegisteredUserContext } from '../context/RegisteredUserContext/RegisteredUserContext';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import ListUsers from '../ListUsers/ListUsers'

const ViewSuperAdmin = () => {
    const { registeredUser } = useContext(RegisteredUserContext);

    const navigation = useNavigate();

    const seeLoginHandle = () => {
        navigation("/register");
    }

    return (
        <>
            <NavBar />
            <ListUsers />
            {registeredUser.role === "superadmin" && <li> <button type="button" className="btn btn-primary" onClick={seeLoginHandle}>Agregar usuario</button></li>}
            <Footer />
        </>
    )
}

export default ViewSuperAdmin