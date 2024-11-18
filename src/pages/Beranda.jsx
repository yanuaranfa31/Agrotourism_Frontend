import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import GuaJepang from "../asset/GuaJepang.jpg";
import GurunTeh from "../asset/GurunTeh.jpg";
import PuncakSakub from "../asset/PuncakSakub.jpg";
import Kaligua from "../asset/Kaligua.jpg";
import Teh from "../asset/Teh.jpg";
import DestinasiWisata from "./DestinasiWisata";
import PanduanBooking from "./PanduanBooking";
import Footer from "../components/Footer";
import BookingForm from "./BookingForm";

export default function Beranda() {
    const [showForm, setShowForm] = useState(false); 

    const handleBookingClick = () => {
        setShowForm(true); 
    };

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${Teh})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                }}
            >
                <div className="w-full h-screen flex flex-col justify-center items-start text-left text-white px-4 sm:pl-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-poppins">
                        Menghadirkan Eksplorasi Alam <br /> dan Budaya dalam Satu Platform
                    </h1>
                    
                    <div className="mt-10 flex items-center space-x-4">
                        <button
                            onClick={handleBookingClick}
                            className="bg-blue-300 text-white px-4 py-2 rounded-full font-bold flex items-center hover:bg-gray-800"
                        >
                            Booking Now
                            <span className="ml-2 text-xl">→</span>
                        </button>
                        <a href="#" className="underline text-black hover:text-gray-600">Explore More</a>
                    </div>
                </div>
            </div>

            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                        <h2 className="text-2xl font-semibold mb-4">Form Pemesanan Tiket</h2>
                        <BookingForm />
                        <button
                            onClick={() => setShowForm(false)}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <section>
                <DestinasiWisata />
            </section>

            <section>
                <PanduanBooking />
            </section>

            <section>
                <Footer />
            </section>
        </div>
    );
}
