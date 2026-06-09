import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Adjust this to your backend URL

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Automatically inject the token into every outgoing API transaction
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; 
    }
    return config;
});

export const projectAPI = {
    createProject: async (projectData) => {
        const response = await api.post('/projects/', projectData);
        return response.data;
    },
    getProjects: async () => {
        const response = await api.get('/projects/');
        return response.data;
    },
    getProject: async (id) => {
        const response = await api.get(`/projects/${id}/`);
        return response.data;
    },

    deleteProject: async (id) => { 

       const response = await axios.delete(`${API_BASE_URL}/projects/${id}/`); 
       return response.data;
    },
};

