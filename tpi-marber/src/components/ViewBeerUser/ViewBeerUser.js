import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Beers from '../Beers/Beers'
import Footer from '../Footer/Footer'

const ViewBeerUser = () => {
  const [beers, setBeers] = useState([])

  const getBeers = (beersValue) => {
    setBeers(beersValue);
  }

  return (
    <>
        <NavBar/>
        <Beers beers={beers} getBeers={getBeers}/> 
        <Footer/>
    </>
  )
}

export default ViewBeerUser