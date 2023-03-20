import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as OzaLogo } from "../../assets/icons/oza-logo.svg";
import StepIndicator from "../../components/StepIndicator/StepIndicator";
import "./PartnerForm.scss";

const PartnerForm = () => {
  const location = useLocation();
  const data = location.state?.data;
  useEffect(() => {
    console.log("location: ", location);
  }, [location]);
  return (
    <>
      <div className="signin-header">
        <h1>Become a Partner</h1>
        <p>Enter your contact information below.</p>
      </div>
      <div className="partner-top">
        <div className="signin-input">
          <label>First Name</label>
          <input placeholder="Enter username or email address"/>
        </div>
        <div className="signin-input">
          <label>Last Name</label>
          <input placeholder="Enter username or email address"/>
        </div>
      </div>
      <div className="partner-bottom">
        <div className="signin-input">
          <label>Email Address</label>
          <input placeholder="Enter username or email address"/>
        </div>
        <div className="signin-input">
          <label>Phone Number</label>
          <input placeholder="Enter password"/>
        </div>
      </div>
      <div className="partner-nav">
        <p>Terms and conditions</p>
        <div className="nav-buttons">
          <button>Go back</button>
          <button>Continue</button>
        </div>
      </div>
    </>
  )
}

export default PartnerForm