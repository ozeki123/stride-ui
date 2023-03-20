import React from "react";
import { NavLink } from "react-router-dom";
import partnerImage from "../../assets/images/partner-illustration.png";

const PartnerBanner = () => {
  return (
    <div className="partner-banner">
      <div className="partner-banner-wrapper">
        <div className="partner-text">
          <h5>Become a Partner</h5>
          <p>Partner with us and join the oza community!</p>
          <NavLink to="/form-landing">Learn More</NavLink>
        </div>
        <img src={partnerImage}/>
      </div>
    </div>
  )
}

export default PartnerBanner;