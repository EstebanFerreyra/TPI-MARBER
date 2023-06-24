import React, { useState, useRef } from 'react'
import "../AddBeer/AddBeer.css"

const ModifyBeer = ({ id, setModifyPriceHandle }) => {
    const [price, setPrice] = useState("");
    const [error, setError] = useState([{ text: "Ninguno de los campos puede ser vacio", isError: false }]);

    const priceRef = useRef(null);

    const changePriceHandler = (event) => {
        setPrice(event.target.value);
    };

    const url = `https://localhost:7160/marber/BeerController/ModifyBeerById/${id}`;

    const modifyBeerHandler = (event) => {
        event.preventDefault();
        if (price.length === 0) {
            if (price.length === 0) {
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
            .catch(error => console.log(error));
        setModifyPriceHandle(false, price);
    }
    return (
        <>

            <label>Nuevo Precio</label>
            <input
                onChange={changePriceHandler}
                type="text"
                className="input-control"
                min="1"
                ref={priceRef}
            />

            <button onClick={modifyBeerHandler}>MODIFICAR</button>
        </>
    )
}

export default ModifyBeer