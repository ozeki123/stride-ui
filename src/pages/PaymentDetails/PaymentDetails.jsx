import React from "react";
import { useNavigate } from "react-router-dom";
import RadioButton from "../../components/RadioButton/RadioButton";
import "./PaymentDetails.scss";
import StripeForm from "../../components/StripeForm/StripeForm";
import { ReactComponent as VisaIcon } from "../../assets/icons/visa-icon.svg";
import { ReactComponent as AmexIcon } from "../../assets/icons/amex-icon.svg";
import { ReactComponent as MasterCardIcon } from "../../assets/icons/mastercard-icon.svg";
import dollarIcon from "../../assets/icons/dollar-bill.png";

const PaymentDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-details">
      <h2>Payment Information</h2>
      <section className="card-section">
        <div className="radio-button">
          <RadioButton />
        </div>
        
        <div className="card-form">
          <div className="card-header">
            <p>Credit Card</p>
            <ul className="card-list">
              <li>
                <VisaIcon />
              </li>
              <li>
                <AmexIcon />
              </li>
              <li>
                <MasterCardIcon />
              </li>
            </ul>
          </div>
          <p className="card-description">Safe money transfer using credit card payment. Visa, MasterCard, American Express. </p>
          <div className="stripe-wrapper">
            <StripeForm />
          </div>
          
        </div>
      </section>
      <section className="cash-section">
        <div className="radio-button">
          <RadioButton />
        </div>
        <div className="cash-header">
          <p>Cash Payment</p>
          <img src={dollarIcon}/>
        </div>
        <p className="cash-description">Pay the host when you arrive. You will not be able to access the space until payment is received.</p>
      </section>
    </div>
  )
}

export default PaymentDetails;