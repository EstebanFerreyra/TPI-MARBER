import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme/Theme";
import "./ToggleTheme.css";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const storageKey = "theme-preference";

  const onClick = () => {
    themee.value = themee.value === "light" ? "dark" : "light";

    setPreference();
  };

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  };

  const setPreference = () => {
    localStorage.setItem(storageKey, themee.value);
    reflectPreference();
  };

  const reflectPreference = () => {
    document.firstElementChild.setAttribute("data-theme", themee.value);

    document
      .querySelector("#theme-toggle")
      ?.setAttribute("aria-label", themee.value);
  };

  const themee = {
    value: getColorPreference(),
  };

  reflectPreference();

  window.onload = () => {
    reflectPreference();

    document.querySelector("#theme-toggle").addEventListener("click", onClick);
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches: isDark }) => {
      themee.value = isDark ? "dark" : "light";
      setPreference();
    });
  return (
    <>
      <div className="theme-container">
        <button
          className="theme-toggle-button"
          onClick={toggleTheme}
          variant={themee === "light" ? "dark" : "light"}
          //id="theme-toggle"
          title="Toggles light & dark"
          aria-label="auto"
          aria-live="polite"
        ></button>
        {theme === "light" ? (
          <img
            className="mmm"
            src="https://cdn-icons-png.flaticon.com/512/66/66275.png"
          />
        ) : (
          <img
            className="mmm"
            src="https://cdn-icons-png.flaticon.com/512/702/702471.png"
          />
        )}
      </div>
    </>
  );
};

export default ToggleTheme;
