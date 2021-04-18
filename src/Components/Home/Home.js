import React from "react";
import "./Home.css";
import bg_home from "../../all_images/bg_home00.jpg";
import populer1 from "../../all_images/populer (1).jpg";
import populer2 from "../../all_images/populer (2).jpg";
import populer3 from "../../all_images/populer (3).jpg";
import populer4 from "../../all_images/populer (4).jpg";
import populer5 from "../../all_images/populer (5).jpg";
import populer6 from "../../all_images/populer (6).jpg";
import populer7 from "../../all_images/populer (7).jpg";
import populer8 from "../../all_images/populer (8).jpg";
import Barbers from "../Barbers/Barbers";
import AllServices from "../AllServices/AllServices";
import Review from "../Review/Review";

const Home = () => {
  return (
    <home>
      <div className="container home">
        <div className="row">
          <div className="col-md-6 intro">
            <h1 className="mt-5">
              Check out <span className="light"> the hottest </span>
              <br></br> BEARD!
            </h1>
            <br></br> <br></br> <br></br>
            <h1 className="light">Real Man Go to The Real BARBER</h1>
            <br></br> <br></br> <br></br>
          </div>
          <div className="col-md-6">
            <img src={bg_home}></img>
          </div>
        </div>
      </div>

      <div className="container intro">
        <h3 className="title">SALON</h3>
        <h6>
          “Working in a salon, you look at trends all day long. <br></br> You’re looking
          at color all the time, what new products are coming out. You’re a part
          of the fashion industry, <br></br> especially if you’re working in a higher-end
          salon.”
        </h6>

        <p>-Christian Siriano</p>
      </div>

      <div className="container initialPricing">
        <div className="row">
          <div className="col-md-6">
            <h3 className="title">POPULAR BEARD STYLES</h3>

            <div className="row">
              <div className="col-md-3">
                <img src={populer1}></img>
              </div>
              <div className="col-md-3">
                <img src={populer2}></img>
              </div>
              <div className="col-md-3">
                <img src={populer3}></img>
              </div>
              <div className="col-md-3">
                <img src={populer4}></img>
              </div>
              <div className="col-md-3">
                <img src={populer5}></img>
              </div>
              <div className="col-md-3">
                <img src={populer6}></img>
              </div>
              <div className="col-md-3">
                <img src={populer7}></img>
              </div>
              <div className="col-md-3">
                <img src={populer8}></img>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="title">POPULAR BEARD STYLES</h3>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Type of Service</th>
                  <th scope="col">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trim your Beard</td>
                  <td>from $15</td>
                </tr>
                <tr>
                  <td>Trim your Hair</td>
                  <td>from $40</td>
                </tr>
                <tr>
                  <td>Special Beard Treatment</td>
                  <td>from $59</td>
                </tr>
                <tr>
                  <td>Color your Beard</td>
                  <td>from $69</td>
                </tr>
                <tr>
                  <td>Wax your Beard</td>
                  <td>from $12</td>
                </tr>
                <tr>
                  <td>Complete Treatment</td>
                  <td>from $99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Barbers />
      <AllServices />
      <Review />
    </home>
  );
};

export default Home;