import React, { useContext } from "react";
import CardBeer from "../CardBeer/CardBeer";
import { Button } from "react-bootstrap";
import { CartContext } from "../../contexts/ShoppingCartContext";

const BeerItem = ({ id, beerName, beerImage, beerStyle, beerPrice }) => {
  const { addToCart } = useContext(CartContext);

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

  return (
    <CardBeer>
      <h2>{beerName}</h2>
      <img src={beerImage} width="100px" height="100px" alt="beer"></img>
      <h3>{beerStyle}</h3>
      <p>{beerPrice}</p>
      <Button onClick={addToCartHandler} className="btn btn-success m-2">
        Add to cart
      </Button>
      <Button className="btn btn-info m-2">+ Info</Button>
    </CardBeer>
  );
};

export default BeerItem;
