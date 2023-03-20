import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import getExperiences from "../../api/getExperiences";
import Checkbox from "../../components/CheckBox/Checkbox";
import Paginate from "../../components/Paginate/Paginate";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import partnerImage from "../../assets/images/partner-illustration.png";
import "./Experiences.scss";
import PartnerBanner from "../../components/PartnerBanner/PartnerBanner";

const Experiences = () => {
  const [spacesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isError, isLoading } = useQuery('experiences', getExperiences);
  const [guests, setGuests] = useState(1);

  //Setup for calculating spaces per page
  const lastSpaceIndex = currentPage * spacesPerPage;
  const firstSpaceIndex = lastSpaceIndex - spacesPerPage;
  const currentSpaces = data?.slice(firstSpaceIndex, lastSpaceIndex);

  /*
    @param number
    Takes current page number from Paginate component
  */
    const setPageNumber = (pageNumber) => {
      setCurrentPage(pageNumber)
    }

  return (
    <div className="spaces-container">
      <div className="spaces-wrapper">
        <section className="spaces-section">
          <div className="spaces-contents">
            <div className="spaces-search">
              <div className="address-input search">
                <label> Enter Address </label>
                <input />
              </div>
              <div className="checkin-input search">
                <label> Check in </label>
                <input />
              </div>
              <div className="guests-input search">
                <label> Guests </label>
                <input />
              </div>
              <button className="search-button">Search</button>
            </div>
            <h2 className="featured-title">All Spaces</h2>
            <div className="spaces-filters">
              <div className="filters-left">
                <button><p>All Spaces</p>  <ArrowDown/></button>
                <button> Sport </button>
                <button> Popular </button>
                <button> Top Rated </button>
              </div>
              
              <button className="filters-button"> Filters </button>
            </div>
            <div className="spaces-layout">
              {
                currentSpaces?.map((data, index) => (
                  <div className="spaces-item">
                    <div className="space-image-wrapper">
                      <div className="price-wrapper">
                        <p>¥{data.price}</p>
                      </div>
                      
                      <img src={data.image}/>
                    </div>
                    <div className="space-details">
                      <p>{data.title}</p>
                      <p>{data.location}</p> 
                    </div>
                    
                  </div>
                ))
              }
            </div>
            <Paginate spacesPerPage={spacesPerPage} totalSpaces={data?.length} currentPage={currentPage} setPageNumber={setPageNumber}/>
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

export default Experiences;