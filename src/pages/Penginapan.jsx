import Navbar from "../components/Navbar";
// Penginapan.jsx

import React from 'react';

const Penginapan = () => {
  // Data penginapan (dapat disesuaikan)
  const hotels = [
    {
      id: 1,
      name: 'Grand Dian Hotel Bumiayu',
      facilities: ['Free Breakfast', 'AC Room', 'Ramah Difabel', 'Free Wifi', 'Restoran', 'Tempat Parkir (Gratis)'],
      address: 'Jl. Raya Tonjong, Lebak, Penggarutan, Kec. Bumiayu, Kabupaten Brebes, Jawa Tengah 52273',
      price: 'Rp 475.000/malam',
      phone: '+62 812-3581-9950',
      imageUrl: 'GrandDian.jpg',
    },
    {
      id: 2,
      name: 'Hotel Melati',
      facilities: ['Gym', 'Free Parking', 'Pet Friendly', 'Laundry Service', 'Airport Shuttle'],
      address: 'Jl. Melati No. 12, Jakarta',
      price: 'Rp 350.000/malam',
      phone: '+62 811-9876-5432',
      imageUrl: 'link-gambar-hotel-melati.jpg',
    },
    // Tambahkan data penginapan lainnya jika perlu
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 mt-16">Daftar Penginapan</h1>
      <div className="grid gap-8">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="w-1/3 h-48 object-cover"
            />
            <div className="w-2/3 p-4">
              <h2 className="text-2xl font-semibold">{hotel.name}</h2>
              <p className="text-gray-700 mt-2 font-semibold">Harga: {hotel.price}</p>
              <ul className="grid grid-cols-2 list-disc list-inside text-gray-700 mt-2 gap-x-4">
                {hotel.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">No. Telepon: {hotel.phone}</p>
              <p className="text-gray-500 mt-2">{hotel.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Penginapan;
