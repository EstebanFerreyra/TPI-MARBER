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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const auth = getAuth();

const firestore = getFirestore();

function App() {
  // return (
  //   <div className="App">
  //     <NavBar></NavBar>
  //     <Carousel />
  //     <Beers/>
  //   </div>
  // );
  async function getRol(uid) {
    const docuRef = doc(firestore, "usuarios/${uid}");
    const docCifred = await getDoc(docuRef);
    const infoFinal = docCifred.data();
  }

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      const userData = {
        uid: userFirebase.uid,
        email: userFirebase.email,
      };
      setUser(userData);
    } else {
      setUser(null);
    }
  });

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
