import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { user, error, loading, login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errorPage, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login(formData)
            window.location.href = '/';        
            
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                {!error && (
                    <div className="mb-4 text-red-500 text-center">{error}</div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>


                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-all"
                >Login</button>


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
