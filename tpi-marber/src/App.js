import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import ApiConnection from "./components/ApiConnection/ApiConnection";
import Beers from "./components/Beers/Beers";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/routes/NotFound";
import HomeMarber from "./components/HomeMarber/HomeMarber";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login";
import { AuthProvider } from "./context/AuthContext";
function App() {
  // return (
  //   <div className="App">
  //     <NavBar></NavBar>
  //     <Carousel />
  //     <Beers/>
  //   </div>
  // );

  const router = createBrowserRouter([
    {
      path: "/",
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
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
