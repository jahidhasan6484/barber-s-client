import { UserContext } from "../../App";
import React, { useEffect, useState, useContext } from 'react';

const LoadAdmins = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/admins')
        .then(res => res.json())
        .then(data => {
          setAdmins(data)
          // setLoading(false)
        })
    }, [admins])

    return (
        <div>
            {
                // admins.map( admin => <li>{admin.email == loggedInUser.email ? <p>pp</p> : <p>oo</p>}</li>)
                // admins.map(admin => <Header admin={admin}></Header>)
            }
        </div>
    );
};

export default LoadAdmins;