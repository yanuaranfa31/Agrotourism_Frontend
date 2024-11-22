// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Validasi masukan
        if (!email || !password) {
            setErrorMessage('Email dan password harus diisi.');
            return;
        }

        try {
            // Kirim data ke backend
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });

            // Simpan token ke localStorage
            localStorage.setItem('token', response.data.token);

            // Redirect ke halaman dashboard atau halaman lain
            navigate('/dashboard');
        } catch (error) {
            // Tangani error
            setErrorMessage(
                error.response?.data?.message || 'Terjadi kesalahan, silakan coba lagi.'
            );
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {errorMessage && (
                    <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
                )}

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
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
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-all"
                >
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
