import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { APIContextProvider } from './components/context/Api/api.context';
import CustomersContextProvider, { CustomersContext } from './components/context/CustomersContext/CustomersContext';
import RegisteredUserContextProvider, { RegisteredUserContext } from './components/context/RegisteredUserContext/RegisteredUserContext';
import { ShoppingCartProvider } from './components/context/ShoppingCartContext/ShoppingCartContext';
import { ToastContainer } from "react-toastify";
import "./index.css";
import { ThemeContextProvider } from './components/context/Theme/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <APIContextProvider>
      <CustomersContextProvider CustomersContext={CustomersContext}>
        <ThemeContextProvider>
        <RegisteredUserContextProvider
          RegisteredUserContext={RegisteredUserContext}
        >
          <ShoppingCartProvider>
            <ToastContainer
              position="top-left"
              autoClose={5000}
              limit={5}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
              <App />
          </ShoppingCartProvider>
        </RegisteredUserContextProvider>
        </ThemeContextProvider>
      </CustomersContextProvider>
    </APIContextProvider>
  </React.StrictMode>
);


