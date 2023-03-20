import React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as OzaLogo } from "../../assets/icons/oza-logo.svg";
import StepIndicator from "../StepIndicator/StepIndicator";
import "./FormLayout.scss";

const FormLayout = () => {
  return (
    <div className="partner-container">
      <section className="partner-section">
        <div className="signin-wrapper">
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
          
          <Outlet />
          
        </div>
        
      </section>
      <section className="banner-section">
        <div className="banner-image">
          <div className="banner-logo">
            <OzaLogo />
          </div>
        </div>
      </section>
    </div>
  )
}

export default FormLayout