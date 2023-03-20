import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SpaceAvatar} from "../../assets/images/avatar-1.svg";
import { ReactComponent as ExperienceAvatar} from "../../assets/images/avatar-2.svg";
import { ReactComponent as GroupAvatar} from "../../assets/images/avatar-3.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/left-arrow.svg";
import "./FormLanding.scss";

const FormLanding = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(selected)
  }, [selected])

  const selectForm = (name) => {
    const selectedForm = name;
    setSelected(name);
    if(selectForm){
      navigate(`/${name}`, { state: {data: selectedForm}})
    }
  }
  
  return (
    <div className="landing-container">
      <h2>Choose your hosting category</h2>
      <ul className="landing-list">
        <li className="landing-item" onClick={() => selectForm("space-form")}>
          <div className="item-content">
            <SpaceAvatar />
            <p>Host a space</p>
          </div>
          <div className="item-button">
            <ArrowIcon />
          </div>
        </li>
        <li className="landing-item" onClick={() => selectForm("experience-form")}>
            <div className="item-content">
              <ExperienceAvatar />
              <p>Host an experience or event</p>
            </div>
            <div className="item-button">
              <ArrowIcon />
            </div>
          
        </li>
        <li className="landing-item" onClick={() => selectForm("group-form")}>
            <div className="item-content">
              <GroupAvatar />
              <p>Host a group</p>
            </div>
            <div className="item-button">
              <ArrowIcon />
            </div>
          
        </li>
      </ul>
    </div>
  )
}

export default FormLanding