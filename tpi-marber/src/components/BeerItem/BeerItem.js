import React, { useContext } from "react";
import CardBeer from "../CardBeer/CardBeer";
import { Button } from "react-bootstrap";
import { CartContext } from "../../contexts/ShoppingCartContext";
//import CartItems from "../CartItems/CartItems";

const BeerItem = ({ beerId, beerName, beerImage, beerStyle, beerPrice }) => {
  const { addToCart } = useContext(CartContext);

  const addToCartHandler = (beer) => {
    let item = {
      key: beerId,
      name: beerName,
      style: beerStyle,
      price: beerPrice,
      quantity: 0,
    };
    addToCart(item);
    //<CartItems onAddToSummary={itemArmado} />;
  };

  return (
    <CardBeer>
      <div key={beerId}>
        <h2>{beerName}</h2>
        <img src={beerImage} width="100px" height="100px" alt="beer"></img>
        <h3>{beerStyle}</h3>
        <p>{beerPrice}</p>
        <Button onClick={addToCartHandler} className="btn btn-success m-2">
          Add to cart
        </Button>
        <Button className="btn btn-info m-2">+ Info</Button>
      </div>
    </CardBeer>
  );
};

export default BeerItem;
