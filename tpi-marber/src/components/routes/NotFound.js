import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigation = useNavigate();

  const goBackHandler = () => {
    navigation("/");
  };

  return (
    <div className="div-error">
      <h1>404 ERROR</h1>
      <h2>La pagina no esta disponible</h2>
      <Button className="w-25" onClick={goBackHandler}>
        Volver al inicio
      </Button>
    </div>
  );
};

export default NotFound;
