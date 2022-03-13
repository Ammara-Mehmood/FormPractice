import React from 'react'
import NavImage from './Images/NavImage.png'
import './App.css';
import MarathonLogo from './Images/MarathonLogo.png';
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div class="container">
    <div class="back-image">
        <nav>
            <div class="list">
                <div class="marathon-and-staffing">
                        <img src={MarathonLogo} alt=""/>
                </div>
                <div class="marathon-and-staffing">
                    <Link to='/home' >
                       
                        Advance Search
                       </Link>
                </div>
                <div class="marathon-and-staffing">
                    <Link to='/About'>
                        
                        Saved Job & Searches
                   </Link>
              </div>
                <div class="marathon-and-staffing">
                    <Link to='/contact'>
                       
                        Apply Now
                    </Link>
                </div>
            </div>
            <button class="login-btn list">
                Account Log In
            </button>
        </nav>
    </div>
    </div>

  )
}

export default Navbar