import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

const ViewRegister = () => {
    const [logStatus, setLogStatus] = useState(true);

    const setLogStatusHandle = (status) => {
        setLogStatus(status);
    }

    return (
        <>
            <NavBar />
            {logStatus && <Login setLogStatusHandle={setLogStatusHandle} />}
            <Footer />
        </>
  )
}

export default ViewRegister