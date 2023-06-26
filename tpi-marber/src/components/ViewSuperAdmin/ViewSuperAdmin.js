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
            {registeredUser.role === "superadmin" && <li> <button type="button" className="btn btn-primary" onClick={seeLoginHandle} id='button-add'>Agregar usuario</button></li>}
            <ListUsers />
            <Footer />
        </>
    )
}

export default ViewSuperAdmin