import React, { useState, useEffect } from 'react'
export const CustomersContext = React.createContext([]);


const CustomersContextProvider = ({children}) => {
    const [customers, setCustomers] = useState([]);

    const url = 'http://www.apimarber.somee.com/marber/ClientController/GetCustomers';

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((data) => {
                setCustomersHandle(data);
            })
            .catch((error) => console.log(error));
    }, [])


    const setCustomersHandle = (data) => {
        setCustomers(data);
    }

    return (
        <CustomersContext.Provider value={{customers, setCustomersHandle}}>
            {children}
        </CustomersContext.Provider>
    )
}

export default CustomersContextProvider