import React, { useEffect, useContext } from "react";
import BeerItem from "../BeerItem/BeerItem";
import { APIContext } from "../context/Api/api.context";
import Loader from "../ui/Loader";
import "./Beers.css";

const Beers = ({
  beers,
  filter,
  maxPrice,
  minPrice,
  getBeers,
  handleDeleteBeer1,
}) => {
  const { toggleLoading } = useContext(APIContext);

  const url = "https://www.apimarber.somee.com/marber/BeerController/GetBeers";

  const handleDeleteBeer2 = (beersValue) => {
    handleDeleteBeer1(beersValue);
    console.log("beers");
  };

  useEffect(() => {
    toggleLoading(true);
    fetch(url, {
      method: "GET",
      mode: "cors",
      refer: "*",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        getBeers(data);
      })
      .catch((error) => console.log(error));
    toggleLoading(false);
  }, []);

  let beersMapped = "";
  if (filter === "") {
    beersMapped = beers
      .filter((beer) => beer.beerPrice < maxPrice)
      .filter((beer) => beer.beerPrice > minPrice)
      .map((beer) => (
        <BeerItem
          key={beer.id}
          id={beer.id}
          beerName={beer.beerName}
          beerStyle={beer.beerStyle}
          beerPrice={beer.beerPrice}
          handleDeleteBeer2={handleDeleteBeer2}
        />
      ));
  } else {
    beersMapped = beers
      .filter((beer) => beer.beerStyle === filter)
      .filter((beer) => beer.beerPrice < maxPrice)
      .filter((beer) => beer.beerPrice > minPrice)
      .map((beer) => (
        <BeerItem
          key={beer.id}
          id={beer.id}
          beerName={beer.beerName}
          beerStyle={beer.beerStyle}
          beerPrice={beer.beerPrice}
          handleDeleteBeer2={handleDeleteBeer2}
        />
      ));
  }

  return (
    <div className="beers">
      {beersMapped.length === 0 ? <Loader />: beersMapped}
    </div>
  );
};

export default Beers;
