import React, { useEffect, useState } from "react";
import './AllServices.css';
import Prices from "../Prices/Prices";

const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);


  return (
    <div className="container allServices">
      <h3 className="title">PRICES</h3>
      <div className="row">

        {services.map((service) => (
          <Prices key={service._id} service={service}></Prices>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
