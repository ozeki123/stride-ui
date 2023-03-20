import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { ReactComponent as OzaLogo } from "../../assets/icons/oza-logo.svg";
import FormWidget from "../FormWidget/FormWidget";
import StepIndicator from "../StepIndicator/StepIndicator";
import BookingForm from "../../pages/BookingForm/BookingForm";
import "./BookingLayout.scss";

const BookingLayout = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log("ididdi", data);
  // const { data, error, isError, isLoading } = useQuery(['space', id], () => getSpaceById(id));
  return (
    <div className="booking-container">
      <section className="booking-section">
        <div className="booking-wrapper">
          <div className="partner-step">
            <div className="signin-logo">
              <OzaLogo />
              <h3>oza</h3>
            </div>
            <div className="step-indicator">
              <StepIndicator />
            </div>
          </div>
          <div className="border">
            <div className="border-left"></div>
            <div className="border-right"></div>
          </div>
          
          <BookingForm />
          
        </div>
        
      </section>
      <section className="booking-widget">
        <div className="booking-details">
          <FormWidget  title={data?.title} location={data?.location} owner={data?.owner} image={data?.image} category={data?.category}/>
        </div>
      </section>
    </div>
  )
}

export default BookingLayout;