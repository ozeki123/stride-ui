import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmDetails.scss";

const ConfirmDetails = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="partner-nav">
        <p>Terms and conditions</p>
        <div className="nav-buttons">
          <button onClick={() => navigate(-1)}>Go back</button>
          <button>Confirm Booking</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDetails;