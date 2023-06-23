import React, { useState } from "react";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar.js";
import Footer from "../Footer/Footer";
import SingIn from "../Singin/SingIn";

const ViewLogin = () => {
  const [logStatus, setLogStatus] = useState(true);

  const setLogStatusHandle = (status) => {
    setLogStatus(status);
  };

  return (
    <>
      <NavBar />
      {logStatus && <SingIn setLogStatusHandle={setLogStatusHandle} />}
      {!logStatus && <Login setLogStatusHandle={setLogStatusHandle} />}
      <Footer />
    </>
  );
};

export default ViewLogin;
