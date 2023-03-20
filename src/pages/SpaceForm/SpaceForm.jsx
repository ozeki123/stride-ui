import React from "react";
import "./SpaceForm.scss";

const SpaceForm = () => {
  return (
    <div className="space-form">
      <div className="signin-header">
        <h1>Become a Partner</h1>
        <p>Enter your contact information below.</p>
      </div>
      <div className="partner-top">
        <div className="signin-input">
          <label>Title</label>
          <input placeholder="Enter username or email address"/>
        </div>
        <div className="signin-input">
          <label>Sport</label>
          <input placeholder="Enter username or email address"/>
        </div>
      </div>
      <div className="space-bottom">
        <div className="address-input">
          <label>Address</label>
          <input placeholder="Enter username or email address"/>
        </div>
        <div className="price-input">
          <label>Price</label>
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
    </div>
  )
}

export default SpaceForm;