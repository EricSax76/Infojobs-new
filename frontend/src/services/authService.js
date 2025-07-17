import axios from 'axios';

const API_URL = 'http://localhost:5001/api/companies'; // ✅ base real del backend

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}`, userData); // POST a /api/companies
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

export const logout = () => {
  // Logout local — no necesitas backend aquí a menos que uses JWT blacklist
  localStorage.removeItem('empresa');
};
