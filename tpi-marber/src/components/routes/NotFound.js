import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
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
    </div>
  );
};

export default NotFound;
