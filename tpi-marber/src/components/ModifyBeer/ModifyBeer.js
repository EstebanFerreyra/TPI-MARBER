import React, { useState, useRef } from 'react'
import "../AddBeer/AddBeer.css"

const ModifyBeer = ({ handleModifyBeer }) => {
    const [id, setId] = useState("");
    const [price, setPrice] = useState("");

    const [error, setError] = useState([{ text: "Ninguno de los campos puede ser vacio", isError: false }]);

    const idRef = useRef(null);
    const priceRef = useRef(null);

    const changeIdHandler = (event) => {
        setId(event.target.value);
    };

    const changePriceHandler = (event) => {
        setPrice(event.target.value);
    };

    const url = `https://localhost:7160/marber/BeerController/ModifyBeerById/${id}`;

    const modifyBeerHandler = (event) => {
        event.preventDefault();
        if (id.length === 0 || price.length === 0) {
            if (id.length === 0 || id < 0){
            idRef.current.focus();
            idRef.current.style.borderColor = "red";
            idRef.current.style.outline = "none";
            }
            if (price.length === 0){
                priceRef.current.focus();
                priceRef.current.style.borderColor = "red";
                priceRef.current.style.outline = "none";
            }
            const newError = [...error];
            newError[0].isError = true;
            setError(newError);
            return;
        }

        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(price)
        })
            .then(response => response.json())
            .then(response => handleModifyBeer(response))
    }
  return (
    <>
         <div className="form-add-beer">
                <div className="form-add-beers">
                    <label>Id</label>
                    <input
                        onChange={changeIdHandler}
                        type="number"
                        className="input-control"
                        min="1"
                        ref={idRef}
                    />
                </div>
                <div className="form-add-beers">
                    <label>Nuevo Precio</label>
                    <input
                        onChange={changePriceHandler}
                        type="text"
                        className="input-control"
                        min="1"
                        ref={priceRef}
                    />
                </div>
            </div>
            {error[0].isError && <p>{error[0].text}</p>}
            <button onClick={modifyBeerHandler}>MODIFICAR</button>
    </>
  )
}

export default ModifyBeer