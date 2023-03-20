import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <div className="button-container">
      <div className="button-wrapper">
        {props.icon}
        <p>{props.text}</p>
      </div>
    </div>
    
  )
}

export default Button;