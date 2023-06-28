import React, { useContext } from "react";
import "./Loader.css";
import { ThemeContext } from "../context/Theme/Theme";

const Loader = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <span className={`loader ${theme === "dark" && "loader-dark"}`}></span>
  );
};

export default Loader;
