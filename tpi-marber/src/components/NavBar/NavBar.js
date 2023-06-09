import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router"
import { RegisteredUserContext } from '../context/RegisteredUserContext/RegisteredUserContext';


import "./NavBar.css"

const NavBar = () => {
    const [click, setClick] = useState(false);

    const userRegisteredLocal = useContext(RegisteredUserContext);

    const clickHandler = () => {
        setClick(true);
    }

    const navigation = useNavigate();

    const goToBeersHandler = () => {
        navigation("/beers");
    }

    const goToAboutUsHandler = () => {
        navigation("/aboutus");
    }

    const goToLoginHandler = () => {
        navigation("/login");
    }

    const goToHomeHandler = () => {
        navigation("/");
    }

    const logOutHandle = () => {
        userRegisteredLocal.setRegisteredUser({
            success: false,
            user: "",
            role: ""
        }
        );
        navigation("/login")
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-brand" href="#" onClick={goToHomeHandler} style={{border: "none", background: "none"}}><img src={require("./logonav.png")} height="30px" width="80px"></img></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link active" aria-current="page" href="#" onClick={goToAboutUsHandler}>Sobre nosotros</button>
                            </li>

                            <li className="nav-item dropdown">
                            <button className="nav-link active" aria-current="page" href="#" onClick={goToBeersHandler}>Productos</button>

                            </li>
                            
                        </ul>
                        {userRegisteredLocal.registeredUser.success === true && 
                        <span className='navbar-text' style={{"margin-right": "10px"}}>¡Bienvenido <strong>{userRegisteredLocal.registeredUser.user}</strong>!</span>}

                        <div className="d-flex" role="search">
                            <button className="btn btn-outline-success" type="submit" onClick={clickHandler}>      <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" className="d-block w-100" alt="..." width="15px" height="15px" />
                            </button>
                           {userRegisteredLocal.registeredUser.success === false && <button className="btn btn-outline-success" type="submit" onClick={goToLoginHandler}>Iniciar sesion</button>}
                           {userRegisteredLocal.registeredUser.success === true && <button className="btn btn-outline-success" type="submit" onClick={logOutHandle}>Cerrar sesion</button>}
                        </div>
                        {click ?<></> : <></> }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar