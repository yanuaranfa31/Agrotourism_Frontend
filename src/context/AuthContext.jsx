import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api'

const AuthContext = createContext();

const getUserFromLocalStorage = () => {
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');

    if (token && userString) {
        const user = JSON.parse(userString);
        return { token, user };
    }

    return null;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // Fetch user information from the API or local storage
            const data = getUserFromLocalStorage(); // Implement this function
            setUser(data.user);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const login = async (credentials) => {
        // Implement login logic using your API client
        try {

            const data = await api.login(credentials);

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user))

            return data.user;
        } catch (error) {
            setError(error.message);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};