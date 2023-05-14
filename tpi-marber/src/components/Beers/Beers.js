import React, { useEffect, useState } from 'react'
import BeerItem from '../BeerItem/BeerItem'
import "./Beers.css"
import NotFound from '../routes/NotFound'

const Beers = () => {
    const [beers, setBeers] = useState([])

    const url = 'https://localhost:7160/marber/BeerController/GetBeers'
    useEffect(() => {
        fetch(url, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(setBeers);
      }, [])

    const beersMapped = beers
        .map((beer) =>        
            <BeerItem
                key={beer.id}
                beerName={beer.beerName}
                beerStyle={beer.beerName}
                beerPrice={beer.beerName}
            />
        )

  return (
    <div className="beers">
        {beersMapped.length === 0 ? (
            <NotFound/>
        ) : (
            beersMapped
        )}
    </div>
  )
}

export default Beers