import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ManageServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://infinite-garden-56670.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

  return (
    //       <div className="container">
    //       <div className="row">
    //         <div className="col-md-4">
    //           <Sidebar />
    //         </div>
    //         <div className="col-md-8"></div>
    // </div>
    // </div>

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <h3>Manage Services</h3>
          <br></br>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col" className=" text-center">
                  Price
                </th>
                {/* <th scope="col" className=" text-center">
                  Action
                </th> */}
              </tr>
            </thead>
            {services.map((service) => {
              return (
                <tbody>
                  <tr>
                    <td>{service.name}</td>
                    <td className=" text-center">{service.price}</td>
                    {/* <td className=" text-center">
                      <button className="btn__primary">Edit</button>
                      <button className="btn__primary">Delete</button>
                    </td> */}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;
