import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-3">
        <Link className="nav__link text-dark" to="/home">
              <h4> <span id="icon__C">B</span> A R B E R' S
              </h4>
            </Link>
          <p>
            We provide a reputable and professional service that aims to give
            you the confidence to pass your test and drive safely on the roads.
          </p>
        </div>
        <div className="col-md-3">
          <h5>Information</h5>
          <Link className="nav__link text-dark">FAQ</Link> <br></br>
          <Link className="nav__link text-dark">Locations</Link> <br></br>
          <Link className="nav__link text-dark">Testimonials</Link> <br></br>
          <Link className="nav__link text-dark">Partners</Link> 
        </div>
        <div className="col-md-3">
          <h5>Customer Service</h5>
          <Link className="nav__link text-dark">Search Terms</Link> <br></br>
          <Link className="nav__link text-dark">Site Map</Link> <br></br>
          <Link className="nav__link text-dark">Privacy</Link> <br></br>
          <Link className="nav__link text-dark">Terms of Use</Link> <br></br>
          <Link className="nav__link text-dark">Contact Us</Link> 
        </div>
        <div className="col-md-3">
          <h5>Social Media</h5>
          <Link className="nav__link text-dark">Facebook</Link> <br></br>
          <Link className="nav__link text-dark">Twitter</Link> <br></br>
          <Link className="nav__link text-dark">Instagram</Link> <br></br>
          <Link className="nav__link text-dark">YouTube</Link> 
        </div>
      </div>
      <div className="copyright">
        <p>All rights reserved by BARBER'S 2021!</p>
      </div>
    </div>
  );
};

export default Footer;
