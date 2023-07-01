import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/Theme/Theme";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";

import "./ProfileCard.css";
import DeleteUserPrompt from "../DeleteUserPrompt/DeleteUserPrompt";

const ProfileCard = () => {
  const [userInfo, setUserInfo] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const { theme } = useContext(ThemeContext);

  const setUserInfoHandler = (data) => {
    setUserInfo(data);
    console.log(userInfo);
  };

  let url = `https://www.apimarber.somee.com/marber/ClientController/GetCustomers`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      mode: "cors",
      refer: "*",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserInfoHandler(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUserHandler = () => {
    setOpenAlert(true);
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
        />
      </div>
      <div className="card-p-body">
        <h3>Mis datos</h3>
        <h5>UserName</h5>
        <h5>UserEmail</h5>
        <div>
          <button
            type="button"
            onClick={deleteUserHandler}
            className="delete-account"
          >
            <span className="text">Borrar</span>
            <span class="icon">
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
