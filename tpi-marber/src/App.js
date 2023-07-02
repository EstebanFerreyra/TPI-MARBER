import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/routes/NotFound";
import HomeMarber from "./components/HomeMarber/HomeMarber";
import ViewBeerAdmin from "./components/ViewBeerAdmin/ViewBeerAdmin";
import ViewAboutUs from "./components/ViewAboutUs/ViewAboutUs";
import ViewLogin from "./components/ViewLogin/ViewLogin";
import ViewBeerUser from "./components/ViewBeerUser/ViewBeerUser";
import Protected from "./components/Protected/Protected";
import Orders from "./components/Orders/Orders";
import ViewSuperAdmin from "./components/ViewSuperAdmin/ViewSuperAdmin";
import CartItems from "./components/CartItems/CartItems";
import ViewRegister from "./components/ViewRegister/ViewRegister";
import Profile from "./components/Profile/Profile";
import BeerInfo from "./components/BeerInfo/BeerInfo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeMarber />,
    },
    {
      path: "/beersadmin",
      element: (
        <Protected>
          <ViewBeerAdmin />
        </Protected>
      ),
    },
    {
      path: "/beers",
      element: <ViewBeerUser />,
    },
    {
      path: "/aboutus",
      element: <ViewAboutUs />,
    },
    {
      path: "/users",
      element: (
        <Protected>
          <ViewSuperAdmin />
        </Protected>
      ),
    },
    {
      path: "/login",
      element: <ViewLogin />,
    },
    {
      path: "/register",
      element: <ViewRegister />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/buying",
      element: <CartItems />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/singin",
      element: <ViewLogin />,
    },
    {
      path: "/beerinfo",
      element: <BeerInfo />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
