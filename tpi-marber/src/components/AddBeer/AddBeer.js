import React, { useState, useRef } from 'react'
import "./AddBeer.css"

const AddBeer = ({ handleAddBeer, beers }) => {
    // const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [style, setStyle] = useState("");
    const [price, setPrice] = useState("");

    const [error, setError] = useState([{text: "Ninguno de los campos puede ser vacio", isError: false}]);

    // const idRef = useRef(null);
    const nameRef = useRef(null);
    const styleRef = useRef(null);
    const priceRef = useRef(null);

    // const changeIdHandler = (event) => {
    //     setId(event.target.value);
    // };

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
        //id: beers.length + 1,
        beerName: name,
        beerStyle: style,
        beerPrice: price
    }

    const url = 'https://localhost:7160/marber/BeerController/AddBeer';

    const addBeerHandler = (event) => {
        event.preventDefault();
        if ( name.length === 0 || style.length === 0 || price.length === 0) {
            // if (id.length === 0 || id < 0){
            // idRef.current.focus();
            // idRef.current.style.borderColor = "red";
            // idRef.current.style.outline = "none";
            // }
            if (name.length === 0 ){
                nameRef.current.focus();
                nameRef.current.style.borderColor = "red";
                nameRef.current.style.outline = "none";
            }
            if (style.length === 0 ){
                styleRef.current.focus();
                styleRef.current.style.borderColor = "red";
                styleRef.current.style.outline = "none";
            }
            if (price.length === 0 ){
                priceRef.current.focus();
                priceRef.current.style.borderColor = "red";
                priceRef.current.style.outline = "none";
 
            }
            const newError = [...error]
            newError[0].isError = true;
            setError(newError);
            return;
        }

        
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(beer)
        })
            .then(response => response.json())
            .then((beerData) => handleAddBeer(beerData))
            
            .catch((error) => console.log(error));
        setName("");
        setStyle("");
        setPrice("");
        nameRef.current.value = "";
        styleRef.current.value = "";
        priceRef.current.value = "";
    }

    return (
        <>
        <form>
            <div className="form-add-beer">

                {/* <div className="form-add-beers">
                    <label>Id</label>
                    <input
                        onChange={changeIdHandler}
                        type="number"
                        className="input-control"
                        min="1"
                        ref={idRef}
                    />
                </div> */}
                <div className="form-add-beers">
                    <label>Nombre</label>
                    <input
                        onChange={changeNameHandler}
                        type="text"
                        className="input-control"
                        ref={nameRef}
                    />
                </div>
                <div className="form-add-beers">
                    <label>Estilo</label>
                    <input
                        onChange={changeStyleHandler}
                        type="text"
                        className="input-control"
                        ref={styleRef}
                    />
                </div>
                <div className="form-add-beers">
                    <label>Precio</label>
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
            <button type="button" class="btn btn-success" onClick={addBeerHandler}>Agregar</button>
        </form>
        </>
    )
}

export default AddBeer