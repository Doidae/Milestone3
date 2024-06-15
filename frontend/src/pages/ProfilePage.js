import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Category from '../components/Category';
import { Navigate } from 'react-router-dom';
import '../components/style/Profile.css';

const ProfilePage = () => {
    const { user, logout } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div className='Profile-container'>
            <div className="profile">
                <h1>Welcome, {user.username}</h1>
                <button onClick={logout}>Sign Out</button>
                <div className="profile__section">
                    <h2>Your Categories</h2>
                    <ul>
                        <li><Category name="Background Progress" /></li>
                        <li><Category name="Easy" /></li>
                        <li><Category name="Hard" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;