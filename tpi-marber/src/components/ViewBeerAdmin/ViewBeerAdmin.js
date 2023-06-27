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

  const { theme } = useContext(ThemeContext);

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
      <ul>
        {addBeer === false && <li><button type="button" className={`button-add-user ${theme === "dark" && "button-add-user-dark"
          }`} onClick={seeAddBeerHandle} >Nueva cerveza</button></li>}
        {addBeer === true && <li><button type="button" className={`button-add-user ${theme === "dark" && "button-add-user-dark"
          }`} onClick={hideAddBeerHandle} >Cerrar</button></li>}
      </ul>
      {addBeer === true && <AddBeer handleAddBeer={handleAddBeer} beers={beers} />}
      <Beers beers={beers} getBeers={getBeers} handleDeleteBeer1={handleDeleteBeer} />
      <Footer />
    </div>
  )
}

export default ViewBeerAdmin