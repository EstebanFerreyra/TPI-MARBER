import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/routes/NotFound';
import HomeMarber from './components/HomeMarber/HomeMarber';
import ViewBeerAdmin from './components/ViewBeerAdmin/ViewBeerAdmin';
import ViewAboutUs from './components/ViewAboutUs/ViewAboutUs';
import ViewLogin from './components/ViewLogin/ViewLogin';
import ViewBeerUser from './components/ViewBeerUser/ViewBeerUser';
import RegisteredUserContextProvider, { RegisteredUserContext } from './components/context/RegisteredUserContext/RegisteredUserContext';
import Protected from './components/Protected/Protected';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeMarber/>,
    },
    {
      path: "/beersadmin",
      element: <Protected><ViewBeerAdmin/></Protected>
    },
    {
      path: "/beers",
      element: <ViewBeerUser/>
    },
    {
      path: "/aboutus",
      element: <ViewAboutUs/>
    },
    {
      path: "/login",
      element: <ViewLogin/>
    },
    {
      path: "/singin",
      element: <ViewLogin/>
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])

  //return <RouterProvider router={router}/>
  return (
    <RegisteredUserContextProvider RegisteredUserContext={RegisteredUserContext}>
      <RouterProvider router={router}/>
    </RegisteredUserContextProvider>
  )

}

export default App;
