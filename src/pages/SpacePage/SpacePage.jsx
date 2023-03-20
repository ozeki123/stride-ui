import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import getSpaceById from "../../api/getSpaceById";
import { ReactComponent as HeartIcon } from "../../assets/icons/favorites-logo.svg"; 
import testIcon from "../../assets/icons/groups-logo.svg";
import IconComponent from "../../components/IconComponent/IconComponent";
import "./SpacePage.scss";
import { ReactComponent as Equipment } from "../../assets/icons/groups-logo.svg";
import { ReactComponent as Avatar } from "../../assets/images/avatar-1.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star-svgrepo-com.svg";
import { ReactComponent as GroupIcon } from "../../assets/icons/group-icon.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar-icon.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location-svgrepo-com.svg"
import mapImage from "../../assets/images/map-image.png";
import CheckoutWidget from "../../components/CheckoutWidget/CheckoutWidget";

const SpacePage = () => {
  const { id } = useParams();
  console.log(id);

  const { data, error, isError, isLoading } = useQuery(['space', id], () => getSpaceById(id));
  console.log(data);
  return (
    <div className="space-container">
      <div className="space-wrapper">
        <section className="space-section">
          <section className="space-contents">
            <div className="space-nav">
                <p>Spaces</p>
                <p>{">"}</p>
                <p>{data?.title}</p>
              </div>
            <section className="space-banner">
              
              <div className="space-image-wrapper">
                <img src={data?.image}/>
              </div>
              
              <div className="banner-details">
                <div className="banner-host">
                  <div className="host-details">
                    <p>Host</p>
                    <p>{data?.owner}</p>
                    <div className="verified-icon"></div>
                  </div>
                  
                  <ul className="info-preview">
                    <li className="preview-item">
                      <GroupIcon />
                      <p>20 Guests</p>
                    </li>
                    <li className="preview-item">
                      <GroupIcon />
                      <p>24 hours</p>
                    </li>
                    <li className="preview-item">
                      <GroupIcon />
                      <p>1 Court</p>
                    </li>
                  </ul>
                </div>
                <div className="banner-actions">
                  <div className="heart-wrapper">
                    <HeartIcon />
                  </div>
                  <div className="button-wrapper">
                    <NavLink to="/booking-form" state={{data: data}}>Check Availability</NavLink>
                  </div>
                  
                </div>
                
              </div>
            </section>  

            <section className="space-details">
              <section className="space-description">
                <h1>{data?.title}</h1>
                <p className="space-location">{data?.location}</p>
                <h2>About this space</h2>
                <p>{data?.description}</p>
                
              </section>
              <section className="space-amenities">
                <h2>Amenities</h2>
                <ul className="amenity-list">
                  {
                    data?.amenities.map((amenity) => (
                      <li className="amenity-item">
                        <IconComponent name={amenity}/>
                        <p>{amenity}</p>
                      </li>
                    ))
                  }
                </ul>
              </section>
              <section className="space-location">
                <h2>Location</h2>
                <img src={mapImage}/>
              </section>
            </section>
          </section>
        </section>
        <section className="additional-info">
          <div className="info-wrapper">
            <div className="checkout-details">
              <div className="review-header">
                <h3>Reviews</h3>
                <p>See All</p>
              </div>
              <div className="checkout-contents">
                <CheckoutWidget title={data?.title} location={data?.location} owner={data?.owner} image={data?.image}/>
              </div>
            </div>
            <div>
              <div className="events-header">
                <h3>Events</h3>
                <p>See All</p>
              </div>
              
              <ul className="event-list">
              <li className="event-item">
                  <img src={data?.image} />
                  <div className="event-details">
                    <div className="details-left">
                      <p>Pickup Basketball</p>
                      <div className="event-date">
                        <CalendarIcon />
                        <p>April 2, 10:00 AM</p>
                      </div>
                      <div className="event-members">
                        <GroupIcon />
                        <p>14 Members</p>
                      </div>
                      
                    </div>
                    <div className="details-right">
                      <NavLink>Join</NavLink>
                    </div>
                    
                    
                  </div>
              </li>
              <li className="event-item">
                  <img src={data?.image} />
                  <div className="event-details">
                    <div className="details-left">
                      <p>Pickup Basketball</p>
                      <div className="event-date">
                        <CalendarIcon />
                        <p>April 2, 10:00 AM</p>
                      </div>
                      <div className="event-members">
                        <GroupIcon />
                        <p>14 Members</p>
                      </div>
                      
                    </div>
                    <div className="details-right">
                      <NavLink>Join</NavLink>
                    </div>
                    
                    
                  </div>
              </li>
              <li className="event-item">
                  <img src={data?.image} />
                  <div className="event-details">
                    <div className="details-left">
                      <p>Pickup Basketball</p>
                      <div className="event-date">
                        <CalendarIcon />
                        <p>April 2, 10:00 AM</p>
                      </div>
                      <div className="event-members">
                        <GroupIcon />
                        <p>14 Members</p>
                      </div>
                      
                    </div>
                    <div className="details-right">
                      <NavLink>Join</NavLink>
                    </div>
                    
                    
                  </div>
              </li>
              </ul>
            </div>
            
          </div>
          
        </section>
      </div>
    </div>
  )
}

export default SpacePage;

{/* <ul className="review-list">
              <li className="review-item">
                  <div className="review-user">
                    <div>
                      <Avatar />
                    </div>
                    
                    <div className="user-details">
                      <div className="user-text">
                        <div className="user-title">
                          <p>John Doe</p>
                          <p>January 2023</p>
                        </div>
                        
                        <div className="review-rating">
                          <StarIcon />
                          <p>4.8</p>
                        </div>
                      </div>
                      <p className="review-content">The space itself was very clean and well maintained. The surrounding nature made the experience very...</p>
                    </div>
                    
                  </div>
                  
              </li>
              <li className="review-item">
                  <div className="review-user">
                    <div>
                      <Avatar />
                    </div>
                    
                    <div className="user-details">
                      <div className="user-text">
                        <div className="user-title">
                          <p>John Doe</p>
                          <p>January 2023</p>
                        </div>
                        
                        <div className="review-rating">
                          <StarIcon />
                          <p>4.8</p>
                        </div>
                      </div>
                      <p className="review-content">The space itself was very clean and well maintained. The surrounding nature made the experience very...</p>
                    </div>
                    
                  </div>
                  
              </li>
              <li className="review-item">
                  <div className="review-user">
                    <div>
                      <Avatar />
                    </div>
                    
                    <div className="user-details">
                      <div className="user-text">
                        <div className="user-title">
                          <p>John Doe</p>
                          <p>January 2023</p>
                        </div>
                        
                        <div className="review-rating">
                          <StarIcon />
                          <p>4.8</p>
                        </div>
                      </div>
                      <p className="review-content">The space itself was very clean and well maintained. The surrounding nature made the experience very...</p>
                    </div>
                    
                  </div>
                  
              </li>
              </ul> */}