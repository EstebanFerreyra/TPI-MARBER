import "./Beer.css";

import BeerItem from "../BeerItem/BeerItem";

const Beer = ({ beer }) => {
  <BeerItem
    key={beer.id}
    beerImage={beer.image}
    beerTitle={beer.title}
    beerDescription={beer.description}
    beerPrice={beer.price}
  />;

  return (
    <div className="beers">{/* <p>No hay Productos disponibles</p> */}</div>
  );
};

export default Beer;
