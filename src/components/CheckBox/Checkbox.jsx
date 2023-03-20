import React, { useEffect, useState } from "react";
import { ReactComponent as CheckMark} from "../../assets/icons/check-icon.svg";
import "./Checkbox.scss";

const Checkbox = (props) => {
  const defaultChecked = props.checked ? props.checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  useEffect(() => {
    console.log(isChecked);
  }, [isChecked])
  
  return (
    <div className="checkbox-wrapper">
      <input className={isChecked ? "checked" : ""} id={props.type} name="type" type="checkbox" onChange={() => setIsChecked(!isChecked)}/>
      <label htmlFor={props.type}>{props.type}</label>
    </div>
  )
}

export default Checkbox;