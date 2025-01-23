import axios from 'axios';

//auth
export const authApi = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_ADDRESS}`,
  timeout: 5000,
});
