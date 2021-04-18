import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Profile.css';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleLogOut = () => {
        setLoggedInUser("");
        sessionStorage.removeItem('token');
    }
    return (
        <div className="container profile">
            <div className="row">
                <div className="col-md-8 mt-5 text-center">
                    <br /><br />
                    <h2>Keep In Touch</h2>
                    </div>
                <div className="col-md-4 text-center logout">
                    <h3>My Profile</h3>
                    <br></br>
                    <div className="card-body">
                        <br />
                        <h5 className="card-title">{loggedInUser.email}</h5>
                        <hp className="card-text">{loggedInUser.email}</hp>
                        <br /><br /><br />
                        <Link to="/home"><button onClick={handleLogOut} className="btn__primary">Log Out</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;