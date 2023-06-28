import React, { useContext } from 'react'
import "./CardBeer.css";
import { ThemeContext } from '../context/Theme/Theme';

const CardBeer = ({children}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`beer-item-container ${theme === "dark" && "beer-item-container-dark"
      }`}>{children}</div>
  )
}

export default CardBeer