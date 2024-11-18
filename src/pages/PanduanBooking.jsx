import React from 'react';

const PanduanBooking = () => {
    return (
        <div id="panduan-booking" className="container mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold text-center mb-6">Panduan Booking</h1>
            <p className="text-lg text-center mb-4">
                Selamat datang di panduan booking kami. Di sini Anda akan menemukan langkah-langkah yang perlu diikuti untuk melakukan booking dengan mudah.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Langkah-langkah Booking:</h2>
            <ol className="list-decimal list-inside mb-8">
                <li className="mb-2">Pilih tanggal dan waktu yang diinginkan untuk booking.</li>
                <li className="mb-2">Isi formulir dengan informasi yang diperlukan, termasuk nama, email, dan nomor telepon.</li>
                <li className="mb-2">Konfirmasi informasi yang telah Anda masukkan.</li>
                <li className="mb-2">Kirimkan permintaan booking Anda.</li>
                <li className="mb-2">Tunggu konfirmasi dari tim kami melalui email atau telepon.</li>
                <li className="mb-2">Konfirmasi informasi yang telah Anda masukkan.</li>
                <li className="mb-2">Kirimkan permintaan booking Anda.</li>
                <li className="mb-2">Tunggu konfirmasi dari tim kami melalui email atau telepon.</li>

            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Syarat dan Ketentuan:</h2>
            <ul className="list-disc list-inside mb-8">
                <li className="mb-2">Booking dapat dibatalkan hingga 24 jam sebelum waktu yang dijadwalkan.</li>
                <li className="mb-2">Pastikan untuk memeriksa email konfirmasi setelah melakukan booking.</li>
                <li className="mb-2">Harga dapat berubah tergantung pada tanggal dan waktu yang dipilih.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">FAQ:</h2>
            <div className="mb-4">
                <strong>Q: Apa yang harus saya lakukan jika saya tidak menerima konfirmasi?</strong>
                <p>A: Jika Anda tidak menerima konfirmasi dalam 24 jam, silakan hubungi kami melalui email atau telepon.</p>
            </div>
            <div className="mb-4">
                <strong>Q: Apakah saya bisa mengubah tanggal booking saya?</strong>
                <p>A: Ya, Anda dapat mengubah tanggal booking Anda dengan menghubungi kami sebelum 24 jam dari waktu booking yang dijadwalkan.</p>
            </div>

            <div className="text-center mt-15">
                <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                    Kembali ke Beranda
                </a>
            </div>
        </div>
    );
};

export default PanduanBooking;