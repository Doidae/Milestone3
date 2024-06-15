import React from 'react';
import './style/Navbar.css';
import logo from '../components/icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-left">
                <Link to="/">
                    <img src={logo} alt="Website Logo" className="navbar-logo" />
                </Link>
                <span className="navbar-title">Trophy Tactician</span>
            </div>
            <div className="navbar-right">
                <Link to='/Login' className="navbar-button">Login</Link>
                <Link to='/register' className="navbar-button2">Sign Up</Link>
            </div>
        </nav>
    )
}

export default Navbar;