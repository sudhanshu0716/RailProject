// src/api/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/lostandfound';

export const addLostItem = async (itemData) => {
  try {
    const response = await axios.post(`${API_URL}/add`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};

export const searchFoundItems = async (trainNumber, date) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { trainNumber, date },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching found items:', error);
    throw error;
  }
};

export const removeFoundItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/remove/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error removing found item:', error);
    throw error;
  }
};
