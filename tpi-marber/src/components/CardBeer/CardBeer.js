import React from 'react'
import "./CardBeer.css";

const CardBeer = ({children}) => {
  return (
    <div className="book-item-container">{children}</div>
  )
}

export default CardBeer