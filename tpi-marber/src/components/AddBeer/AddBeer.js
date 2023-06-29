import React, { useState, useRef, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./AddBeer.css";
import { ThemeContext } from "../context/Theme/Theme";

const AddBeer = ({ handleAddBeer, beers }) => {
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState([
    { text: "Ninguno de los campos puede ser vacio", isError: false },
  ]);

  const nameRef = useRef(null);
  const styleRef = useRef(null);
  const priceRef = useRef(null);

  const { theme } = useContext(ThemeContext);

  const changeNameHandler = (event) => {
    nameRef.current.style.borderColor = "";
    nameRef.current.style.outline = "";
    setName(event.target.value);
  };

  const changeStyleHandler = (event) => {
    styleRef.current.style.borderColor = "";
    styleRef.current.style.outline = "";
    setStyle(event.target.value);
  };

  const changePriceHandler = (event) => {
    priceRef.current.style.borderColor = "";
    priceRef.current.style.outline = "";
    setPrice(event.target.value);
  };

  const beer = {
    beerName: name,
    beerStyle: style,
    beerPrice: price,
  };

  const url = "https://www.apimarber.somee.com/marber/BeerController/AddBeer";

  const addBeerHandler = (event) => {
    event.preventDefault();
    if (name.length === 0 || style.length === 0 || price.length === 0) {
      toast.error("Ningún campo debe estar vacío", {
        position: "top-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      if (name.length === 0) {
        nameRef.current.focus();
        nameRef.current.style.borderColor = "red";
        nameRef.current.style.outline = "none";
      }
      if (style.length === 0) {
        styleRef.current.focus();
        styleRef.current.style.borderColor = "red";
        styleRef.current.style.outline = "none";
      }
      if (price.length === 0) {
        priceRef.current.focus();
        priceRef.current.style.borderColor = "red";
        priceRef.current.style.outline = "none";
      }

      return;
    }

    fetch(url, {
      method: "POST",
      mode: "cors",
      refer: "*",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(beer),
    })
      .then((response) => response.json())
      .then((beerData) => handleAddBeer(beerData))

      .catch((error) => console.log(error));

    setName("");
    setStyle("");
    setPrice("");
    nameRef.current.value = "";
    styleRef.current.value = "";
    priceRef.current.value = "";
    const newError = [...error];
    newError[0].isError = false;
    setError(newError);
  };

  return (
    <>
      <form>
        <div className="form-add-beer">
          <div className="card card-inputs">
            <div className="form-add-beers">
              <input
                onChange={changeNameHandler}
                type="text"
                className={`input-control ${
                  theme === "dark" && "input-control-dark"
                }`}
                placeholder="Nombre"
                ref={nameRef}
              />
            </div>
            <div className="form-add-beers">
              <input
                onChange={changeStyleHandler}
                type="text"
                className={`input-control ${
                  theme === "dark" && "input-control-dark"
                }`}
                ref={styleRef}
                placeholder="Estilo"
              />
            </div>
            <div className="form-add-beers">
              <input
                onChange={changePriceHandler}
                type="number"
                className={`input-control ${
                  theme === "dark" && "input-control-dark"
                }`}
                min="1"
                ref={priceRef}
                placeholder="Precio"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className={`button-add-beer ${
            theme === "dark" && "button-add-beer-dark"
          }`}
          onClick={addBeerHandler}
        >
          Agregar
        </button>
      </form>
    </>
  );
};

export default AddBeer;
