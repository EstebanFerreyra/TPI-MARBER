import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/Theme/Theme";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import DeleteUserPrompt from "../DeleteUserPrompt/DeleteUserPrompt";
import { CustomersContext } from "../context/CustomersContext/CustomersContext";
import ModifyUser from "../ModifyUser/ModifyUser";

import "./ProfileCard.css";
import ModifyPassword from "../ModifyPassword/ModifyPassword";

const ProfileCard = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [userModify, setUserModify] = useState(false);
  const [passModify, setPassModify] = useState(false);

  const { theme } = useContext(ThemeContext);
  const { customers } = useContext(CustomersContext);
  const { registeredUser } = useContext(RegisteredUserContext);

  const idp = registeredUser.id;

  const deleteUserHandler = () => {
    setOpenAlert(true);
  };

  const modifyPassHandler = () => {
    setPassModify(true);
  };

  const modifyUserHandler = () => {
    setUserModify(true);
  };

  return (
    <div className={`profile-card ${theme === "dark" && "profile-card-dark"}`}>
      {openAlert && <DeleteUserPrompt onCancelAlert={setOpenAlert} />}
      <div className="card-p-header">
        <img
          src="https://img.icons8.com/?size=512&id=vrjuWgj4Ipxl&format=png"
          className="user-icon"
          width={110}
          height={110}
          alt="profile"
        />
      </div>
      <div className="card-p-body">
        <h3>Mis datos</h3>
        <div className="card-username">
          {/* {userModify === false && <h5>{registeredUser.user}</h5>} */}
          {userModify === false &&
            customers
              .filter((user) => user.id === idp)
              .map((user, index) => <h5 key={index}>{user.userBd}</h5>)}
          {userModify === false && (
            <button
              className={`username-button ${
                theme === "dark" && "username-button-dark"
              }`}
              onClick={modifyUserHandler}
            >
              <img
                src="https://img.icons8.com/?size=512&id=DOy2O4PRHgbL&format=png"
                width={20}
                height={20}
                alt="pencil"
              />
            </button>
          )}
          {userModify && <ModifyUser id={idp} onModified={setUserModify} />}
        </div>
        {customers
          .filter((user) => user.id === idp)
          .map((user, index) => (
            <h5 key={index}>{user.emailBd}</h5>
          ))}
        {passModify === false && (
          <p onClick={modifyPassHandler}>
            <u>Modificar contraseña</u>
          </p>
        )}
        {passModify && <ModifyPassword id={idp} onModified={setPassModify} />}
        <div>
          <button
            type="button"
            onClick={deleteUserHandler}
            className="delete-account"
          >
            <span className="text">Eliminar cuenta</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
