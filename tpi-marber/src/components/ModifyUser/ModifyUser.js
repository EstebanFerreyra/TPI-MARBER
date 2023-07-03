import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";

import "./ModifyUser.css";

const ModifyUser = ({ id, onModified }) => {
  const [newUser, SetNewUser] = useState("");

  const { setCustomersHandle } = useContext(CustomersContext);

  const changeNewUserHandler = (event) => {
    SetNewUser(event.target.value);
  };

  const onModifiedHandler = () => {
    if (newUser === "") {
      toast.error("Por favor, complete el campo", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    onModified(false);
    console.log(id);
    let url = `https://www.apimarber.somee.com/marber/ClientController/ModifyUserById/${id}`;
    fetch(url, {
      method: "PUT",
      mode: "cors",
      refer: "*",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setCustomersHandle(response))
      .catch((error) => console.log(error));

    toast.success("Nombre modificado con éxito", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <input placeholder="nuevo user" onChange={changeNewUserHandler} />
      <button className="mfy-user-btn" onClick={onModifiedHandler}>
        Confirmar user
      </button>
    </div>
  );
};

export default ModifyUser;
