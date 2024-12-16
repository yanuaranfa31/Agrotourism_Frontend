import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { AuthProvider } from "./context/AuthContext";
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
import Confirmation from './pages/Confirmation'
import Dashboard from './pages/Dashboard';
import ApprovalAdmin from './pages/ApprovalAdmin';
import KuotaAdmin from './pages/KuotaAdmin';
import ProtectedRoute from './pages/ProtectedRoute';
import ProtectedAdminRoute from './pages/ProtectedAdminRoute';

function App() {
  return (
    <AuthProvider>
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
            <Route path="/confirmation" element={<Confirmation />} />

            <Route path="/" element={<ProtectedAdminRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/kuota-admin" element={<KuotaAdmin />} />
              <Route path="/approval-admin" element={<ApprovalAdmin />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;