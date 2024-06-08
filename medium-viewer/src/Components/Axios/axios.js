import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4048', // Your backend URL
  timeout: 15000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
