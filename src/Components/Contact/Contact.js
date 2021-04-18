import React from "react";
import "./Contact.css";
import bgContact from "../../all_images/barber-team-7.jpg";
import phoneCall from '../../icon/phone-call.png';
import email from '../../icon/email.png';
import home from '../../icon/home.png';
import clock from '../../icon/clock.png';

const Contact = () => {
  return (
    <div className="container contact">
      <h3 className="title">CONTACT WITH US</h3>
      <div className="row">
        <div className="col-md-6 bgContact">
          <img src={bgContact}></img>
        </div>
        <div className="col-md-6 contactArticle">
          <p>
          This improvement upon the original usage was introduced by no less a
man than Stubb, in order to afford the imperilled harpooneer the
strongest possible guarantee for the faithfulness and vigilance
of his monkey-rope holder.
          </p>
          <p>Just let us know how we can help.</p>
          <div className="contactDetails">
            <div>
              <p> <img src={phoneCall}></img>  +880 17742 66484</p>
            </div>
            <div>
              <p><img src={email}></img> barbers.salon@gmail.com</p>
            </div>
            <div>
              <h6> <img src={home}></img> TRACK LOCATION</h6>
              <p>68 Shukrabad, Dhanmondi 32 || Dhaka</p>
            </div>
            <div>
              <h6> <img src={clock}></img> TRACK HOURS</h6> 
              <p>  Monday to Friday: 8:00 AM – 5:00 PM</p> 
              <p>Saturday & Sunday: Varies based on programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
