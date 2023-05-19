import "./App.css";

import Beers from "./components/Beers/Beers";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/routes/NotFound";
import HomeMarber from "./components/HomeMarber/HomeMarber";
import AboutUs from "./components/AboutUs/AboutUs";
import Login from "./components/Login/Login";
import { AuthProvider } from "./components/Login/context/AuthContext";
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
