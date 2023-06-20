import React, { useEffect , useState } from 'react'

const ApiConnection = () => {
  const url = 'https://localhost:7160/marber/BeerController/GetBeers'
  const [beers, setBeers] = useState()

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(setBeers)
  }, [])

  return (
    <div className="App">
    INTENTANDO CONECTARSE A API
    <ul>
    { !beers ? 'Cargando...' : 
    beers.map( (beer, index) => {
      return <li key={index}>{beer.nameBeer}</li>
    })}
    </ul>
  </div>
  )
}



export default ApiConnection