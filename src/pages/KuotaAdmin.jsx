import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KuotaAdmin = () => {
  const [kuotas, setKuotas] = useState([]);
  const [formData, setFormData] = useState({
    tanggal: '',
    destinasi: '',
    kuota: 0,
    sisa_kuota: 0,
  });

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchKuotas();
  }, []);

  const fetchKuotas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/kuota');
      setKuotas(response.data);
    } catch (error) {
      console.error('Error fetching kuotas:', error);
      setErrorMessage('Failed to fetch kuotas. Please try again later.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (editMode) {
      // Update existing kuota
      try {
        const response = await axios.put(`http://localhost:5000/api/kuota/${editId}`, formData);
        setKuotas(kuotas.map((kuota) => (kuota._id === editId ? response.data : kuota)));
        resetForm();
        setEditMode(false);
      } catch (error) {
        console.error('Error updating kuota:', error);
        setErrorMessage('Failed to update kuota. Please try again.');
      }
    } else {
      // Add new kuota
      try {
        const response = await axios.post('http://localhost:5000/api/kuota', formData);
        setKuotas([...kuotas, response.data]);
        resetForm();
      } catch (error) {
        console.error('Error creating kuota:', error);
        setErrorMessage('Failed to create kuota. Please try again.');
      }
    }
  };

  const handleEdit = (id) => {
    const kuotaToEdit = kuotas.find((kuota) => kuota._id === id);
    setFormData({
      tanggal: kuotaToEdit.tanggal,
      destinasi: kuotaToEdit.destinasi,
      kuota: kuotaToEdit.kuota,
      sisa_kuota: kuotaToEdit.sisa_kuota,
    });
    setEditId(id);
    setEditMode(true);
  };

  const handleDelete = async (id) => {
    setErrorMessage('');
    try {
      await axios.delete(`http://localhost:5000/api/kuota/${id}`);
      setKuotas(kuotas.filter((kuota) => kuota._id !== id));
    } catch (error) {
      console.error('Error deleting kuota:', error);
      setErrorMessage('Failed to delete kuota. Please try again.');
    }
  };

  const resetForm = () => {
    setFormData({
      tanggal: '',
      destinasi: '',
      kuota: 0,
      sisa_kuota: 0,
    });
    setEditId(null);
    setEditMode(false);
  };

  const handleBackToAdmin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="max-w-7xl mx-auto pt-20 pb-8 px-6">
      <button
        onClick={handleBackToAdmin}
        className="bg-[#6B9C89] text-white py-2 px-4 rounded-lg hover:bg-[#557e68] transition duration-300"
      >
        Back to Admin
      </button>

      <h1 className="text-3xl font-bold text-center mb-6">Kuota Management</h1>

      {errorMessage && (
        <p className="bg-red-100 text-red-600 p-4 rounded-lg mb-6 text-center">
          {errorMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
              Tanggal
            </label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B9C89] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="destinasi" className="block text-sm font-medium text-gray-700">
              Destinasi
            </label>
            <input
              type="text"
              name="destinasi"
              value={formData.destinasi}
              onChange={handleInputChange}
              placeholder="Destinasi"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B9C89] focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="kuota" className="block text-sm font-medium text-gray-700">
              Kuota
            </label>
            <input
              type="number"
              name="kuota"
              value={formData.kuota}
              onChange={handleInputChange}
              placeholder="Kuota"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B9C89] focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="sisa_kuota" className="block text-sm font-medium text-gray-700">
              Sisa Kuota
            </label>
            <input
              type="number"
              name="sisa_kuota"
              value={formData.sisa_kuota}
              onChange={handleInputChange}
              placeholder="Sisa Kuota"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6B9C89] focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#6B9C89] text-white font-semibold rounded-lg shadow-md hover:bg-[#557e68] transition duration-300"
        >
          {editMode ? 'Update Kuota' : 'Add Kuota'}
        </button>
      </form>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">All Kuotas</h2>
      <ul className="space-y-4">
        {kuotas.map((kuota) => (
          <li key={kuota._id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold text-[#6B9C89]">{kuota.destinasi}</p>
                <p className="text-sm text-gray-600">{kuota.tanggal}</p>
                <p className="text-sm text-gray-600">
                  Kuota: {kuota.kuota}, Sisa Kuota: {kuota.sisa_kuota}
                </p>
              </div>
              <div className="space-x-4">
                <button
                  onClick={() => handleEdit(kuota._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(kuota._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KuotaAdmin;
