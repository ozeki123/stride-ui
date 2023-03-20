import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import getSpaces from "../../api/getSpaces";
import getGroups from "../../api/getGroups";
import Button from "../../components/Button/Button";
import { ReactComponent as Search } from "../../assets/icons/magnifiying-glass.svg";
import { ReactComponent as Partner} from "../../assets/images/partner-illustration.svg";
import { ReactComponent as Location} from "../../assets/icons/location-svgrepo-com.svg";
import { ReactComponent as Heart} from "../../assets/icons/favorites-logo.svg";
import PartnerImage from "../../assets/images/partner-illustration.png";
import Calendar from "react-calendar";
import "./Dashboard.scss";
import axios from "axios";

const Dashboard = () => {
  const { data, error, isError, isLoading } = useQuery('spaces', getSpaces);
  // const { data: groups, error1, isError1, isLoading1 } = useQuery('groups', getGroups);
  const [date, setDate] = useState(new Date())
  const featuredData = data?.filter(data => data._id === "634c0100ed227bd79052b3fc" || data._id === "634c0d23ed227bd79052b407" || data._id === "634bdff0ed227bd79052b3f0" || data._id === "634c0f34ed227bd79052b413")
  const ratedData = data?.filter(data => data._id === "634c0100ed227bd79052b3fc" || data._id === "634c0d23ed227bd79052b407" || data._id === "634bdff0ed227bd79052b3f0")
  
  // useEffect(() => {
  //   if(!isLoading1){
  //     console.log("groups", groups.data);
  //   }
    
  // }, [groups, isLoading1])

  // useQuery('groups', getGroups)
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <section className="dashboard-section">
          <div className="dashboard-contents">
            {/* <div className="featured-heading">
                <div className="welcome-wrapper">
                  <h2>Welcome back, Guest</h2>
                </div>
                <p>View All</p>
            </div> */}
            <h2 className="featured-title">Featured Spaces</h2>
            <div className="dashboard-layout">
            
              <section className="dashboard-featured">
                
                
                <div className="featured-contents">
                  { 
                    featuredData && ratedData?.map(data => (
                      <article className="featured-space">
                        <div className="featured-image">
                          <div className="heart-icon">
                            <Heart />
                          </div>
                          
                          <div className="gradient-overlay"></div>
                          <img src={data?.image}/>
                          <div className="featured-text">
                          <p>{data?.title.split(' ').slice(0,2).join(' ')}</p>
                            <div className="featured-location">
                                <Location />
                              
                              <p>{data?.location}</p>
                            </div>
                            
                            
                            
                          </div>
                          
                        </div>
                        
                      </article>
                      
                    ))
                  }
                </div>
              </section>
              <div className="top-header">
                    <h3>Recommended Spaces</h3>
                    <p>View All</p>
                  </div>
              <section className="dashboard-top">
                
                <div className="top-spaces">
                  
                  <div className="spaces-list">
                    {
                      ratedData && ratedData?.map(data => (
                        <div className="space">
                          <div className="space-image-wrapper">
                            <img src={data?.image}/>
                          </div>
                          <div className="space-text">
                            <p>{data?.title}</p>
                            <p>{data?.location}</p>
                          </div> 
                          <div>{data?.price} <span>/hour</span></div>
                        </div>
                      ))
                    }
                  </div>
                  
                </div>
                <div className="partner-banner">
                  <img src={PartnerImage}/>
                  <h3>Become a host</h3>
                  <p>Join the oza sports community</p>
                  <button>Learn More</button>
                </div>
              </section>
            </div>
            
          </div>
        </section>
        <section className="dashboard-personal">
          <div className="dashboard-user">
            <div className="dashboard-profile">
              <div className="dashboard-avatar">
                <div className="circle"></div>
              </div>
              <div className="user-info">
                <p>John Doe</p>
                <p>Syncro Host</p>
              </div>
              <p></p>
            </div>
            <div className="dashboard-calendar">
              <Calendar onChange={setDate} value={date}/>
            </div>
            <div className="dashboard-events">
              <h3>Upcoming Events</h3>
              <div className="event-list">
                {
                  featuredData && ratedData?.map(data => (
                    <div className="event">
                      <div className="event-image">
                        <img src={data?.image}/>
                      </div>
                      <div className="event-text">
                        <p>{data?.title}</p>
                        <p>{data?.location}</p>
                      </div>
                      
                    </div>
                  ))
                }
              </div>
              
              
            </div>
            
          </div>
        </section>
      </div>
    </div>
  )
}

export default Dashboard;