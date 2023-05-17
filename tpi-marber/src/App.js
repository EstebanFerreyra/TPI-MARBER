import "./App.css";
import Beers from "./components/Beers/Beers";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/routes/NotFound";
import HomeMarber from "./components/HomeMarber/HomeMarber";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeMarber />,
    },
    {
      path: "/home",
      element: <HomeMarber />,
    },
    {
      path: "/beers",
      element: <Beers />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/buying",
      element: <ShoppingCart />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <ThemeContextProvider>
      <ShoppingCartProvider>
        <RouterProvider router={router} />
      </ShoppingCartProvider>
    </ThemeContextProvider>
  );
}

export default App;
