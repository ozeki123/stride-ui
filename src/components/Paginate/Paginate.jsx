import React, { useEffect, useState } from "react";
import "./Paginate.scss";

import { ReactComponent as LeftArrow} from "../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow} from "../../assets/icons/right-arrow.svg";

const Paginate = (props) => {

  //Calculate the number of pages based on data 
  const pageNumbers = [];
  for(let i = 1 ; i  <= Math.ceil(props.totalSpaces / props.spacesPerPage); i++){
    pageNumbers.push(i);
  }

  useEffect(() => {
    console.log(props.spacesPerPage);
    console.log(props.totalSpaces);
    console.log(pageNumbers);
    
  }, [])
  return (
    <div className="pages-container">
      <ul>
        <li>
          <LeftArrow />
        </li>
        {
          pageNumbers.map((number) => (
            <li 
              key={number}
              onClick={() => props.setPageNumber(number)}
              className={props.currentPage == number ? "active-page" : ""}
            >
              {number}
            </li>
          ))
        }
        <li>
          <RightArrow />
        </li>
      </ul>
    </div> 
  )
}

export default Paginate