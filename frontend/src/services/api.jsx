import axios from 'axios';

// Use 127.0.0.1 instead of localhost to avoid CORS/DNS issues
const API_URL = 'http://127.0.0.1:8000/api'; 

export const projectAPI = {
    getProjects: async () => {
        try {
            const response = await axios.get(`${API_URL}/projects/`);
            return response.data;
        } catch (error) {
            console.error("Axios Error Details:", error.response || error.message);
            throw error;
        }
    }
};