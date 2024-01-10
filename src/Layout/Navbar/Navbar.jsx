import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <div>
        <header>
            <div className="head"> 
            <div className='headleft'>
            <p>MON - SAT: 6.00 AM - 10.00 PM</p>
            <span> SUN: CLOSED</span>
            </div>
            <ul className="head_icons">
                    <li>i1</li>
                    <li>i2</li>
                    <li>i3</li>
            </ul>
            </div>
            
        </header>
        <nav>
               <div className='navbar'>
               <div className="nav_image">
                    <img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" />
                </div>
                <div className="navbar_pages">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
               </div>
            </nav>
    </div>
  )
}

export default Navbar