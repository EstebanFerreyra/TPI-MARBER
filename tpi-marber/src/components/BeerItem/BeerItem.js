import BeerCard from "../ProductsCard/BeerCard";

const BeerItem = ({ beerImage, beerTitle, beerDescription, beerPrice }) => {
  return (
    <BeerCard>
      <div class="card" style={{ width: "18rem" }}>
        <img src={beerImage} class="card-img-top" alt="BeerProduct" />
        <div class="card-body">
          <h5 class="card-title">{beerTitle}</h5>
          <p class="card-text">{beerDescription}</p>
        </div>
        <div class="card-body">
          <button href="#" class="card-link">
            Añadir al Carrito
          </button>
          <h7 href="#" class="card-link">
            ${beerPrice}
          </h7>
        </div>
      </div>
    </BeerCard>
  );
};

export default BeerItem;
