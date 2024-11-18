// src/pages/LupaPassword.jsx
import React, { useState } from 'react';

const LupaPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logika untuk mengirim permintaan reset password
        console.log("Permintaan reset password untuk", email);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Lupa Password</h2>
                <p className="text-gray-700 mb-4 text-center">Masukkan email Anda untuk menerima instruksi reset password.</p>
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
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-all">
                    Kirim Instruksi
                </button>
            </form>
        </div>
    );
};

export default LupaPassword;
