import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "../AddBeer/AddBeer.css"
import "./ModifyBeer.css"

const ModifyBeer = ({ id, setModifyPriceHandle }) => {
    const [price, setPrice] = useState("");
    const [error, setError] = useState([{ text: "Ninguno de los campos puede ser vacio", isError: false }]);

    const priceRef = useRef(null);

    const changePriceHandler = (event) => {
        setPrice(event.target.value);
    };

    const url = `https://www.apimarber.somee.com/marber/BeerController/ModifyBeerById/${id}`;

    const modifyBeerHandler = (event) => {
        event.preventDefault();
        if (price.length === 0) {
            toast.error("Porfavor complete el campo", {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
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
            refer: "*",

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

           
            <input
                onChange={changePriceHandler}
                type="number"
                className="input-control"
                min="1"
                ref={priceRef}
                placeholder='Nuevo precio'
            />

            <button className="button-modify-class" onClick={modifyBeerHandler} id='button-modify'>Modificar</button>
        </>
    )
}

export default ModifyBeer