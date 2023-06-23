import React, { useContext, useState } from "react";
import CardBeer from "../CardBeer/CardBeer";
import { Button } from "react-bootstrap";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import { useNavigate } from "react-router";
import { CartContext } from "../context/ShoppingCartContext/ShoppingCartContext";
import ModifyBeer from "../ModifyBeer/ModifyBeer";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./BeerItem.css";

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
  const { addToCart, removeItem } = useContext(CartContext);

  const { registeredUser } = useContext(RegisteredUserContext);

  const type = registeredUser.role;
  const success = registeredUser.success;

  // const handleDeleteBeer3 = (beersValue) => {
  //   console.log("beersitem");
  //   handleDeleteBeer2(beersValue);
  // }

  const deleteBeerHandle = () => {
    const url = `https://localhost:7160/marber/BeerController/deletebeerbyid/${id}`;

    fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => handleDeleteBeer2(response))
      .catch((error) => console.log(error));
  };

  // const addToCarryHandle = () => {
  //   if (success === true) {
  //     alert("Todo lo que hace neri");
  //   } else {
  //     alert("PRIMERO DEBES INICIAR SESION");
  //     navigation("/login");
  //   }
  // };

  // const notify = () =>
  //   toast.error("Error no se inicio sesion", {
  //     position: "top-left",
  //     autoClose: 5000,
  //     hideProgressBar: true,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //   });

  const addToCartHandler = (event) => {
    if (success === true) {
      const item = {
        id: id,
        name: beerName,
        style: beerStyle,
        price: beerPrice,
        quantity: 0,
      };
      addToCart(item);
    } else {
      // notify();
      navigation("/login");
    }
  };

  const seeModifyBeer = () => {
    setModify(true);
  };

  // const removeItemHandler = (event) => {
  //   const item = {
  //     id: id,
  //   };
  //   removeItem(item);
  // };

  const setModifyPriceHandle = (bool, newPrice) => {
    setPriceActually(newPrice);
    setModify(bool);
  };

  return (
    <div id="back">
      <CardBeer>
        {(type === "admin" || type === "superadmin") && (
          <button id="danger" type="button" onClick={deleteBeerHandle}>
            <span class="text">Borrar</span>
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
        {/* <button type="button" class="btn btn-danger">X</button> */}
        <h2>{beerName}</h2>
        <img
          id="img"
          src="https://cdn-icons-png.flaticon.com/512/106/106564.png"
          width="100px"
          height="100px"
        />
        <h3>{beerStyle}</h3>
        <p>$ {priceActually}</p>
        <div>
          <Button
            id="buy"
            className="btn btn-success m-2"
            onClick={addToCartHandler}
          >
            <span>Agregar al carrito</span>
          </Button>
          {/* <Button className="btn btn-danger m-2" onClick={removeItemHandler}>
          -
        </Button> */}
        </div>
        {/* <button type="button" class="btn btn-info">Modificar</button> */}
        <Button id="info" className="btn btn-info m-2">
          <span>+ Info</span>
        </Button>
        {modify === true && (
          <ModifyBeer id={id} setModifyPriceHandle={setModifyPriceHandle} />
        )}
        {(type === "admin" || type === "superadmin") && modify === false && (
          <button id="modify" type="button" onClick={seeModifyBeer}>
            Modificar $
          </button>
        )}
      </CardBeer>
      {/* <ToastContainer />; */}
    </div>
  );
};

export default BeerItem;
