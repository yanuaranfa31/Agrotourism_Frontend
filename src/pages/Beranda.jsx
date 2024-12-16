import React from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import Teh from "../asset/Teh.jpg";
import DestinasiWisata from "./DestinasiWisata";
import PanduanBooking from "./PanduanBooking";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

export default function Beranda() {
    const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi
    const { user, logout } = useAuth();

    const handleBookingClick = () => {
        // Cek apakah user sudah login
        if (user) {
            // Jika sudah login, navigasi ke halaman BookingForm
            navigate("/booking");
        } else {
            // Jika belum login, arahkan ke halaman login
            alert("Anda harus login terlebih dahulu untuk melakukan booking.");
            navigate("/login");
        }
    };

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${Teh})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                }}
            >
                <div className="w-full h-screen flex flex-col justify-center items-start text-left text-white px-4 sm:pl-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight font-poppins">
                        Menghadirkan Eksplorasi Alam <br /> dan Budaya dalam Satu Platform
                    </h1>

                    <div className="mt-10 flex items-center space-x-4">
                        <button
                            onClick={handleBookingClick} // Pindah ke halaman BookingForm atau Login
                            className="bg-blue-300 text-white px-4 py-2 rounded-full font-bold flex items-center hover:bg-gray-800"
                        >
                            Booking Now
                            <span className="ml-2 text-xl">→</span>
                        </button>
                    </div>
                </div>
            </div>

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
