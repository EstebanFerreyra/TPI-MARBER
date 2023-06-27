import React, { useEffect, useState, useContext } from "react";
import NavBar from "../NavBar/NavBar";
import OrderRow from "../OrderRow/OrderRow";
import { RegisteredUserContext } from "../context/RegisteredUserContext/RegisteredUserContext";
import Footer from "../Footer/Footer";
import "./Orders.css"
import { ThemeContext } from "../context/Theme/Theme";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const { theme } = useContext(ThemeContext);
  const { registeredUser } = useContext(RegisteredUserContext);

  const setOrdersHandle = (obj) => {
    setOrders(obj);
  };

  let url = `https://www.apimarber.somee.com/marber/OrderController/GetOrder/${registeredUser.id}`;

  if (registeredUser.role === "superadmin") {
    url = "https://www.apimarber.somee.com/marber/OrderController/GetOrder";
  }

  useEffect(() => {
    fetch(url, {
      method: "GET",
      mode: "cors",
      refer: "*",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrdersHandle(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={` ${theme === "dark" && "container-view"
      }`}> 
      <div>
        <NavBar />
      </div>

      <div className="d-flex justify-content-center">
        <h2 className={`title-list ${theme === "dark" && "title-list-dark"
          }`}>Pedidos</h2>
      </div>
      <div className="container-tables">
      <div class="container">
        <table class="table table-hover">
          <thead style={{ backgroundColor: "lightsteelblue" }}>
              <tr  className={` ${theme === "dark" && "tr"
                }`}>
                <th scope="col">Id Orden</th>
                <th scope="col">Cliente</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Monto</th>
                <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <>
                  <tr className={` ${theme === "dark" && "tr"
                    }`}>
                  <td> </td>
                  <td> </td>
                  <td className="d-flex justify-content-center">
                    <p className="d-flex justify-content-center position-fixed">
                      No hay pedidos para mostrar
                    </p>
                    <div className="d-flex justify-content-center w-25 mt-4">
                      <svg
                        viewBox="0 0 64.005 64.005"
                        data-name="Low Beer Glass"
                        id="Low_Beer_Glass"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <rect
                            fill="none"
                            height="30"
                            id="rect2317-63"
                            transform="translate(0 0)"
                            width="30"
                          ></rect>{" "}
                          <g id="g2174" transform="translate(12.775 3.111)">
                            {" "}
                            <path
                              d="M32.912,55.012v-9.8c3.925-.231,5.649-1.864,7.2-4.539,1.678-2.895,1.875-12.886,1.877-12.986V10.646a.975.975,0,0,0-1.008-.935H32.912V1.657H1.66V55.012H32.912m.541-42.75h5.7c.3,0,.545.332.545.738l0,14.136c0,.08-.108,9.079-1.015,11.367a5.341,5.341,0,0,1-5.231,3.608c-.3,0-.545-.332-.545-.738l0-28.372c0-.407.245-.738.545-.738m-.541,45H1.66A2.255,2.255,0,0,1-.6,55.012V1.657A2.255,2.255,0,0,1,1.66-.6H32.912a2.255,2.255,0,0,1,2.257,2.253v5.8h5.809a3.231,3.231,0,0,1,3.265,3.188V27.683q0,.02,0,.04c0,.026-.05,2.625-.319,5.607-.562,6.225-1.54,7.913-1.861,8.467-1.36,2.35-3.157,4.582-6.893,5.38v7.834a2.255,2.255,0,0,1-2.257,2.253Zm2.253-42.75,0,24.934a3.366,3.366,0,0,0,1.422-1.775c.072-.183.445-1.318.692-5.8.132-2.4.162-4.566.165-4.748l0-12.608H35.165Z"
                              id="path2176"
                              transform="translate(0.596 0.596)"
                            ></path>{" "}
                          </g>{" "}
                          <g id="g2178" transform="translate(17.189 47.366)">
                            {" "}
                            <path
                              d="M0,13.478a10.487,10.487,0,0,1,7.347-2.025c4.695.321,6.843,3.345,11.4,3.666A16.823,16.823,0,0,0,27,13.478V18.7a3.113,3.113,0,0,1-.234,1.222.883.883,0,0,1-.713.411H1.262a1.781,1.781,0,0,1-.874-.606A2.948,2.948,0,0,1,0,18.543Z"
                              id="path2180"
                              transform="translate(0 -11.423)"
                            ></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </div>
                  </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </>
            ) : (
              orders.map((order) => {
                return (
                  <OrderRow
                    key={order.id}
                    id={order.id}
                    userBuy={order.userBuy}
                    beerBuy={order.beerBuy}
                    quantity={order.quantity}
                    subTotal={order.subTotal}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Orders;
