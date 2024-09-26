import React from 'react';
import './Navbar.css'; // Correct path if Navbar.css is in the same folder as Navbar.js
import {Link} from 'react-router-dom';


function showSidebar(e){
  e.preventDefault()
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display='flex'
}

function Navbar() {
  return (
    <div className="NavbarContainer">
      <nav>
        <ul>
          <li className="HomeButton"><a href="/">brandon</a></li>
          <li><a href="/">home</a></li>
          <li><a href="/About">about</a></li>
          <li><a href="/Projects">projects</a></li>
          <li><a href="/Contact">contact</a></li>
          <li className="menu-button"onClick={showSidebar}>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </a>
          </li>     
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;