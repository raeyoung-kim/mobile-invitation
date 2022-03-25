import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;
