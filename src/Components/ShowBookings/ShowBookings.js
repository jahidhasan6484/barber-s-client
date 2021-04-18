import React from 'react';
import './ShowBookings.css';

const ShowBookings = ({ book }) => {
    return (
        <div className="col-md-6">
            <div className="orderListCard">
                <div className="row">
                    <div className="col-md-8">
                        <h6>Service Name: {book.serviceName}</h6>
                        <br></br>
                        <h4>Price: {book.price}</h4>
                    </div>
                    <div className="col-md-4">
                        <button className="btn__primary">{book.status}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowBookings;