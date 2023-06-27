import React, { useContext, useState } from "react";
import CardBeer from "../CardBeer/CardBeer";
import { Button } from "react-bootstrap";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { useNavigate } from "react-router";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import ModifyBeer from "../ModifyBeer/ModifyBeer";
import { toast } from "react-toastify";
import "./BeerItem.css"
import { ThemeContext } from "../context/Theme/Theme";

const BeerItem = ({
  id,
  beerName,
  beerStyle,
  beerPrice,
  handleDeleteBeer2,
}) => {
  const [priceActually, setPriceActually] = useState(beerPrice);
  const [modify, setModify] = useState(false);

  const navigation = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { registeredUser } = useContext(RegisteredUserContext);
  const { theme } = useContext(ThemeContext);

  const type = registeredUser.role;
  const success = registeredUser.success;

  const deleteBeerHandle = () => {
    const url = `https://www.apimarber.somee.com/marber/BeerController/deletebeerbyid/${id}`;
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      refer: "*",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => handleDeleteBeer2(response))
      .catch((error) => console.log(error));
  };

  const addToCartHandler = (event) => {
    if (success === true) {
      toast.success("Producto agregado con éxito", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      const item = {
        id: id,
        name: beerName,
        style: beerStyle,
        price: beerPrice,
        quantity: 0,
      };
      addToCart(item);
    } else {
      toast.error("Error no se inicio sesion  Ingrese sesion primero", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigation("/login");
    }
  };

  const seeModifyBeer = () => {
    setModify(true);
  };

  const setModifyPriceHandle = (bool, newPrice) => {
    setPriceActually(newPrice);
    setModify(bool);
  };

  return (
    <div>
      <CardBeer>
        {(type === "admin" || type === "superadmin") && (
          <button type="button"  onClick={deleteBeerHandle} id="danger">
            <span className="text">Borrar</span>
            <span class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
        )}
        <h2>{beerName}</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/512/106/106564.png"
          width="100px"
          height="100px"
        ></img>
        <h3>{beerStyle}</h3>
        <p><strong>$ {priceActually}</strong></p>
        <div >
          <button className={`buy ${theme === "dark" && "buy-dark"
            }`} onClick={addToCartHandler} >
            <span c>Agregar al carrito</span>
          </button>
        </div>
        <Button className={`info ${theme === "dark" && "info-dark"
          }`} >
          <span>+ Info</span>
        </Button>
        {modify === true && (
          <ModifyBeer id={id} setModifyPriceHandle={setModifyPriceHandle} />
        )}
        {(type === "admin" || type === "superadmin") && modify === false && (
          <button type="button" onClick={seeModifyBeer} id="modify">
            Modificar
          </button>
        )}
        
      </CardBeer>
    </div>
  );
};

export default BeerItem;
