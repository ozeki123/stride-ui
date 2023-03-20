import React, { useEffect } from "react";
import "./InputField.scss";

const InputField = ({label, placeholder, handleChange, value, name }) => {

  return (
    <div className="input-field-wrapper">
      <label>{label}</label>
      <input placeholder={placeholder} onChange={handleChange} value={value} name={name} autoComplete="off"/>
    </div>
  )
}

export default InputField