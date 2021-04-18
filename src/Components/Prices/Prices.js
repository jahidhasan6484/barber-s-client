import React from "react";
import "./Prices.css";
import { Link } from "react-router-dom";

const Prices = ({ service }) => {
  return (
    <div className="col-md-2 prices">
      <Link to={`/checkout/${service?._id}`}>
        <img src={`data:image/png;base64,${service?.image?.img}`}></img>
      </Link>
      <p>{service?.name}</p>
      <p>${service?.price}</p>
    </div>
  );
};

export default Prices;
