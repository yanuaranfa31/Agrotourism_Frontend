import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../asset/logo.png"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${isScrolled ? 'bg-white bg-opacity-80 shadow-lg' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center py-2 px-2 sm:px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </div>

                {/* Menu Navigasi */}
                <ul className="flex space-x-6 mx-auto">
    <li>
        <Link to="/" onClick={scrollToTop} className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">
            Beranda
        </Link>
    </li>
    <li>
        <span onClick={() => scrollToSection('destinasi')} className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">
            Destinasi Wisata
        </span>
    </li>
    <li>
        <span onClick={() => scrollToSection('panduan-booking')} className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">
            Panduan Booking
        </span>
    </li>
    <li>
        <Link to="/cek-kuota" className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">Cek Kuota</Link>
    </li> 
    <li>
        <Link to="/penginapan" className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">Penginapan</Link>
    </li>
</ul>

                {/* Register dan Login */}
                <div className="flex items-center space-x-4">
                    <Link to="/register" className="px-4 py-2 bg-blue-500 text-white rounded-md transition-all cursor-pointer hover:bg-blue-700">
                        Register
                    </Link>                    
            <Link to="/login" className="p-3 hover:bg-black hover:text-white rounded-md transition-all cursor-pointer">Login</Link>

                </div>
            </div>
        </header>
    );
};

export default Navbar;