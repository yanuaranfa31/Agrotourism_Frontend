import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import qrisImage from "../asset/qris.jpg"; // sesuaikan nama file dan path gambar

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    groupSize: ""
  });
  const [showPayment, setShowPayment] = useState(false);
  const [paymentFile, setPaymentFile] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setPaymentFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handlePaymentSubmit = () => {
    if (paymentFile) {
      setShowConfirmation(true);
    } else {
      alert("Unggah bukti pembayaran terlebih dahulu.");
    }
  };

  // Fungsi untuk mereset form ke kondisi awal
  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      address: "",
      groupSize: ""
    });
    setShowPayment(false);
    setPaymentFile(null);
    setShowConfirmation(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Pemesanan Tiket</h2>
      
      {!showPayment ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Nama</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Nomor Telepon</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Masukkan nomor telepon"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Alamat</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Masukkan alamat Anda"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Jumlah Rombongan</label>
            <input
              type="number"
              name="groupSize"
              value={formData.groupSize}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Masukkan jumlah rombongan"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Pesan Tiket
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4 text-center">
          <p>Silahkan pembayaran melalui QRIS yang ada di bawah ini.</p>
          <img src={qrisImage} alt="QRIS Pembayaran" className="mx-auto w-48 mb-4" />
          <div>
            <label className="block text-sm font-semibold mb-2">Unggah Bukti Pembayaran</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            onClick={handlePaymentSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 mt-4"
          >
            Konfirmasi Pembayaran
          </button>
        </div>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <p>Mohon menunggu konfirmasi di email terkait tiket.</p>
            <button
              onClick={() => {
                resetForm(); // Reset semua form ke kondisi awal
                navigate("/"); // Arahkan user ke halaman beranda
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
