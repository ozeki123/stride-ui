import React from "react";
import "./StepIndicator.scss";

const StepIndicator = () => {
  return (
    <div className="steps-container">
      <ul className="steps-list">
        <li className="steps-item">
          <p>1</p>
          <p>About you</p>
        </li>
        <li className="steps-item">
          <p>2</p>
          <p>Hosting details</p>
        </li>
        <li className="steps-item">
          <p>3</p>
          <p>Confirmation</p>
        </li>
      </ul>
    </div>
  )
}

export default StepIndicator;