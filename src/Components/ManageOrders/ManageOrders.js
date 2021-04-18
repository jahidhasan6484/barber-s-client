import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ManageOrders = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://infinite-garden-56670.herokuapp.com/allBookings")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [order]);

  return (
    <div className="container">
    <div className="row">
      <div className="col-md-4">
        <Sidebar />
      </div>
      <div className="col-md-8">
      <h3>Manage Orders</h3>
      <br></br>
      <div className="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Email ID</th>
              <th scope="col" className=" text-center">
                Status
              </th>
              <th scope="col" className=" text-center">
                Edit
              </th>
            </tr>
          </thead>
          {order.map((order) => {
            return (
              <tbody>
                <tr>
                  <td>{order.email}</td>
                  <td className=" text-center">{order.status}</td>
                  <td className=" text-center"><button className="btn__primary">Edit</button></td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
      </div>
</div>
      
  );
};

export default ManageOrders;
