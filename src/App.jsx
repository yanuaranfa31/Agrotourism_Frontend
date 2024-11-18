import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import CekKuota from './pages/CekKuota';
import DestinasiWisata from './pages/DestinasiWisata';
import PanduanBooking from './pages/PanduanBooking';
import Penginapan from './pages/Penginapan';
import Register from './pages/Register';
import Login from './pages/Login';
import LupaPassword from './pages/LupaPassword';
import BookingForm from './pages/BookingForm';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lupa-password" element={<LupaPassword />} />

          <Route path="/" element={<Beranda />} />
          <Route path="/cek-kuota" element={<CekKuota />} />
          <Route path="/destinasi-wisata" element={<DestinasiWisata />} />
          <Route path="/panduan-booking" element={<PanduanBooking />} />
          <Route path="/penginapan" element={<Penginapan />} />

          <Route path="/booking" element={<BookingForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;