import React, { useContext, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Beers from '../Beers/Beers'
import Footer from '../Footer/Footer'
import { ThemeContext } from '../context/Theme/Theme'

const ViewBeerUser = () => {
  const [beers, setBeers] = useState([])

  const { theme } = useContext(ThemeContext);

  const getBeers = (beersValue) => {
    setBeers(beersValue);
  }

  return (
    <div className={` ${theme === "dark" && "container-view"
      }`}>
        <NavBar/>
        <Beers beers={beers} getBeers={getBeers}/> 
        <Footer/>
    </div>
  )
}

export default ViewBeerUser