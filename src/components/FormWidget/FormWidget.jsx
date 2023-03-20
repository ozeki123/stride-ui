import React from "react";
import InputField from "../InputField/InputField";
import "./FormWidget.scss";

const FormWidget = (props) => {
  return (
    <div className="form-widget">
      <h2>{props.title.split(" ")[0]}</h2>
      <h2>{props.title.split(" ").slice(1).join(" ")}</h2>
      <div className="checkout-space">
        <img src={props.image}/>
        <div className="space-details">
          <p>{props.location}</p>
          <div className="space-features">
            <p>Basketball</p>
            <p>・</p>
            <p>1 Court</p>
            <p>・</p>
            <p>1 Bathroom</p>
          </div>
          
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
        <input placeholder="Enter a voucher code"/>
        <button>Apply</button>
      </div>
    </div>
  )
}

export default FormWidget;