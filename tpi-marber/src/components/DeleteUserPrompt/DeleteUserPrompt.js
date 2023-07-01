import React, { useContext } from "react";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { useNavigate } from "react-router-dom";

import "./DeleteUserPrompt.css";

const DeleteUserPrompt = ({ onCancelAlert }) => {
  const { removeRegisteredUser } = useContext(RegisteredUserContext);

  const navigation = useNavigate();

  const closeAlertHandler = () => {
    onCancelAlert(false);
  };

  const deleteAccountHandler = () => {
    removeRegisteredUser();
    onCancelAlert(false);
    navigation("/");
  };

  return (
    <div className="prompt-container">
      <div className="prompt-header">
        <h5>¿Está seguro de que desea eliminar su cuenta?</h5>
      </div>
      <div>
        <button className="alert-button" onClick={deleteAccountHandler}>
          Confirmar
        </button>
        <button className="alert-button" onClick={closeAlertHandler}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default DeleteUserPrompt;
