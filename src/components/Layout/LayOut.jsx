import React from 'react'
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';
function LayOut() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default LayOut