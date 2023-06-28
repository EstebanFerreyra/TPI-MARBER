import React, { useContext, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Beers from '../Beers/Beers'
import Footer from '../Footer/Footer'
import { ThemeContext } from '../context/Theme/Theme'
import "./ViewBeeruser.css"

const ViewBeerUser = () => {
  const [beers, setBeers] = useState([])
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
    if(filters === true){
      setFilters(false);
    } else {
      setFilters(true);

    }
  }

  const getBeers = (beersValue) => {
    setBeers(beersValue);
  }

  return (
    <div className={` ${theme === "dark" && "container-view"
      }`}>
        <NavBar/>
      {filters === false && <button onClick={isFiltersHandle} className={`button-add-user ${theme === "dark" && "button-add-user-dark"
        }`}>FILTRAR</button> }
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
        }`} id='select-style' placeholder='Precio maximo'/>}
      {filters === true && <input type='number' onChange={changeMinPricedHandle} className={`button-add-user ${theme === "dark" && "button-add-user-dark"
        }`} id='select-style' placeholder='Precio minimo' />}
      <Beers beers={beers} filter={filter} maxPrice={maxPrice} minPrice={minPrice} getBeers={getBeers}/> 
        <Footer/>
    </div>
  )
}

export default ViewBeerUser