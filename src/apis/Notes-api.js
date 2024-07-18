import axios from 'axios';
import { getUserToken } from "./Auth-util";  // Adjust the import path based on your project structure

const NotesApiBackend = axios.create({
    baseURL: `https://notes-app-backend-3i2z.onrender.com`
    // baseURL: `http://localhost:3000`
});

NotesApiBackend.interceptors.request.use((config) => {
    const token = getUserToken();
    if (token) {
        config.headers = { Authorization: `Bearer ${token}` };
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default NotesApiBackend;
