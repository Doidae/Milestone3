import React from 'react';
import './Navbar.css';
import logo from '../components/icon.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="Website Logo" className="navbar-logo" />
                <span className="navbar-title">Trophy Tactician</span>
            </div>
            <div className="navbar-right">
                <button className="navbar-button">Login</button>
                <button className="navbar-button2">Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar;