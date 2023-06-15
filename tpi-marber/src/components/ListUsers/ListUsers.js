import React, { useContext } from 'react'
import UserRow from '../UserRow/UserRow';
import { CustomersContext } from '../context/CustomersContext/CustomersContext';

const ListUsers = () => {
    const {customers} = useContext(CustomersContext)
    
    return (
        <>
            <div className="d-flex justify-content-center">
                <h2>Listado de clientes</h2>
            </div>
            <div class="container">
                <table class="table table-hover">
                    <thead style={{ backgroundColor: "lightsteelblue" }}>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>ELIMINAR</th>
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