import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QRISImage from "../asset/qris.jpg"; // Pastikan path gambar QRIS benar
import api from "../api";

export default function BookingForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState(""); // New state for email
    const [phoneNumber, setPhoneNumber] = useState("");
    const [numberOfTickets, setNumberOfTickets] = useState("");
    const [guideOption, setGuideOption] = useState("No");
    const [paymentMethod, setPaymentMethod] = useState("QRIS");
    const [kuotaId, setKuotaId] = useState("");
    const [kuotaOptions, setKuotaOptions] = useState([]);
    const [qrisProof, setQrisProof] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        api.getKuota().then((data) => setKuotaOptions(data));
    }, []);

    const handleNumberOfTicketsChange = (e) => {
        const value = e.target.value;
        setNumberOfTickets(value);
    };

    const handleQrisProofChange = (e) => {
        const file = e.target.files[0];
        setQrisProof(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const bookingData = {
            fullName,
            email, // Include email in the request
            phoneNumber,
            numberOfTickets,
            guideOption: guideOption === "Yes",
            paymentMethod,
            kuotaId,
        };

        try {
            api.bookTicket(bookingData, qrisProof).then((data) => {
                alert(`Booking berhasil: ${data.message}`);
                navigate("/Confirmation", { state: { bookingId: data.bookingId } });
            });
        } catch (error) {
            console.error("Error saat melakukan booking:", error);
            alert("Terjadi kesalahan. Silakan coba lagi nanti.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex">
                <div className="flex-1 pr-8">
                    <h2 className="text-2xl font-semibold mb-4">Form Pemesanan Tiket</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan nama lengkap Anda"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan email Anda"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                Nomor Telepon
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan nomor telepon Anda"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="numberOfTickets" className="block text-sm font-medium text-gray-700">
                                Jumlah Tiket
                            </label>
                            <input
                                type="number"
                                id="numberOfTickets"
                                value={numberOfTickets}
                                onChange={handleNumberOfTicketsChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan jumlah tiket"
                                min="1"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="guideOption" className="block text-sm font-medium text-gray-700">
                                Opsi Pemandu
                            </label>
                            <select
                                id="guideOption"
                                value={guideOption}
                                onChange={(e) => setGuideOption(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="Yes">Ya</option>
                                <option value="No">Tidak</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">
                                Metode Pembayaran
                            </label>
                            <select
                                id="paymentMethod"
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="QRIS">QRIS</option>
                                <option value="Other">Lainnya</option>
                            </select>
                        </div>

                        {paymentMethod === "QRIS" && (
                            <div className="mb-4">
                                <label htmlFor="qrisProof" className="block text-sm font-medium text-gray-700">
                                    Bukti Pembayaran QRIS
                                </label>
                                <input
                                    type="file"
                                    id="qrisProof"
                                    accept="image/*"
                                    onChange={handleQrisProofChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                            </div>
                        )}

                        <div className="mb-4">
                            <label htmlFor="kuotaId" className="block text-sm font-medium text-gray-700">
                                Kuota ID
                            </label>
                            <select
                                id="kuotaId"
                                value={kuotaId}
                                onChange={(e) => setKuotaId(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="" disabled>Pilih Kuota</option>
                                {kuotaOptions.map((option) => (
                                    <option key={option._id} value={option._id}>
                                        {option.destinasi}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <div className="flex-1 pl-8 flex flex-col items-center justify-start">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Scan QRIS untuk Pembayaran</h3>
                    <img
                        src={QRISImage}
                        alt="QRIS"
                        className="w-56 h-auto rounded-md shadow-md mb-4"
                    />
                </div>
            </div>
        </div>
    );
}
