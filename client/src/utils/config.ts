import { API_URL } from 'librechat-data-provider';

// Set the API base URL from environment variable
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:3080';

// Configure the API URL
API_URL.setBaseURL(baseURL);

export { baseURL }; 
