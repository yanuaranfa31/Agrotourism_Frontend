import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import api from '../api'

const ApprovalAdmin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [action, setAction] = useState('approve');
  const [selectedBookingId, setSelectedBookingId] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/bookings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookings(response.data);
    } catch (err) {
      setError('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const handleApproveReject = async (id, action) => {
    try {
      if (action == 'approve') {
        const response = await api.approveBooking(id)
        alert("Success Approve booking");
        setSelectedBookingId(null);
        setEmail('');
      } else {
        const response = await api.rejectBooking(id)
        alert("Success Rejecting booking");
        setSelectedBookingId(null);
        setEmail('');
      }
      fetchBookings();
    } catch (err) {
      console.log(err);
      
      alert('Error while approving or rejecting booking.');
    }
  };

  const handleDeleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`http://localhost:5000/api/booking/delete-booking/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert(response.data.message);
        fetchBookings();
      } catch (err) {
        alert('Error while deleting booking.');
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 p-8 pt-20">
        <h1 className="text-3xl font-bold text-[#6B9C89] mb-4">Booking Approval</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Pending Bookings</h2>

          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">ID</th>
                <th className="px-4 py-2 border-b">Full Name</th>
                <th className="px-4 py-2 border-b">Phone Number</th>
                <th className="px-4 py-2 border-b">Total Amount</th>
                <th className="px-4 py-2 border-b">Status</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(bookings) && bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="px-4 py-2 border-b">{booking._id}</td>
                    <td className="px-4 py-2 border-b">{booking.fullName}</td>
                    <td className="px-4 py-2 border-b">{booking.phoneNumber}</td>
                    <td className="px-4 py-2 border-b">{booking.totalAmount}</td>
                    <td className="px-4 py-2 border-b">{booking.status}</td>
                    <td className="px-4 py-2 border-b">
                      <button
                        onClick={() => handleApproveReject(booking._id, 'approve')}
                        className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 mr-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleApproveReject(booking._id, 'reject')}
                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-green-600 mr-2"
                      >
                        Reject
                      </button>
                      {/* <button
                        onClick={() => handleDeleteBooking(booking._id)}
                        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button> */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No bookings available.
                  </td>
                </tr>
              )}

            </tbody>
          </table>

          {/* {selectedBookingId && (
            <div className="mt-6 p-4 bg-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Enter Email and Choose Action</h3>
              <div className="mb-4">
                <label className="block text-lg mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border px-4 py-2 w-full rounded-md"
                  placeholder="Enter user email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg mb-2">Action</label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setAction('approve')}
                    className={`px-4 py-2 rounded-md ${action === 'approve' ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => setAction('reject')}
                    className={`px-4 py-2 rounded-md ${action === 'reject' ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
                  >
                    Reject
                  </button>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleApproveReject}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Confirm {action.charAt(0).toUpperCase() + action.slice(1)}
                </button>
                <button
                  onClick={() => setSelectedBookingId(null)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          )} */}
        </div>

        <div className="mt-4">
          <Link
            to="/dashboard"
            className="bg-[#6B9C89] text-white py-2 px-4 rounded-lg shadow hover:bg-[#557e68] transition duration-300"
          >
            Back to Admin Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApprovalAdmin;
