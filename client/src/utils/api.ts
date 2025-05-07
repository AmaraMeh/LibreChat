import axios from 'axios';

// Set the base URL for all API requests
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3080';

// Configure axios defaults
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export { baseURL }; 
