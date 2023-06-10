import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
<<<<<<< HEAD
  const navigation = useNavigate();

  const goBackHandler = () => {
    navigation("/login");
  };

  return (
    <div>
      <div className="card p-3 mt-4 shadow">
        {" "}
        <h2>La pagina no esta disponible</h2>
        <div className="card-body d-flex justify-content-center">
          <Button className="btn btn-secondary" onClick={goBackHandler}>
            Volver al Login
          </Button>
        </div>
      </div>
=======
    const navigation = useNavigate();

    const goBackHandler = () => {
      navigation("/");
    };
    
  return (
    <div className='div-error'>
        <h1>404 ERROR</h1>
        <h2>La pagina no esta disponible</h2>
      <Button className="w-25" onClick={goBackHandler} >
        Volver al inicio
      </Button>
>>>>>>> cfeb4becbca328b85f2f85569c197262bd7b4015
    </div>
  );
};

export default NotFound;
