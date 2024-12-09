import React, { createContext, useState } from 'react';

// Membuat AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true); // Menandakan bahwa user telah login
        localStorage.setItem('isLoggedIn', 'true'); // Menyimpan status login di localStorage
    };

    const logout = () => {
        setIsLoggedIn(false); // Menandakan bahwa user telah logout
        localStorage.removeItem('isLoggedIn'); // Menghapus status login dari localStorage
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
