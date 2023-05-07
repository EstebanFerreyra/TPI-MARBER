import "./App.css";

import Navbar from "./components/NavBar/Navbar";
import Banner from "./components/Banner/Banner";
import Products from "./components/BeerItem/BeerItem";

const BEER = [
  {
    id: 1,
    image:
      "https://vinotecamasis.com.ar/wp-content/uploads/2022/01/Cerveza-Warsteiner-Lata-473-ml.png",
    title: "Warsteiner",
    description:
      "Warsteiner es una cerveza de origen Alemán tipo Pilsener, 100% malta. Está elaborada con ingredientes finos y naturales de acuerdo a la Ley de la Pureza Alemana.",
    price: 400,
  },
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar useTransparent />
        <Banner />
      </header>
      <Products BEER={BEER} />
    </div>
  );
};

export default App;
