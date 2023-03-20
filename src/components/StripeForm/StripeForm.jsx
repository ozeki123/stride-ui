import React from "react";
import "./StripeForm.scss";
import { Elements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51KKekXGDtVX5wZUmoem8hYWx1aOdupnY8mgqvCfecD0Hn8iu4BfMSgLDuhKuwwR9ngCdXf73GCh7XM5rPTN9F19000nNQl8J1j")

const StripeForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeComponent />
    </Elements>
    
  )
}

const StripeComponent = () => {
  const stripe = useStripe();
  const elements = useElements();
  return(
    <div>
      <div className="stripe-top">
        <div className="card-num">
          <label>Card Number</label>
          <CardNumberElement className="input"/>
        </div>
        
      </div>
      <div className="stripe-bottom">
        <div className="card-name">
          <label>Name on Card</label>
          <input className="input"/>
        </div>
        
        <div className="card-exp">
          <label>Expiry Date</label>
          <CardExpiryElement className="input"/>
        </div>
        
        <div className="card-cvc ">
          <label>CVC Code</label>
          <CardCvcElement className="input"/>
        </div>
      </div>
      
    </div>
  )
}

export default StripeForm;