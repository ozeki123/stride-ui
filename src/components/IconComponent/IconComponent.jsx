import React from "react";
import {ReactComponent as testIcon} from "../../assets/icons/groups-logo.svg";

const IconComponent =({ name }) => {
  const amenityIcons = {
    "Equipment": testIcon,
    "Restroom": testIcon,
    "Changing Room": testIcon,
    "Water": testIcon
  }
  let Icon = amenityIcons[name];
  return <Icon />
}

export default IconComponent;