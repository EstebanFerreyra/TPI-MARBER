import React, { useContext, useState } from 'react'
import AddBeer from '../AddBeer/AddBeer'
import Beers from '../Beers/Beers'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import "./ViewBeerAdmin.css"
import { ThemeContext } from '../context/Theme/Theme'

const ViewBeerAdmin = () => {
  const [beers, setBeers] = useState([]);
  const [addBeer, setAddBeer] = useState(false);
  const [filter, setFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [minPrice, setMinPrice] = useState(0);
  const [filters, setFilters] = useState(false);

  const { theme } = useContext(ThemeContext);

  const changeBeersFilteredHandle = (event) => {
    setFilter(event.target.value);
  }

  const changeMaxPricedHandle = (event) => {
    setMaxPrice(event.target.value);
    if (event.target.value === "") {
      setMaxPrice(10000);
    }
  }

  const changeMinPricedHandle = (event) => {
    setMinPrice(event.target.value);
    if (event.target.value === "") {
      setMinPrice(0);
    }
  }

  const isFiltersHandle = () => {
    if (filters === true) {
      setFilters(false);
    } else {
      setFilters(true);
    }
  }

  const seeAddBeerHandle = () => {
    setAddBeer(true);
  }

  const hideAddBeerHandle = () => {
    setAddBeer(false);
  }

  const getBeers = (beersValue) => {
    setBeers(beersValue);
  }

  const handleAddBeer = (beer) => {
    setBeers([...beers, beer]);
  }

  const handleDeleteBeer = (beersValue) => {
    console.log("en vista");
    setBeers(beersValue);
  }

  return (
    <div className={` ${theme === "dark" && "container-view"
      }`}>
      <NavBar />

      {
        addBeer === true && <div className='div-add-beer'><AddBeer handleAddBeer={handleAddBeer} beers={beers} /></div>}
      {filters === false && addBeer === false && <button type="button" className={`button-add-user ${theme === "dark" && "button-add-user-dark"
        }`} onClick={seeAddBeerHandle} >Nueva cerveza</button>}
      {addBeer === true && <button type="button" className={`button-add-user ${theme === "dark" && "button-add-user-dark"
        }`} onClick={hideAddBeerHandle} >Cerrar</button>}
      {addBeer === false && filters === false && <button onClick={isFiltersHandle} className={`button-add-user ${theme === "dark" && "button-add-user-dark"
        }`}>FILTRAR</button>}
      {filters === true && <button onClick={isFiltersHandle} className={`button-add-user ${theme === "dark" && "button-add-user-dark"
        }`}>ESCONDER</button>}
      {filters === true && <select onChange={changeBeersFilteredHandle} className={`button-add-user ${theme === "dark" && "button-add-user-dark"
        }`} id='select-style'>
        <option value="">Seleccione un estilo</option>
        <option value="Roja">ROJA</option>
        <option value="Rubia">RUBIA</option>
        <option value="Negra">NEGRA</option>
        <option value="IPA">IPA</option>
        <option value="APA">APA</option>
      </select>}
      {filters === true && <input type='number' onChange={changeMaxPricedHandle} className={`button-add-user ${theme === "dark" && "button-add-user-dark"
        }`} id='select-style' placeholder='Precio maximo' />}
      {filters === true && <input type='number' onChange={changeMinPricedHandle} className={`button-add-user ${theme === "dark" && "button-add-user-dark"
        }`} id='select-style' placeholder='Precio minimo' />}

      <Beers beers={beers} filter={filter} maxPrice={maxPrice} minPrice={minPrice} getBeers={getBeers} handleDeleteBeer1={handleDeleteBeer} />
      <Footer />
    </div>
  )
}

export default ViewBeerAdmin