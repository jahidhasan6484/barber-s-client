import React, { useEffect, useState } from "react";

const Order = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allBookings")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [order]);
  
  return (
    <div className="container">
        <h3 className="title">ORDER LIST</h3>
      <div className="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col" className=" text-center">
                Email ID
              </th>
              <th scope="col" className=" text-center">
                Services
              </th>
              <th scope="col" className=" text-center">
                Pay With
              </th>
              <th scope="col" className=" text-center">
                Status
              </th>
            </tr>
          </thead>
          {order.map((order) => {
            return (
              <tbody>
                <tr>
                  <td>{order.name}</td>
                  <td className=" text-center">{order.email}</td>
                  <td className=" text-center">{order.serviceName}</td>
                  <td className=" text-center">Creadit Card</td>
                  <td className=" text-center">{order.status}
                    {/* <Button
                      onClick={() => handleDelete(order._id)}
                      className="btn-success"
                    >
                      Delete
                    </Button> */}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Order;
