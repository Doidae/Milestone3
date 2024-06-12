import React, { useState } from 'react';
import axios from 'axios';
import './style/Login.css'


const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            onLoginSuccess(response.data.token); 
            setUsername('');
            setPassword('');
            setError('');
        } catch (error) {
            setError('Invalid login credentials');
        }
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error && <p className="login-form__error">{error}</p>}
                <input
                    className="login-form__input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    className="login-form__input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="login-form__button" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;