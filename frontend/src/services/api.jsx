import axios from 'axios';

// 1. Create the instance
const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

// 2. Attach interceptor to the INSTANCE (api), not the global axios
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        
        if (token) {
            // PRACTICE: Why do we use 'Bearer' here? 
            // Hint: Look up RFC 6750.
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 3. Clean Project API
export const projectAPI = {
    // SUCCESS: This function is now "Auth-Aware" automatically!
    getProjects: async () => {
        try {
            const response = await api.get('projects/'); 
            return response.data;
        } catch (error) {
            // SENIOR TIP: Log the error to a service like Sentry in production
            console.error("API Error fetching projects:", error);
            throw error; 
        }
    },

    // CHALLENGE: Write a 'createProject' function here.
    // It should take (projectData) as an argument and use api.post()
    createProject: async (projectData) => {
        try {
            const response = await api.post('projects/', projectData);
            return response.data;
        } catch (error) {
            console.error("API Error creating project:", error);
            throw error;
        }
    }
};

export default api;