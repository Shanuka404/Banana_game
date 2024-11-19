import axios from 'axios';

// Base API configuration
const API = axios.create({
  baseURL: 'http://<YOUR_BACKEND_URL>:5000/', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API functions
export const fetchHomeData = async () => {
  try {
    const response = await API.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching home data:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await API.post('/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export default API;
