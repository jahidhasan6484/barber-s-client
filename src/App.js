import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Review from "./Components/Review/Review";
import Home from "./Components/Home/Home";
import Barbers from "./Components/Barbers/Barbers";
import Contact from "./Components/Contact/Contact";
import Admin from "./Components/Admin/Admin";
import AllServices from "./Components/AllServices/AllServices";
import CheckOut from "./Components/CheckOut/CheckOut";
import Payment from "./Components/Payment/Payment";
import Services from "./Components/Services/Services";
import ManageServices from "./Components/ManageServices/ManageServices";
import AddAdmin from "./Components/AddAdmin/AddAdmin";
import AddStylist from "./Components/AddStylist/AddStylist";
import ManageOrders from "./Components/ManageOrders/ManageOrders";
import AddReview from "./Components/AddReview/AddReview";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookingList from "./Components/BookingList/BookingList";
import Profile from "./Components/Profile/Profile";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/prices">
            <AllServices />
          </Route>
          <Route path="/stylists">
            <Barbers />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/payment">
            <Payment />
          </PrivateRoute>
          <Route path="/review">
            <Review />
          </Route>
          <PrivateRoute path="/AddServices">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/addStylist">
            <AddStylist />
          </PrivateRoute>
          <PrivateRoute path="/manageOrder">
            <ManageOrders />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
