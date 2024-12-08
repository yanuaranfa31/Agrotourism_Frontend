import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import QRISImage from "../asset/QRIS.jpg"; // Pastikan path gambar QRIS benar

export default function BookingForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [groupSize, setGroupSize] = useState(""); // Nilai awal kosong
    const [totalPrice, setTotalPrice] = useState(0); // Nilai awal total harga
    const [paymentProof, setPaymentProof] = useState(null); // State untuk menyimpan gambar bukti pembayaran

    const ticketPrice = 100000; // Harga satu tiket (Rp100.000)
    const navigate = useNavigate(); // Inisialisasi navigate

    // Mengupdate total harga berdasarkan jumlah rombongan
    const handleGroupSizeChange = (e) => {
        const size = e.target.value; // Ambil nilai langsung
        setGroupSize(size); // Update state

        // Hitung total harga, perlakukan input kosong sebagai 0
        const parsedSize = parseInt(size) || 0;
        setTotalPrice(parsedSize * ticketPrice);
    };

    // Menghandle submit form
    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah refresh halaman saat submit

        // Simpan data pemesanan ke sessionStorage
        const bookingData = {
            name,
            email,
            groupSize,
            totalPrice,
            paymentProof // Menyertakan bukti pembayaran
        };
        sessionStorage.setItem("bookingData", JSON.stringify(bookingData)); // Simpan data pemesanan

        // Arahkan ke halaman konfirmasi
        navigate("/confirmation");
    };

    // Menghandle perubahan file gambar (bukti pembayaran)
    const handlePaymentProofChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPaymentProof(reader.result); // Menyimpan URL gambar sementara
            };
            reader.readAsDataURL(file); // Membaca file gambar sebagai URL
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex">
                <div className="flex-1 pr-8">
                    <h2 className="text-2xl font-semibold mb-4">Form Pemesanan Tiket</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Input Nama */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Nama
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan nama Anda"
                            />
                        </div>

                        {/* Input Email */}
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
                            />
                        </div>

                        {/* Input Jumlah Rombongan */}
                        <div className="mb-4">
                            <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700">
                                Jumlah Rombongan
                            </label>
                            <input
                                type="number"
                                id="groupSize"
                                value={groupSize}
                                onChange={handleGroupSizeChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Masukkan jumlah rombongan"
                                min="0"
                            />
                        </div>

                        {/* Total Harga */}
                        <div className="mb-4">
                            <label htmlFor="totalPrice" className="block text-sm font-medium text-gray-700">
                                Total Harga (Rp)
                            </label>
                            <input
                                type="text"
                                id="totalPrice"
                                value={totalPrice.toLocaleString("id-ID")} // Format angka ke rupiah
                                readOnly
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100"
                            />
                        </div>

                        {/* Input Bukti Pembayaran */}
                        <div className="mb-4">
                            <label htmlFor="paymentProof" className="block text-sm font-medium text-gray-700">
                                Bukti Pembayaran
                            </label>
                            <input
                                type="file"
                                id="paymentProof"
                                accept="image/*"
                                onChange={handlePaymentProofChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        {/* Tombol Submit */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Gambar QRIS */}
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
