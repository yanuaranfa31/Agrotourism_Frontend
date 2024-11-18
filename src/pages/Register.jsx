import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* import axios from 'axios';
 */
function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        nama_lengkap: '',
        alamat: '',
        tanggal_lahir: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi password dan konfirmasi password
        if (formData.password !== formData.confirmPassword) {
            alert('Password dan Konfirmasi Password tidak cocok!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            if (response.data.success) {
                alert('Pendaftaran berhasil!'); // Menambahkan notifikasi sukses
                navigate('/login'); // Arahkan ke halaman login setelah sukses
            } else {
                alert(response.data.message); // Tampilkan pesan kesalahan jika ada
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert('Terjadi kesalahan, silakan coba lagi!');
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Arahkan ke halaman login
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <img src="/src/asset/logo.png" alt="logo" className="w-32 h-10 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-center mb-6">DAFTAR</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Alamat Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded w-full"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        name="nama_lengkap"
                        placeholder="Nama Lengkap"
                        value={formData.nama_lengkap}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded w-full"
                        required
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Password Konfirmasi"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="p-2 border border-gray-300 rounded w-full"
                        required
                    />
                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-700"
                        >
                            Daftar
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4">
                    Sudah punya akun?{" "}
                    <button onClick={handleLoginRedirect} className="text-blue-800 underline">
                        Masuk disini
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Register;
