import axios from 'axios';

export const key = "03678236aef85c60488ab6c7bd5b46b493a13fa5";

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4/',
  headers: {
    'Authorization': `Bearer ${key}`
  }
});

export default api;