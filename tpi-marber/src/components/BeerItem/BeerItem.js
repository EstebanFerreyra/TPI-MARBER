import React, { useContext } from "react";
import CardBeer from "../CardBeer/CardBeer";
import { Button } from "react-bootstrap";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { DeleteBeer } from "../DeleteBeer/DeleteBeer";
import { useNavigate } from "react-router";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";

const BeerItem = ({
  id,
  key,
  beerName,
  beerStyle,
  beerPrice,
  handleDeleteBeer2,
}) => {
  const { addToCart, removeItem } = useContext(CartContext);

  const navigation = useNavigate();

  const userRegisteredLocal = useContext(RegisteredUserContext);

  const type = userRegisteredLocal.registeredUser.role;
  const success = userRegisteredLocal.registeredUser.success;

  const handleDeleteBeer3 = (beersValue) => {
    console.log("beersitem");
    handleDeleteBeer2(beersValue);
  };

  const deleteBeerHandle = () => {
    DeleteBeer(key, handleDeleteBeer3);
  };

  // const addToCarryHandle = () => {
  //   if (success === true) {
  //     alert("Todo lo que hace neri");
  //   } else {
  //     alert("PRIMERO DEBES INICIAR SESION");
  //     navigation("/login");
  //   }
  // };

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

  return (
    <CardBeer>
      {(type === "admin" || type === "superadmin") && (
        <button type="button" class="btn btn-danger" onClick={deleteBeerHandle}>
          X
        </button>
      )}
      {/* <button type="button" class="btn btn-danger">X</button> */}
      <h2>{beerName}</h2>
      <img
        src="https://cdn-icons-png.flaticon.com/512/106/106564.png"
        width="100px"
        height="100px"
      ></img>
      <h3>{beerStyle}</h3>
      <p>$ {beerPrice}</p>
      <div className="d-flex">
        <Button className="btn btn-success m-2" onClick={addToCartHandler}>
          Add to cart
        </Button>
        <Button className="btn btn-danger m-2" onClick={removeItemHandler}>
          x
        </Button>
      </div>
      {/* <button type="button" class="btn btn-info">Modificar</button> */}
      {(type === "admin" || type === "superadmin") && (
        <button type="button" class="btn btn-info">
          Modificar
        </button>
      )}
      <Button className="btn btn-info m-2">+ Info</Button>
    </CardBeer>
  );
};

export default BeerItem;
