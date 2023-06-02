import React, { useEffect, useState } from "react";
import BeerItem from "../BeerItem/BeerItem";
import "./Beers.css";
import NotFound from "../routes/NotFound";
import NavBar from "../NavBar/NavBar";
import BeerFilter from "../BeerFilter/BeerFilter";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [filterStyle, setFilterStyle] = useState("");

  const url = "https://localhost:7160/marber/BeerController/GetBeers";
  useEffect(() => {
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  const beersMapped = beers
    //.filter((beer) => beer.beerStyle === filterStyle[0] || filterStyle[1])
    .map((beer) => (
      <BeerItem
        key={beer.id}
        id={beer.id}
        beerName={beer.beerName}
        beerImage={beer.beerImage}
        beerStyle={beer.beerStyle}
        beerPrice={beer.beerPrice}
      />
    ));

  const filterStyleChanged = (style) => {
    setFilterStyle(style);
    console.log(filterStyle);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <BeerFilter
        filterStyle={filterStyle}
        onFilterStyleChange={filterStyleChanged}
      />

      <div className="beers">
        {beersMapped.length === 0 ? <NotFound /> : beersMapped}
      </div>
    </div>
  );
};

export default Beers;
