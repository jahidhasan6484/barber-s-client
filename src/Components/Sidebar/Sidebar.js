import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faListOl,
  faPlus,
  faGripHorizontal,
  faUserPlus,
  faTasks,
  faFolderPlus
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import "./Sidebar.css";
import { UserContext } from "../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://infinite-garden-56670.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  return (
    <div className="container">
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          {loggedInUser.email && <div>
            <li>
              <Link to="/payment" className="text-dark">
                <FontAwesomeIcon icon={faMoneyBill} /> <span>Payment</span>
              </Link>
            </li>
            <li>
              <Link to="/bookingList" className="text-dark">
                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to="/addReview" className="text-dark">
                <FontAwesomeIcon icon={faFileAlt} /> <span>Review</span>
              </Link>
            </li>
          </div>}


          {isAdmin && (
            <div>
              <li>
                <Link to="/AddServices" className="text-dark">
                  <FontAwesomeIcon icon={faFolderPlus} />{" "}
                  <span>Add Services</span>
                </Link>
              </li>
              <li>
                <Link to="/manageOrder" className="text-dark">
                  <FontAwesomeIcon icon={faListOl} /> <span>Order List</span>
                </Link>
              </li>
              <li>
                <Link to="/addStylist" className="text-dark">
                  <FontAwesomeIcon icon={faPlus} /> <span>Add Employee</span>
                </Link>
              </li>
              <li>
                <Link to="/addAdmin" className="text-dark">
                  <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                </Link>
              </li>
              <li>
                <Link to="/manageServices" className="text-dark">
                  <FontAwesomeIcon icon={faTasks} /> <span>Manage Services</span>
                </Link>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
