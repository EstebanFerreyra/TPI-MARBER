import "./App.css";
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


  //return <RouterProvider router={router}/>
  return (
    <CustomersContextProvider CustomersContext={CustomersContext}>
      <RegisteredUserContextProvider
        RegisteredUserContext={RegisteredUserContext}
      >
        <ShoppingCartProvider>
          <RouterProvider router={router} />
        </ShoppingCartProvider>
      </RegisteredUserContextProvider>
    </CustomersContextProvider>
  );
}

export default App;
