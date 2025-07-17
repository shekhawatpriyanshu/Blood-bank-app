import axios from 'axios';

// ✅ Automatically picks from .env file
const API = axios.create({
  baseURL:  process.env.REACT_APP_BASEURL  || "http://localhost:8080/api/v1"
  // if using CRA (Create React App), use:
  // baseURL: process.env.REACT_APP_BASEURL || "http://localhost:8080/api/v1"
});

// ✅ Attach token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
