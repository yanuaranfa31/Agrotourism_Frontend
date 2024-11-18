import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DestinasiWisata from "./DestinasiWisata";
import PanduanBooking from "./PanduanBooking";
import Footer from "../components/Footer";


function CekKuota() {
    // Data awal, bisa diganti dengan data dinamis dari API
    const dataKuota = [
        { tanggal: '2024-11-01', namaWisata: 'Agrowisata Kaligua', jumlahKuota: 50, sisaKuota: 30 },
        { tanggal: '2024-11-02', namaWisata: 'Agrowisata Kaligua', jumlahKuota: 30, sisaKuota: 10 },
        { tanggal: '2024-11-03', namaWisata: 'Agrowisata Kaligua', jumlahKuota: 40, sisaKuota: 25 },
        { tanggal: '2024-11-04', namaWisata: 'Agrowisata Kaligua', jumlahKuota: 60, sisaKuota: 50 },
    ];

    const [selectedMonth, setSelectedMonth] = useState('11'); // State untuk bulan yang dipilih

    // Fungsi untuk mengubah bulan
    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    return (
        <div className="p-6 pt-20">
            <h2 className="text-2xl font-bold mb-4">Cek Kuota Wisata</h2>

            {/* Dropdown untuk memilih bulan */}
            <div className="mb-4">
                <label htmlFor="month" className="mr-2 text-lg">Pilih Bulan:</label>
                <select
                    id="month"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    className="px-4 py-2 border border-gray-300 rounded-md"
                >
                    <option value="01">Januari</option>
                    <option value="02">Februari</option>
                    <option value="03">Maret</option>
                    <option value="04">April</option>
                    <option value="05">Mei</option>
                    <option value="06">Juni</option>
                    <option value="07">Juli</option>
                    <option value="08">Agustus</option>
                    <option value="09">September</option>
                    <option value="10">Oktober</option>
                    <option value="11">November</option>
                    <option value="12">Desember</option>
                </select>
            </div>

            {/* Tabel Kuota Wisata */}
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border border-gray-300 text-left">Tanggal</th>
                        <th className="px-4 py-2 border border-gray-300 text-left">Nama Wisata</th>
                        <th className="px-4 py-2 border border-gray-300 text-left">Jumlah Kuota</th>
                        <th className="px-4 py-2 border border-gray-300 text-left">Sisa Kuota</th>
                    </tr>
                </thead>
                <tbody>
                    {dataKuota
                        .filter((item) => item.tanggal.startsWith(`2024-${selectedMonth}`)) // Filter data berdasarkan bulan yang dipilih
                        .map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border border-gray-300">{item.tanggal}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.namaWisata}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.jumlahKuota}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.sisaKuota}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default CekKuota;
