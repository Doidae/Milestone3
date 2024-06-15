import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register, logout, getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getCurrentUser());
    const navigate = useNavigate();

    const handleLogin = async (username, password) => {
        const userData = await login(username, password);
        setUser(userData);
        navigate('/profile');
    };

    const handleLogout = () => {
        logout();
        setUser(null);
        navigate('/login');
    };

    const handleRegister = async (username, password) => {
        await register(username, password);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout, register: handleRegister }}>
            {children}
        </AuthContext.Provider>
    );
};
