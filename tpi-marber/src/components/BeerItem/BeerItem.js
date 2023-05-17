import React, { useContext } from "react";
import CardBeer from "../CardBeer/CardBeer";
import { Button } from "react-bootstrap";
import { CartContext } from "../../contexts/ShoppingCartContext";

const BeerItem = ({ beerId, beerName, beerImage, beerStyle, beerPrice }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currentItem) => {
      const itemFound = currentItem.find((item) => item.id === beerId);
      if (itemFound) {
        return currentItem.map((item) => {
          if (item.id === beerId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currentItem, { beerId, quantity: 1, beerPrice }];
      }
    });
  };

  return (
    <CardBeer>
      <div key={beerId}>
        <h2>{beerName}</h2>
        <img src={beerImage} width="120px" height="120px"></img>
        <h3>{beerStyle}</h3>
        <p>{beerPrice}</p>
        <Button onClick={addToCart} className="btn btn-success m-2">
          Agregar al carrito
        </Button>
        <Button className="btn btn-info m-2">+ Info</Button>
      </div>
    </CardBeer>
  );
};

export default BeerItem;
