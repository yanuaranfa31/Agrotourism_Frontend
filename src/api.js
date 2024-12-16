import axios from 'axios';

const baseUrl = 'http://localhost:5000/api'; // Replace with your actual base URL

const token = localStorage.getItem('token')

const api = axios.create({
  baseURL: baseUrl,
});

// Add a function to set the authorization header (if using Bearer token)
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Function for user registration (POST /auth/register)
const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

// Function for user login (POST /auth/login)
const login = async (credentials) => {
  const response = await api.post('/auth/login', credentials);

  if (response.data.token) {
    setAuthToken(response.data.token);
  }
  return response.data;
};

// Function for booking a ticket (POST /bookinguser/book-ticket with multipart/form-data)
const bookTicket = async (bookingData, qrisProof) => {
  const formData = new FormData();
  formData.append('fullName', bookingData.fullName);
  formData.append('email', bookingData.email);
  formData.append('phoneNumber', bookingData.phoneNumber);
  formData.append('numberOfTickets', bookingData.numberOfTickets);
  formData.append('guideOption', bookingData.guideOption);
  formData.append('paymentMethod', bookingData.paymentMethod);
  formData.append('kuotaId', bookingData.kuotaId);

  console.log(formData);

  if (qrisProof) { // Optional QRIS proof for QRIS payment method
    formData.append('qrisProof', qrisProof, qrisProof.name); // Include filename
  }

  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  };

  const response = await api.post('/bookinguser/book-ticket', formData, { headers });
  return response.data;
};

const getKuota = async () => {
  const response = await api.get('/kuota');
  return response.data;
};

const approveBooking = async (id) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  const response = await api.put(`/bookings/${id}/approve`, { headers })

  return response.data;
}

export default {
  registerUser,
  login,
  bookTicket,
  getKuota,
  approveBooking,
  setAuthToken, // Optional to expose for setting authorization token
};