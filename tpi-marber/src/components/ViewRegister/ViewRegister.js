import React, { useContext, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { ThemeContext } from '../context/Theme/Theme';

const ViewRegister = () => {
    const [logStatus, setLogStatus] = useState(true);

    const { theme } = useContext(ThemeContext);

    const setLogStatusHandle = (status) => {
        setLogStatus(status);
    }

    return (
        <div className={` ${theme === "dark" && "container-view"
            }`}>             <NavBar />
            {logStatus && <Login setLogStatusHandle={setLogStatusHandle} />}
            <Footer />
        </div>
  )
}

export default ViewRegister