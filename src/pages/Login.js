// Login.js
import React, { useState } from 'react';
import authInstance from '../authentication/authentication';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (authInstance.login(username, password)) {
            // Redirect to the home page or handle authentication success as needed
            window.location.href = '/home';
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="flex flex-col items-center mt-20">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    className="mt-1 p-2 border rounded-md w-64"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    className="mt-1 p-2 border rounded-md w-64"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;
