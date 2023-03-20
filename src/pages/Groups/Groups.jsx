import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import getGroups from "../../api/getGroups";
import { useQuery } from "react-query";
import getSpaces from "../../api/getSpaces";
import Checkbox from "../../components/CheckBox/Checkbox";
import Paginate from "../../components/Paginate/Paginate";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as Avatar } from "../../assets/images/default-avatar.svg";
import { ReactComponent as Members } from "../../assets/icons/members-icon.svg";
import { ReactComponent as PriceIcon } from "../../assets/icons/price-icon.svg"; 
import { ReactComponent as AddressIcon } from "../../assets/icons/address-icon.svg"; 
import "./Groups.scss";
import PartnerBanner from "../../components/PartnerBanner/PartnerBanner";

const Groups = () => {
  // const [groupsPerPage] = useState(3);
  // const [currentPage, setCurrentPage] = useState(1);
  // const { data, error, isError, isLoading } = useQuery('spaces', getSpaces);
  const { data, error, isError, isLoading } = useQuery('groups', getGroups);
  const [guests, setGuests] = useState(1);

  //Setup for calculating spaces per page
  // const lastSpaceIndex = currentPage * groupsPerPage;
  // const firstSpaceIndex = lastSpaceIndex - groupsPerPage;
  // const currentGroups = data?.slice(firstSpaceIndex, lastSpaceIndex);
  

  // useEffect(() => {
  //   if(!isLoading){
  //     console.log("groups", data);
  //   }
    
  // }, [isLoading])

  // useEffect(() => {
  //   console.log(currentSpaces);
    
  // }, [currentSpaces])


  /*
    @param number
    Takes current page number from Paginate component
  */
  // const setPageNumber = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  return (
    <div className="groups-container">
      <div className="groups-wrapper">
        <section className="groups-section">
          <div className="groups-contents">
            <div className="groups-search">
              <div className="search-input search">
                <label> 
                  <span><AddressIcon /></span>
                  <span>Enter Address </span>
                </label>
                <input />
              </div>
              <div className="date-input search">
                <label> Check in </label>
                <input />
              </div>
              <NavLink to="/create-group" className="search-button">Create Group</NavLink>
            </div>
            <h2 className="featured-title">All Groups</h2>
            <div className="spaces-filters">
              <div className="filters-left">
                <button><p>All Spaces</p>  <ArrowDown/></button>
                <button> Sport </button>
                <button> Popular </button>
                <button> Top Rated </button>
              </div>
              
              <button className="filters-button"> Filters </button>
            </div>
            <div className="groups-layout">
              {
                data?.map((data, index) => (
                  <div className="groups-item">
                    <div className="groups-image-wrapper">
                      <img src={data.image}/>
                    </div>
                    <div className="groups-details">
                      <div className="group-top">
                        <div className="group-owner">
                          <div className="owner-avatar">
                            <Avatar />
                          </div>
                          
                          <div className="owner-text">
                            <p>{data.owner}</p>
                            <p>{data.location}</p> 
                          </div>
                        </div>
                        <div className="group-info">
                          <p>{data.category}</p>
                          <p>All Skill Levels</p>
                          <p>Every Thursday</p>
                        </div>
                        
                      </div>
                      <div className="group-contents">
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                      </div>
                      <div className="group-bottom">
                        <div className="group-stats">
                          <div className="stats-item">
                            <Members />
                            <p>12 Members</p>
                          </div>
                          <div className="stats-item">
                            <PriceIcon />
                            <p>¥1500</p>
                          </div>
                          <div className="stats-item">
                            <AddressIcon />
                            <p>{data.location}</p> 
                          </div>
                          
                        </div>
                        
                        <button>Join Group</button>
                      </div>
                      
                    </div>
                    
                  </div>
                ))
              }
            </div>
          
          </div>
        </section>
        <section className="additional-filters">
          <div className="filters-wrapper">
            <div className="filters-contents">
              <div className="filters-heading">
                <h3>Additional Filters</h3>
                <p>Reset Filters</p>
              </div>
              <div className="filters-price">
                <h4>Price Range</h4>
                <div className="price-row">
                  <div className="price-input">
                    <label>¥Min</label>
                    <input />
                  </div>
                  <div className="price-input">
                    <label>¥Max</label>
                    <input />
                  </div>
                </div>
              </div>
              <div className="filters-guests">
                  <h4>Guests</h4>
                  <div className="guests-wrapper">
                    <button onClick={() => setGuests(Math.max(1, guests-1))}>-</button>
                    <p className="guests-count">{guests}</p>
                    <button onClick={() => setGuests(guests+1)}>+</button>
                    <p>Guests</p>
                  </div>
              </div>
              <div className="filters-type">
                  <h4>Type</h4>
                  <div className="types-wrapper">
                    <div>
                      <Checkbox type="Indoor" checked={true}/>
                    </div>
                    <div className="checkbox-wrapper">
                      <Checkbox type="Outdoor" checked={true}/>
                    </div>
                    <div className="checkbox-wrapper">
                      <Checkbox type="Field" checked={true}/>
                    </div>
                    <div className="checkbox-wrapper">
                      <Checkbox type="Court" checked={true}/>
                    </div>
                    
                  </div>
              </div>
            </div>
            <PartnerBanner />
            
          </div>
        </section>
      </div>
    </div>
  )
}

export default Groups;