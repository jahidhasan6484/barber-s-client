import React from 'react';
import { Link } from 'react-router-dom';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';

const Payment = () => {
    return (
        <div className="container payment">
            <div className="row">
                <div className="col-md-4">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <h3>Payment</h3>
                    <br></br>
                    <div>
                        <ProcessPayment />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;