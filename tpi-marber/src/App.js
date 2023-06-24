import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/routes/NotFound";
import HomeMarber from "./components/HomeMarber/HomeMarber";
import ViewBeerAdmin from "./components/ViewBeerAdmin/ViewBeerAdmin";
import ViewAboutUs from "./components/ViewAboutUs/ViewAboutUs";
import ViewLogin from "./components/ViewLogin/ViewLogin";
import ViewBeerUser from "./components/ViewBeerUser/ViewBeerUser";
import RegisteredUserContextProvider, {
  RegisteredUserContext,
} from "./components/context/RegisteredUserContext/RegisteredUserContext";
import Protected from "./components/Protected/Protected";
import { ShoppingCartProvider } from "./components/context/ShoppingCartContext/ShoppingCartContext";
import Orders from "./components/Orders/Orders";
import ViewSuperAdmin from "./components/ViewSuperAdmin/ViewSuperAdmin";
import CustomersContextProvider, {
  CustomersContext,
} from "./components/context/CustomersContext/CustomersContext";
import CartItems from "./components/CartItems/CartItems";
import ViewRegister from "./components/ViewRegister/ViewRegister";

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
      path: "/singin",
      element: <ViewLogin />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
