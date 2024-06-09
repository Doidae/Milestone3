import React from 'react';
import './style/Navbar.css';
import logo from '../components/icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="Website Logo" className="navbar-logo" />
                <span className="navbar-title">Trophy Tactician</span>
            </div>
            <div className="navbar-right">
                <Link to='/' className="navbar-button">Login</Link>
                <Link to='/register' className="navbar-button2">Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar;