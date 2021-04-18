import React from 'react';
import './ShowBarbers.css';

const ShowBarbers = ({stylist}) => {
    return (
        <div className="col-md-3 card">
            <img src={`data:image/png;base64,${stylist?.image?.img}`}></img>
            <h5>{stylist?.name}</h5>
            <p className="role">{stylist?.role}</p>
            <p>Email: {stylist?.email}</p>
          </div>
    );
};

export default ShowBarbers;