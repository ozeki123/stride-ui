import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export default Layout;