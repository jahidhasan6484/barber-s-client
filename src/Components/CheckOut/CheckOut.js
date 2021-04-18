import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [book, setBook] = useState([])

    const { id } = useParams();
    useEffect(() => {
        fetch('https://infinite-garden-56670.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id])

    const selectedBook = book.find(book => book?._id === id);

    const handleCheckout = () => {
        const newBooking = { ...loggedInUser, serviceName: selectedBook?.name, price: selectedBook?.price, status: "Pending" }
        fetch('https://infinite-garden-56670.herokuapp.com/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
    }

    return (
        <div className="container">
            <div className="mt-5">
                <h3 className="title">CHECKOUT</h3>
                <div className="row">
                    <div className="col-md-6">
                        <p>Name of Services</p>
                        <h5>{selectedBook?.name}</h5>
                    </div>
                    <div className="col-md-6">
                        <p className="text-center">Price</p>
                        <h5 className="text-center">${selectedBook?.price}</h5>
                    </div>
                </div>
            </div>
            <div className="mt-5 text-right">
                <Link to="/payment"><button onClick={() => handleCheckout()} className="btn__primary">Checkout</button></Link>
            </div>
            <div className="mt-5" style={{ textAlign: 'center' }}>
                <p>Want a <Link to="/prices" className="text-success">different service?</Link> </p>
            </div>
        </div>
    );
};

export default CheckOut;