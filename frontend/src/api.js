import axios from 'axios';

const API_URL = '/api';

export const searchDocuments = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search`, { params: { q: query } });
    console.log('Search results:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error searching documents:', error);
    throw error;
  }
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};