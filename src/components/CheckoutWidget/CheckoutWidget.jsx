import React from "react";
import InputField from "../InputField/InputField";
import "./CheckoutWidget.scss";

const CheckoutWidget = (props) => {
  return (
    <div className="checkout-widget">
      <div className="checkout-space">
        <img src={props.image}/>
        <div className="space-details">
          <h4>{props.title}</h4>
          <p>{props.location}</p>
          <p>{props.owner}</p>
        </div>
      </div>
      <div className="checkout-input">
        <input />
        <input />
      </div>
      <div className="checkout-costs">
        <div className="costs-item">
          <p>¥1000 JPY * 6 hours</p>
          <p>¥6000 JPY</p>
        </div>
        <div className="costs-item">
          <p>Cleaning Fee</p>
          <p>¥2000 JPY</p>
        </div>
        <div className="costs-item">
          <p>Service Fee</p>
          <p>¥2000 JPY</p>
        </div>
        <div className="costs-item">
          <p>Total</p>
          <p>¥10000 JPY</p>
        </div>
      </div>
      <div className="checkout-buttons">
        <button>Check Availability</button>
      </div>
    </div>
  )
}

export default CheckoutWidget;