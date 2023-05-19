import React from 'react'
import CardBeer from '../CardBeer/CardBeer'
import { Button } from 'react-bootstrap'

const BeerItem = ({ beerName, beerStyle, beerPrice }) => {
  return (
    <CardBeer>
        <h2>{beerName}</h2>
        <img src='https://cdn-icons-png.flaticon.com/512/106/106564.png' width="100px" height="100px"></img>
        <h3>{beerStyle}</h3>
        <p>{beerPrice}</p>
        <Button className='btn btn-success m-2'>Agregar al carrito</Button>
        <Button className='btn btn-info m-2'>+ Info</Button>
    </CardBeer>
  )
}

export default BeerItem