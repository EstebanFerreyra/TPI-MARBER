import React, { useContext } from "react";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { useNavigate } from "react-router-dom";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";

import "./DeleteUserPrompt.css";

const DeleteUserPrompt = ({ onCancelAlert }) => {
  const { registeredUser, removeRegisteredUser } = useContext(
    RegisteredUserContext
  );
  const { setCustomersHandle } = useContext(CustomersContext);

  const navigation = useNavigate();

  const id = registeredUser.id;

  const url = `https://www.apimarber.somee.com/marber/ClientController/DeleteClient/${id}`;

  const closeAlertHandler = () => {
    onCancelAlert(false);
    console.log(id);
  };

  const deleteAccountHandler = () => {
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      refer: "*",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setCustomersHandle(response))
      .catch((error) => console.log(error));
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
