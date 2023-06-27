import React, { useContext } from 'react'
import { useNavigate } from "react-router";
import { RegisteredUserContext } from '../context/RegisteredUserContext/RegisteredUserContext';
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import ListUsers from '../ListUsers/ListUsers'
import { ThemeContext } from '../context/Theme/Theme';
import "./ViewSuperAdmin.css"

const ViewSuperAdmin = () => {
    const { registeredUser } = useContext(RegisteredUserContext);

    const { theme } = useContext(ThemeContext);

    const navigation = useNavigate();

    const seeLoginHandle = () => {
        navigation("/register");
    }

    return (
        <div className={` ${theme === "dark" && "container-view"
            }`}>           
             <NavBar />
            {registeredUser.role === "superadmin" && <li> <button type="button" className={`button-add-user ${theme === "dark" && "button-add-user-dark"
                }`} onClick={seeLoginHandle} >Agregar usuario</button></li>}
            <ListUsers />
            <Footer />
        </div>
    )
}

export default ViewSuperAdmin