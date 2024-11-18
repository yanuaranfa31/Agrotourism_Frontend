import React from 'react';

const Footer = () => {
    return (
    <footer className="bg-gray-800 text-white py-8 w-full">
        <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">LINK TERKAIT</h4>
            <ul>
                <li><a href="#" className="hover:text-gray-400">Destinasi Wisata</a></li>
                <li><a href="#" className="hover:text-gray-400">Panduan Booking</a></li>
                <li><a href="#" className="hover:text-gray-400">Cek Kuota</a></li>
                <li><a href="#" className="hover:text-gray-400">Berita</a></li>
                <li><a href="#" className="hover:text-gray-400">Penginapan</a></li>
            </ul>
            </div>
            <div className="md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">INFORMASI</h4>
            <ul>
                <li className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <p>Jl.pandansari-kaligua, dukuh, Jl. Kaligua, Kaliguwa, Pandansari, Kec. Paguyangan, Kabupaten Brebes, Jawa Tengah 52276</p>
                </li>
                <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <p>084546576871</p>
                </li>
            </ul>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
            <img src="./logo.png" alt="Logo" className="w-24" />
            </div>
        </div>
        </div>
    </footer>
    );
};

export default Footer;
