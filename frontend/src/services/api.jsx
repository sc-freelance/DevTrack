import axios from 'axios';

// Use 127.0.0.1 instead of localhost to avoid CORS/DNS issues
const API_URL = 'http://127.0.0.1:8000/api'; 

export const projectAPI = {
    getProjects: async () => {
        try {
            // the await keyword is used to wait for the axios.get request to complete before proceeding.
            const response = await axios.get(`${API_URL}/projects/`);
            return response.data;
        } catch (error) {
            console.error("Axios Error Details:", error.response || error.message);
            throw error;
        }
    },

    deleteProject: async (projectId) => {
        try {
            const response = await axios.delete(`${API_URL}/projects/${projectId}/`);
            return response.data;
        } catch (error) {
            // the || operator is used to provide a fallback value in case error.response is undefined. 
            // If error.response is undefined, it will log error.message instead, which contains a more general description of the error.
            console.error("Axios Error Details:", error.response || error.message);
            // the throw statement is used to throw an error if the delete request fails. 
            // This allows the calling function to catch the error and handle it appropriately, such as displaying an error message to the user.
            throw error; 
        }
    }
};

export default projectAPI;