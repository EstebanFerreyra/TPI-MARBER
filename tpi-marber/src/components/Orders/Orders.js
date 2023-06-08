import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

const Orders = () => {
  const [tables, setTables] = useState(false);

  const addTables = () => {
    setTables(!tables);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <h2 className="d-flex justify-content-center">
        Estado de pedidos & ventas
      </h2>

      {!tables ? (
        <p className="d-flex justify-content-center">
          No hay ventas que mostrar...
        </p>
      ) : (
        <div class="container">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Descripción pedido</th>
                <th>Fecha</th>
                <th>Monto</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Juan</td>
                <td>Cód id_productos</td>
                <td>dd/mm/yy</td>
                <td>$total</td>
                <td>despachado</td>
              </tr>
              <tr>
                <td>Silvia</td>
                <td>Cód id_productos</td>
                <td>dd/mm/yy</td>
                <td>$total</td>
                <td>pagado</td>
              </tr>
              <tr>
                <td>Raúl</td>
                <td>Cód id_productos</td>
                <td>dd/mm/yy</td>
                <td>$total</td>
                <td>pendiente</td>
              </tr>
              <tr>
                <td>Bar de la esquina</td>
                <td>Cód id_productos</td>
                <td>dd/mm/yy</td>
                <td>$total</td>
                <td>pendiente</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
