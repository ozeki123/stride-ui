import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InputField from "../../components/InputField/InputField";
import "./BookingDetails.scss";

const BookingDetails = ({ formData, handleChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("FOOOORM", formData);

  return (
    <div className="booking-details">
      <div className="details-header">
        <h1>Booking Details</h1>
        <p>Enter booking details below.</p>
      </div>
      
      <div className="details-top">
        <div className="input-wrapper">
          <InputField label="Date" placeholder="Enter Date" value={formData.bookingDate} name="bookingDate" handleChange={handleChange} />
        </div>
        
        <div className="input-wrapper">
          <InputField label="Guests" placeholder="Enter number of guests" value={formData.guests} name="guests" handleChange={handleChange} />
        </div>
      </div>
      <div className="details-bottom">
        <div className="input-wrapper">
          <InputField label="Checkin Time" placeholder="Enter check in time" value={formData.startDate} name="startDate" handleChange={handleChange} />
        </div>
        <div className="input-wrapper">
          <InputField label="Checkout Time" placeholder="Enter check out time" value={formData.endDate} name="endDate" handleChange={handleChange} />
        </div>
      </div>
    </div>
  )
}

export default BookingDetails;