import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { ThemeContext } from "../context/Theme/Theme";

import "./BeerInfo.css";

const BeerInfo = () => {
  const { theme } = useContext(ThemeContext);

  const navigation = useNavigate();

  const goBackBeersHandler = () => {
    navigation("/beers");
  };

  return (
    <div>
      <NavBar />
      <div
        className={`beerinfo-container ${
          theme === "dark" && "beerinfo-container-dark"
        }`}
      >
        <button
          className={`button-add-user ${
            theme === "dark" && "button-add-user-dark"
          }`}
          onClick={goBackBeersHandler}
        >
          Volver
        </button>
        <div
          className={`beerinfo-card ${
            theme === "dark" && "beerinfo-card-dark"
          }`}
        >
          <div
            className={`beerinfo-text ${
              theme === "dark" && "beerinfo-text-dark"
            }`}
          >
            <img
              className="beerinfo-icon"
              src="https://images.vexels.com/media/users/3/190406/isolated/lists/c1c5347da679f53b3be1b888cf069506-icon-beer-bottles-design.png"
              alt="beer info"
            />
            <p>
              La Cerveza Roja Irlandesa se caracteriza por su color rojo
              cobrizo, su sabor suave y equilibrado, y sus notas de malta
              tostada y caramelo. Es una cerveza versátil que se puede disfrutar
              con una variedad de platos.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeerInfo;
