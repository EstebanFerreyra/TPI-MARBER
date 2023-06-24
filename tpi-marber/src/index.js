import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { APIContextProvider } from './components/context/Api/api.context';
import CustomersContextProvider, { CustomersContext } from './components/context/CustomersContext/CustomersContext';
import RegisteredUserContextProvider, { RegisteredUserContext } from './components/context/RegisteredUserContext/RegisteredUserContext';
import { ShoppingCartProvider } from './components/context/ShoppingCartContext/ShoppingCartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <APIContextProvider>
      <CustomersContextProvider CustomersContext={CustomersContext}>
        <RegisteredUserContextProvider
          RegisteredUserContext={RegisteredUserContext}
        >
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </RegisteredUserContextProvider>
      </CustomersContextProvider>
    </APIContextProvider>
  </React.StrictMode>
);


