import React, { useContext, useState } from 'react'
import Login from '../Login/Login'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import SingIn from '../Singin/SingIn'
import "./ViewLogin.css"
import { ThemeContext } from '../context/Theme/Theme'

const ViewLogin = () => {
    const [logStatus, setLogStatus] = useState(true);

    const { theme } = useContext(ThemeContext);

    const setLogStatusHandle = (status) => {
        setLogStatus(status);
    }

    return (
        <div className={` ${theme === "dark" && "container-view"
            }`}>
            <NavBar />
            {logStatus && <SingIn setLogStatusHandle={setLogStatusHandle} />}
            {!logStatus && <Login setLogStatusHandle={setLogStatusHandle} />}
            <Footer />
        </div>
    )
}

export default ViewLogin