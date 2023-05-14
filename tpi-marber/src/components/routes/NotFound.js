import React from 'react'
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    // const navigation = useNavigate();

    // const goBackHandler = () => {
    //   navigation("/login");
    // };
    
  return (
    <div>
        <h2>La pagina no esta disponible</h2>
      <Button className="w-25" >
        Volver al Login
      </Button>
    </div>
  )
}

export default NotFound