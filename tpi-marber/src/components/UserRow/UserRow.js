import React, { useContext } from 'react'
import { CustomersContext } from '../context/CustomersContext/CustomersContext';
import "./UserRow.css"

const UserRow = ({ id, user, email, role}) => {
    const { setCustomersHandle } = useContext(CustomersContext)
    const url = `http://www.apimarber.somee.com/marber/ClientController/DeleteClient/${id}`;

    const delteUserHandle = () => {
        fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => setCustomersHandle(response))
            .catch((error) => console.log(error));
    }

    return (
        <tr >
            <td>{id}</td>
            <td>{user}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td><button onClick={delteUserHandle} className='button-delete'>X</button></td>
        </tr>
    )
}

export default UserRow