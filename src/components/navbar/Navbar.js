import React from 'react'
import "./index.css"
import logo from "../../images/white-rubixe-logo.png"
function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'><img src={logo} alt="rubixe company logo" /></div>
        <ul className='navbar__links'>
            <li className='navbar__links_item'> <a href="./">Home</a> </li>
            <li className='navbar__links_item'> <a href="./">Services</a></li>
            <li className='navbar__links_item'><a href="./">Products</a></li>
            <li className='navbar__links_item'><a href="./">AI Internships</a></li>
            <li className='navbar__links_item'><a href="./">Career</a></li>
            <li className='navbar__links_item'><a href="./">Blog</a></li>
            <li className='navbar__links_item'><a href="./">About</a></li>
            <li className='navbar__links_item'><a href="./">Contact Us</a></li>
        </ul>
    </nav>
  )
}

export default Navbar