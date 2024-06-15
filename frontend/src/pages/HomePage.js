import React from 'react';
import '../components/style/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="intro-container">
                <h1>Welcome to the Game Achievements App!</h1>
                <p>This app helps you track and manage your game achievements. Sign up now to start your journey!</p>
                <Link to='/register' className="navbar-button2">Sign Up</Link>
            </div>
            <div className="image-container">
                <img src="https://via.placeholder.com/400" alt="Game Achievements" />
            </div>
            
        </div>
    );
};

export default HomePage;
