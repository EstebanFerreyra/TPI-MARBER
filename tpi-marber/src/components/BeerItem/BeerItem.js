import React, { useContext } from "react";
import CardBeer from "../CardBeer/CardBeer";
import { Button } from "react-bootstrap";
import { CartContext } from "../../contexts/ShoppingCartContext";

const BeerItem = ({ id, beerName, beerImage, beerStyle, beerPrice }) => {
  const { addToCart, removeItem, increaseQuantity } = useContext(CartContext);

  const addToCartHandler = (event) => {
    const item = {
      id: id,
      name: beerName,
      style: beerStyle,
      price: beerPrice,
      quantity: 0,
    };
    addToCart(item);
    console.log(item);
  };

  const removeItemHandler = (event) => {
    const item = {
      id: id,
      name: beerName,
      style: beerStyle,
      price: beerPrice,
      quantity: 0,
    };
    removeItem(item);
  };

  const increaseHandler = (id) => {
    increaseQuantity(id);
  };

  return (
    <CardBeer>
      <h2>{beerName}</h2>
      <img src={beerImage} width="100px" height="100px" alt="beer"></img>
      <h3>{beerStyle}</h3>
      <p>{beerPrice}</p>
      <Button onClick={addToCartHandler} className="btn btn-success m-2">
        Add to cart
      </Button>
      <Button onClick={removeItemHandler} className="btn btn-danger m-0">
        Remove
      </Button>
      {/* <button onClick={increaseHandler}>+</button> */}
      <Button className="btn btn-info m-2">+ Info</Button>
    </CardBeer>
  );
};

export default BeerItem;
