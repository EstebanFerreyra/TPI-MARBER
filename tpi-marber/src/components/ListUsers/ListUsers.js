import React, { useContext } from 'react'
import UserRow from '../UserRow/UserRow';
import { CustomersContext } from '../context/CustomersContext/CustomersContext';
import "./ListUsers.css"
import { ThemeContext } from '../context/Theme/Theme';

const ListUsers = () => {
    const {customers} = useContext(CustomersContext)
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="d-flex justify-content-center">
                <h2 className={`title-list ${theme === "dark" && "title-list-dark"
                    }`}>Listado de clientes</h2>
            </div>
            <div class="container">
                <table class="table table-hover">
                    <thead style={{ backgroundColor: "lightsteelblue" }}>
                        <tr className={` ${theme === "dark" && "tr"
                            }`}>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((user) => {
                            return (
                                <UserRow key={user.id} id={user.id} user={user.userBd} email={user.emailBd} role={user.roleBd}/>
                            );
                        })}
    
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListUsers