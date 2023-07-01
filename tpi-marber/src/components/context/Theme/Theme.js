import { createContext, useState } from "react";

export const ThemeContext = createContext();
const preferenceTheme = localStorage.getItem("theme-preference");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(preferenceTheme || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const clearPreference = () => {
    setTheme("light");
    localStorage.removeItem("theme-preference");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, clearPreference }}>
      {children}
    </ThemeContext.Provider>
  );
};
