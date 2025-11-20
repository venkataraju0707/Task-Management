import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const taskAPI = {
  getAllTasks: async () => {
    const response = await api.get('/');  
    return response.data;
  },

  getTask: async (id) => {
    const response = await api.get(`/${id}`);
    return response.data;
  },

  createTask: async (taskData) => {
    const response = await api.post('/', taskData);
    return response.data;
  },

  updateTask: async (id, taskData) => {
    const response = await api.put(`/${id}`, taskData);
    return response.data;
  },

  deleteTask: async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
  },
};

export default api;
