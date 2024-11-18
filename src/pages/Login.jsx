// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Tambahkan logika untuk autentikasi login, seperti mengirim data ke backend
        console.log("Login dengan", email, password);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-all">
                    Login
                </button>

                <div className="mt-4 text-center">
                    <Link to="/lupa-password" className="text-blue-500 hover:underline">
                        Lupa Password?
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
