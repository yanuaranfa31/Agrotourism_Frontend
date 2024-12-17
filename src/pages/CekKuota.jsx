import React, { useState, useEffect } from 'react';
import api from '../api';
import moment from 'moment';

function CekKuota() {
    const [data, setData] = useState([]);
    const currentMonth = new Date().getMonth() + 1; // Bulan saat ini, ditambah 1 karena 0-based
    const formattedMonth = currentMonth.toString().padStart(2, '0'); // Format 2 digit, seperti '01'
    const [selectedMonth, setSelectedMonth] = useState(formattedMonth);
    const [filteredData, setFilteredData] = useState([]); // State for filtered data
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.getKuota();
            setData(response);
            setFilteredData(response); // Initially set filtered data to all data
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Terjadi kesalahan saat mengambil data kuota.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Fetch data once on component mount

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    // Function to filter data based on selected month
    const filterData = (month) => {
        const filtered = data.filter((item) => item.tanggal.startsWith(`2024-${month}`));
        setFilteredData(filtered);
    };

    useEffect(() => {
        filterData(selectedMonth); // Filter data on month change
    }, [selectedMonth, data]); // Dependency array includes data for refiltering on data update

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
                    {Array.from({ length: 12 }, (_, i) => {
                        const month = (i + 1).toString().padStart(2, '0');
                        return <option key={month} value={month}>{`Bulan ${month}`}</option>;
                    })}
                </select>
            </div>

            {isLoading ? (
                <div className="text-center">Memuat data kuota...</div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className='text-center py-2 px-4'>Tanggal</th>
                            <th className='text-center py-2 px-4'>Nama Wisata</th>
                            <th className='text-center py-2 px-4'>Jumlah Kuota</th>
                            <th className='text-center py-2 px-4'>Sisa Kuota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td className='text-center py-2 px-4'>{moment(item.tanggal).format('YYYY-MM-DD')}</td>
                                <td className='text-center py-2 px-4'>{item.destinasi}</td>
                                <td className='text-center py-2 px-4'>{item.kuota}</td>
                                <td className='text-center py-2 px-4'>{item.sisa_kuota}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default CekKuota;
