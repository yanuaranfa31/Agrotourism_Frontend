import React from "react";
import { Link } from "react-router-dom";

export default function Confirmation() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
                <h1 className="text-2xl font-bold text-green-600 mb-4">Transaksi Berhasil!</h1>
                <p className="text-gray-700 mb-6">
                    Mohon secara berkala mengecek email Anda untuk tiket pemesanannya.
                </p>
                <Link
                    to="/"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
}
