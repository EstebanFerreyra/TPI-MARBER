import React from "react";

const ModifyUser = ({ onModified }) => {
  const onModifiedHandler = () => {
    onModified(false);
  };
  return (
    <div>
      <input placeholder="nuevo user" />
      <button onClick={onModifiedHandler}>confirmar user</button>
    </div>
  );
};

export default ModifyUser;
