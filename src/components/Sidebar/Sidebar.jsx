import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard-logo.svg";
import { ReactComponent as SpacesIcon } from "../../assets/icons/spaces-logo.svg";
import { ReactComponent as ExperiencesIcon } from "../../assets/icons/experiences-icon.svg";
import { ReactComponent as GroupsIcon } from "../../assets/icons/groups-logo.svg";
import { ReactComponent as FavoriteIcon } from "../../assets/icons/favorites-logo.svg";
import { ReactComponent as LoginIcon } from "../../assets/icons/login-icon.svg";
import { ReactComponent as AvanteLogo } from "../../assets/icons/avante-logo.svg";
import "./Sidebar.scss";


const Sidebar = () => {
  const location = useLocation();
  const getNavLinkClass = path => {
    return location.pathname === path
    ? "nav-link active"
    : "nav-link";
     };
  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <ul className="nav-list">
          <li className="nav-logo">
            <AvanteLogo />
            <h1>oza</h1>
          </li>
          <li className={getNavLinkClass("/dashboard")}>
            <DashboardIcon />
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li className={getNavLinkClass("/spaces")}>
            <SpacesIcon />
            <NavLink to="/spaces">Spaces</NavLink>
          </li>
          <li className={getNavLinkClass("/experiences")}>
            <ExperiencesIcon />
            <NavLink to="/experiences">Experiences</NavLink>
          </li>
          <li className={getNavLinkClass("/groups")}>
            <GroupsIcon />
            <NavLink to="/groups">Groups</NavLink>
          </li>
          <li className={getNavLinkClass("/favorites")}>
            <FavoriteIcon />
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
        <div className="account-controls">
          <LoginIcon />
          <NavLink to="/signin">Sign in</NavLink>
        </div>
      </div>
      
    </nav>
    
  )
}

export default Sidebar;