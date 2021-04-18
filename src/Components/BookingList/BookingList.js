import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowBookings from '../ShowBookings/ShowBookings';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://infinite-garden-56670.herokuapp.com/bookings?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])


    return (
        <div className="container bookingList">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <h3>Order List</h3>
                    <br></br>
                    <div className="row">
                        {
                            bookings.map(book => <ShowBookings key={book._id} book={book}></ShowBookings>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;