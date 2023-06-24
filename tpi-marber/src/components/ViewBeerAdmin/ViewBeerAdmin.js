import React, { useState } from 'react'
import AddBeer from '../AddBeer/AddBeer'
import Beers from '../Beers/Beers'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

const ViewBeerAdmin = () => {
  const [beers, setBeers] = useState([]);
  const [addBeer, setAddBeer] = useState(false);

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
    <>
      <NavBar />
      <ul>
        {addBeer === false && <li><button type="button" className="btn btn-primary" onClick={seeAddBeerHandle}>Nueva cerveza</button></li>}
        {addBeer === true && <li><button type="button" className="btn btn-secondary" onClick={hideAddBeerHandle}>Volver</button></li>}
      </ul>
      {addBeer === true && <AddBeer handleAddBeer={handleAddBeer} beers={beers} />}
      <Beers beers={beers} getBeers={getBeers} handleDeleteBeer1={handleDeleteBeer} />
      <Footer />
    </>
  )
}

export default ViewBeerAdmin