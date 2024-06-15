import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import '../components/style/Login.css';

const RegisterPage = () => {
    const { register } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password);
            alert('Registration successful');
        } catch (error) {
            alert('Failed to register');
        }
    };

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <input
                    className="login-form__input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    className="login-form__input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button className="login-form__button" type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;