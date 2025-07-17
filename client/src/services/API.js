import axios from 'axios';

const API = axios.create({
  baseURL: "https://blood-bank-app-9t1b.onrender.com/api/v1" , // CRA uses REACT_APP_ prefix
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
