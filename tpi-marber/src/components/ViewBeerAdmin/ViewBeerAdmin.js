import React, { useState, useContext } from 'react'
import { RegisteredUserContext } from '../context/RegisteredUserContext/RegisteredUserContext';

import AddBeer from '../AddBeer/AddBeer'
import Beers from '../Beers/Beers'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'
//import { useNavigate } from "react-router"

//import DeleteBeer from '../DeleteBeer/DeleteBeer'
//import ModifyBeer from '../ModifyBeer/ModifyBeer'

const ViewBeerAdmin = () => {
  const [beers, setBeers] = useState([]);
  const [addBeer, setAddBeer] = useState(false);

  const {registeredUser} = useContext(RegisteredUserContext);

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

  // const handleModifyBeer = (beersValue) => {
  //   setBeers(beersValue);
  // }

  const handleDeleteBeer = (beersValue) => {
    console.log("en vista");
    setBeers(beersValue);
  }

  return (
    <>
      <NavBar />
      {/* para super usuario */}
      <ul>
        {addBeer === false && <li><button type="button" className="btn btn-primary" onClick={seeAddBeerHandle}>Nueva cerveza</button></li>}
        {addBeer === true && <li><button type="button" className="btn btn-secondary" onClick={hideAddBeerHandle}>Volver</button></li>}
      </ul>
      {addBeer === true && <AddBeer handleAddBeer={handleAddBeer} beers={beers} />}
      {/* <ModifyBeer handleModifyBeer={handleModifyBeer}/>
        <DeleteBeer handleDeleteBeer={handleDeleteBeer}/> */}
      <Beers beers={beers} getBeers={getBeers} handleDeleteBeer1={handleDeleteBeer} />
      <Footer />
    </>
  )
}

export default ViewBeerAdmin